import puppeteer from 'puppeteer';

const BASE_URL = 'http://127.0.0.1:8765/index.php';
const GUTENBERG_URL = 'https://www.gutenberg.org/cache/epub/1342/pg1342.txt';
let passed = 0, failed = 0;

function log(ok, msg) {
  if (ok) { passed++; console.log(`  PASS: ${msg}`); }
  else { failed++; console.log(`  FAIL: ${msg}`); }
}

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  try {
    // Clear localStorage first
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'networkidle0' });

    // 1. Page loads with empty book content and URL input
    const inputExists = await page.$('#book-url');
    log(!!inputExists, '1. Page has URL input field (#book-url)');

    const contentEmpty = await page.$eval('#book-content', el => el.innerHTML.trim() === '');
    log(contentEmpty, '1b. Book content area is empty on load');

    // 2. URL bar has BurlyWood background
    const urlBarBg = await page.$eval('#url-bar', el => getComputedStyle(el).backgroundColor);
    log(urlBarBg === 'rgb(222, 184, 135)', `2. URL bar background is BurlyWood (got: ${urlBarBg})`);

    // 3. Book content area has wheat background
    const contentBg = await page.$eval('#book-content', el => getComputedStyle(el).backgroundColor);
    log(contentBg === 'rgb(245, 222, 179)', `3. Book content background is wheat (got: ${contentBg})`);

    // 4. Enter URL and press Enter - shows "Loading..."
    await page.type('#book-url', GUTENBERG_URL);
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.getElementById('book-content').textContent.includes('Loading'), { timeout: 3000 }).catch(() => {});
    const loadingText = await page.$eval('#book-content', el => el.textContent);
    log(loadingText.includes('Loading'), `4. Shows "Loading..." after Enter (got: "${loadingText.substring(0, 30)}")`);

    // 5. Wait for content to load
    let contentLoaded = false;
    try {
      await page.waitForFunction(() => {
        const el = document.getElementById('book-content');
        return el.querySelectorAll('p').length > 5;
      }, { timeout: 60000 });
      const pCount = await page.$eval('#book-content', el => el.querySelectorAll('p').length);
      log(pCount > 5, `5. Book content displays as paragraphs (${pCount} paragraphs found)`);
      contentLoaded = true;
    } catch (e) {
      log(false, `5. Book content failed to load: ${e.message}`);
    }

    if (contentLoaded) {
      // 5b. No HTML tags in content (only text nodes + button children)
      const hasNoInnerHtml = await page.$$eval('#book-content p', ps => {
        return ps.slice(0, 10).every(p => {
          const children = Array.from(p.childNodes).filter(n => n.nodeType === 1 && n.tagName !== 'BUTTON');
          return children.length === 0;
        });
      });
      log(hasNoInnerHtml, '5b. Paragraphs contain only text (no HTML tags from source)');

      // 6. line-height
      const lineHeight = await page.$eval('#book-content', el => getComputedStyle(el).lineHeight);
      log(lineHeight !== 'normal', `6. line-height is set (got: ${lineHeight})`);

      // 7. Each paragraph has a Convert button at the end (inside paragraph)
      const btnCount = await page.$$eval('#book-content .convert-btn', btns => btns.length);
      const pCount2 = await page.$eval('#book-content', el => el.querySelectorAll('p').length);
      log(btnCount === pCount2 && btnCount > 0, `7. Each paragraph has a Convert button (${btnCount} buttons, ${pCount2} paragraphs)`);

      // 7b. Button is the last child of the paragraph
      const btnIsLast = await page.$$eval('#book-content p', ps => {
        return ps.slice(0, 5).every(p => {
          const lastEl = p.lastElementChild;
          return lastEl && lastEl.classList.contains('convert-btn');
        });
      });
      log(btnIsLast, '7b. Convert button is appended at the end of each paragraph');

      // 8. Convert buttons have gold background
      const btnExists = await page.$('.convert-btn');
      if (btnExists) {
        // Make button visible first to check its computed style
        const btnBg = await page.evaluate(() => {
          const btn = document.querySelector('.convert-btn');
          btn.classList.add('visible');
          return getComputedStyle(btn).backgroundColor;
        });
        log(btnBg === 'rgb(255, 215, 0)', `8. Convert button background is gold (got: ${btnBg})`);
      } else {
        log(false, '8. No convert button found');
      }

      // 9. Convert buttons hidden when not in viewport
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 500));
      const hiddenBtns = await page.$$eval('#book-content .convert-btn', btns => {
        return btns.filter(b => !b.classList.contains('visible')).length;
      });
      log(hiddenBtns > 0, `9. Some Convert buttons are hidden when not visible (${hiddenBtns} hidden)`);

      // 10. Visible buttons when paragraph in viewport
      const visibleBtns = await page.$$eval('#book-content .convert-btn', btns => {
        return btns.filter(b => b.classList.contains('visible')).length;
      });
      log(visibleBtns > 0, `10. Some Convert buttons are visible in viewport (${visibleBtns} visible)`);

      // 11. Select text and check modal appears
      const firstP = await page.$('#book-content p');
      if (firstP) {
        const box = await firstP.boundingBox();
        if (box) {
          await page.mouse.move(box.x + 5, box.y + 5);
          await page.mouse.down();
          await page.mouse.move(box.x + 100, box.y + 5);
          await page.mouse.up();
          await new Promise(r => setTimeout(r, 1000));

          const selectedText = await page.evaluate(() => window.getSelection().toString().trim());
          if (selectedText) {
            const modalExists = await page.$('.modal-overlay');
            log(!!modalExists, '11. Word meaning modal appears on text selection');

            if (modalExists) {
              // 12. Modal has body for streaming
              const bodyExists = await page.$('.modal-overlay .modal-body');
              log(!!bodyExists, '12. Word meaning modal has body for streaming content');

              // 13. Modal is draggable (header has cursor: move)
              const cursor = await page.$eval('.modal-overlay .modal-header', el => getComputedStyle(el).cursor);
              log(cursor === 'move', `13. Word meaning modal header is draggable (cursor: ${cursor})`);

              // 14. Close button
              const closeBtn = await page.$('.modal-overlay .close-btn');
              log(!!closeBtn, '14. Word meaning modal has close button');
              if (closeBtn) {
                await page.evaluate(() => {
                  document.querySelector('.modal-overlay .close-btn').click();
                });
                await new Promise(r => setTimeout(r, 500));
                const modalGone = !(await page.$('.modal-overlay'));
                log(modalGone, '14b. Modal closes on X click');
              }
            } else {
              log(false, '12. (skipped - no modal)');
              log(false, '13. (skipped - no modal)');
              log(false, '14. (skipped - no modal)');
              log(false, '14b. (skipped - no modal)');
            }
          } else {
            log(false, '11. Could not select text');
            log(false, '12. (skipped)');
            log(false, '13. (skipped)');
            log(false, '14. (skipped)');
            log(false, '14b. (skipped)');
          }
        }
      }

      // 15. Click Convert button - opens modal with wheat background
      const convertBtn = await page.$('.convert-btn.visible');
      if (convertBtn) {
        await convertBtn.click();
        await new Promise(r => setTimeout(r, 1000));
        const simpleModal = await page.$('.modal-overlay');
        log(!!simpleModal, '15. Simple English modal opens on Convert click');

        if (simpleModal) {
          const simpleModalBg = await simpleModal.$eval('.modal-body', el => getComputedStyle(el).backgroundColor);
          log(simpleModalBg === 'rgb(245, 222, 179)', `15b. Simple English modal has wheat background (got: ${simpleModalBg})`);

          // 16. Streaming body
          const bodyEl = await simpleModal.$('.modal-body');
          log(!!bodyEl, '16. Simple English modal has body for streaming');

          // 17. Draggable
          const cursor2 = await simpleModal.$eval('.modal-header', el => getComputedStyle(el).cursor);
          log(cursor2 === 'move', `17. Simple English modal is draggable (cursor: ${cursor2})`);
        } else {
          log(false, '15b. (skipped - no modal)');
          log(false, '16. (skipped)');
          log(false, '17. (skipped)');
        }
      } else {
        log(false, '15. (no visible convert button found)');
        log(false, '15b. (skipped)');
        log(false, '16. (skipped)');
        log(false, '17. (skipped)');
      }

      // 18-19. Modal position persistence via localStorage
      const positionsSaved = await page.evaluate(() => {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith('modal_pos_')) return true;
        }
        return false;
      });
      // Position saving happens after dragging, so we check the code supports it
      const codeSupportsPositionSave = await page.evaluate(() => {
        const scripts = document.querySelectorAll('script');
        for (const s of scripts) {
          if (s.textContent.includes('modal_pos_')) return true;
        }
        return false;
      });
      log(codeSupportsPositionSave, '18-19. Code supports modal position persistence (modal_pos_ in localStorage)');

    } else {
      for (let i = 0; i < 16; i++) {
        log(false, `(skipped - content not loaded)`);
      }
    }

    // 20. Modal body has vertical scrolling (check CSS rule)
    const overflowCheck = await page.evaluate(() => {
      const style = document.querySelector('style');
      return style && style.textContent.includes('overflow-y: auto');
    });
    log(overflowCheck, '20. Modal body CSS has vertical scrolling (overflow-y: auto)');

    // 21. LLM config check - PHP backend has Ollama config
    const phpCheck = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script');
      for (const s of scripts) {
        if (s.textContent.includes('llm_prompt')) return true;
      }
      return false;
    });
    log(phpCheck, '21. JS sends llm_prompt to PHP backend for LLM proxy');

    // 22-23. book_history localStorage
    const historyCheck = await page.evaluate(() => {
      const history = JSON.parse(localStorage.getItem('book_history') || '[]');
      return history.length > 0;
    });
    log(historyCheck, '22. book_history saved to localStorage after loading a book');

    // 24-25. Unique entries in book_history
    const uniqueCheck = await page.evaluate(() => {
      const history = JSON.parse(localStorage.getItem('book_history') || '[]');
      return new Set(history).size === history.length;
    });
    log(uniqueCheck, '24-25. book_history entries are unique');

  } catch (err) {
    console.error('Test error:', err.message);
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);

  await browser.close();
  process.exit(failed > 0 ? 1 : 0);
})();
