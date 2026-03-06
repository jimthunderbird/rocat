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

    // 1. Page loads - URL input exists
    const inputExists = await page.$('#bookUrl');
    log(!!inputExists, '1. Page has URL input field (#bookUrl)');

    // 1b. Book content area is empty on initial load (no history)
    const contentEmpty = await page.$eval('#bookContent', el => el.innerHTML.trim() === '');
    log(contentEmpty, '1b. Book content area is empty on load (no history)');

    // 2. URL bar has BurlyWood background
    const urlBarBg = await page.$eval('.url-bar', el => getComputedStyle(el).backgroundColor);
    log(urlBarBg === 'rgb(222, 184, 135)', `2. URL bar background is BurlyWood (got: ${urlBarBg})`);

    // 3. Book content area has wheat background
    const contentBg = await page.$eval('#bookContent', el => getComputedStyle(el).backgroundColor);
    log(contentBg === 'rgb(245, 222, 179)', `3. Book content background is wheat (got: ${contentBg})`);

    // 4. Book content has line-height 1.4
    const lineHeight = await page.$eval('#bookContent', el => getComputedStyle(el).lineHeight);
    const fontSize = await page.$eval('#bookContent', el => parseFloat(getComputedStyle(el).fontSize));
    const expectedLH = Math.round(fontSize * 1.4 * 10) / 10;
    const actualLH = parseFloat(lineHeight);
    log(Math.abs(actualLH - expectedLH) < 1, `4. line-height is ~1.4 (got: ${lineHeight})`);

    // 5. Enter URL and press Enter - shows "Loading..."
    await page.type('#bookUrl', GUTENBERG_URL);
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => {
      const el = document.getElementById('bookContent');
      return el && el.textContent.includes('Loading');
    }, { timeout: 3000 }).catch(() => {});
    const loadingText = await page.$eval('#bookContent', el => el.textContent);
    log(loadingText.includes('Loading'), `5. Shows "Loading..." after Enter (got: "${loadingText.substring(0, 30)}")`);

    // 6. Wait for content to load as paragraphs
    let contentLoaded = false;
    try {
      await page.waitForFunction(() => {
        const el = document.getElementById('bookContent');
        return el && el.querySelectorAll('p').length > 5;
      }, { timeout: 60000 });
      const pCount = await page.$eval('#bookContent', el => el.querySelectorAll('p').length);
      log(pCount > 5, `6. Book content displays as paragraphs (${pCount} paragraphs found)`);
      contentLoaded = true;
    } catch (e) {
      log(false, `6. Book content failed to load: ${e.message}`);
    }

    if (contentLoaded) {
      // 7. Paragraphs contain only text (no HTML tags except button)
      const hasNoInnerHtml = await page.$$eval('#bookContent p', ps => {
        return ps.slice(0, 10).every(p => {
          const children = Array.from(p.childNodes).filter(n => n.nodeType === 1 && n.tagName !== 'BUTTON');
          return children.length === 0;
        });
      });
      log(hasNoInnerHtml, '7. Paragraphs contain only text (no HTML tags from source)');

      // 8. Each paragraph has a Convert button inside it
      const btnCount = await page.$$eval('#bookContent .convert-btn', btns => btns.length);
      const pCount2 = await page.$eval('#bookContent', el => el.querySelectorAll('p').length);
      log(btnCount === pCount2 && btnCount > 0, `8. Each paragraph has a Convert button (${btnCount} buttons, ${pCount2} paragraphs)`);

      // 9. Button is the last child of the paragraph (appended at end, not below)
      const btnIsLast = await page.$$eval('#bookContent p', ps => {
        return ps.slice(0, 5).every(p => {
          const lastEl = p.lastElementChild;
          return lastEl && lastEl.classList.contains('convert-btn');
        });
      });
      log(btnIsLast, '9. Convert button is appended at the end of each paragraph');

      // 10. Convert button text
      const btnText = await page.$eval('.convert-btn', el => el.textContent);
      log(btnText === 'Convert to Simple English', `10. Button text is "Convert to Simple English" (got: "${btnText}")`);

      // 11. Convert buttons have gold background
      const btnBg = await page.evaluate(() => {
        const btn = document.querySelector('.convert-btn');
        btn.classList.add('visible');
        return getComputedStyle(btn).backgroundColor;
      });
      log(btnBg === 'rgb(255, 215, 0)', `11. Convert button background is gold (got: ${btnBg})`);

      // 12. Visible paragraphs show buttons, hidden ones don't
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 500));
      const hiddenBtns = await page.$$eval('#bookContent .convert-btn', btns => {
        return btns.filter(b => !b.classList.contains('visible')).length;
      });
      log(hiddenBtns > 0, `12. Some Convert buttons are hidden when paragraph not in viewport (${hiddenBtns} hidden)`);

      const visibleBtns = await page.$$eval('#bookContent .convert-btn', btns => {
        return btns.filter(b => b.classList.contains('visible')).length;
      });
      log(visibleBtns > 0, `13. Some Convert buttons are visible when paragraph in viewport (${visibleBtns} visible)`);

      // 14. Select text - modal appears
      const firstP = await page.$('#bookContent p');
      let modalTestsDone = false;
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
            log(!!modalExists, '14. Word meaning modal appears on text selection');

            if (modalExists) {
              modalTestsDone = true;

              // 15. Modal body has vertical scrolling
              const overflow = await page.$eval('.modal-overlay .modal-body', el => getComputedStyle(el).overflowY);
              log(overflow === 'auto' || overflow === 'scroll', `15. Modal body has vertical scrolling (overflow-y: ${overflow})`);

              // 16. Modal is draggable
              const cursor = await page.$eval('.modal-overlay .modal-header', el => getComputedStyle(el).cursor);
              log(cursor === 'move', `16. Modal header has cursor: move (got: ${cursor})`);

              // 17. Modal has close button
              const closeBtn = await page.$('.modal-overlay .modal-close');
              log(!!closeBtn, '17. Modal has close button');

              if (closeBtn) {
                await closeBtn.click();
                await new Promise(r => setTimeout(r, 500));
                const modalGone = !(await page.$('.modal-overlay'));
                log(modalGone, '18. Modal closes on X click');
              } else {
                log(false, '18. (skipped - no close button)');
              }
            }
          }
        }
      }
      if (!modalTestsDone) {
        log(false, '14. Word meaning modal appears on text selection');
        log(false, '15. (skipped - no modal)');
        log(false, '16. (skipped - no modal)');
        log(false, '17. (skipped - no modal)');
        log(false, '18. (skipped - no modal)');
      }

      // 19. Click Convert button - opens modal with wheat background
      // First remove any existing modals
      await page.evaluate(() => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.remove());
      });
      const convertBtn = await page.$('.convert-btn.visible');
      if (convertBtn) {
        await convertBtn.click();
        await new Promise(r => setTimeout(r, 1000));
        const simpleModal = await page.$('.modal-overlay');
        log(!!simpleModal, '19. Simple English modal opens on Convert click');

        if (simpleModal) {
          const simpleModalHeaderBg = await simpleModal.$eval('.modal-header', el => getComputedStyle(el).backgroundColor);
          log(simpleModalHeaderBg === 'rgb(222, 184, 135)', `20. Simple English modal header has BurlyWood background (got: ${simpleModalHeaderBg})`);

          const simpleModalBodyBg = await simpleModal.$eval('.modal-body', el => getComputedStyle(el).backgroundColor);
          log(simpleModalBodyBg === 'rgb(245, 222, 179)', `21. Simple English modal body has wheat background (got: ${simpleModalBodyBg})`);
        } else {
          log(false, '20. (skipped - no modal)');
          log(false, '21. (skipped - no modal)');
        }
      } else {
        log(false, '19. (no visible convert button found)');
        log(false, '20. (skipped)');
      }
    } else {
      // Skip content-dependent tests
      for (let i = 7; i <= 21; i++) {
        log(false, `${i}. (skipped - content not loaded)`);
      }
    }

    // 22. book_history saved to localStorage
    const historyCheck = await page.evaluate(() => {
      const history = JSON.parse(localStorage.getItem('book_history') || '[]');
      return history.length > 0;
    });
    log(historyCheck, '22. book_history saved to localStorage');

    // 23. Entries in book_history are unique
    const uniqueCheck = await page.evaluate(() => {
      const history = JSON.parse(localStorage.getItem('book_history') || '[]');
      return new Set(history).size === history.length;
    });
    log(uniqueCheck, '23. book_history entries are unique');

    // 24. On reload, last entry loaded into input
    const lastEntry = await page.evaluate(() => {
      const history = JSON.parse(localStorage.getItem('book_history') || '[]');
      return history.length > 0 ? history[history.length - 1] : null;
    });
    if (lastEntry) {
      await page.reload({ waitUntil: 'networkidle0' });
      const urlValue = await page.$eval('#bookUrl', el => el.value);
      log(urlValue === lastEntry, `24. On reload, last entry from book_history loaded (expected: ${lastEntry.substring(0, 40)}..., got: ${urlValue.substring(0, 40)}...)`);
    } else {
      log(false, '24. (no history to test reload)');
    }

    // 25. Modal position persistence - check code contains localStorage save for positions
    const positionPersistence = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script');
      for (const s of scripts) {
        if (s.textContent.includes('modal_positions')) return true;
      }
      return false;
    });
    log(positionPersistence, '25. Code supports modal position persistence via localStorage');

  } catch (err) {
    console.error('Test error:', err.message);
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);

  await browser.close();
  process.exit(failed > 0 ? 1 : 0);
})();
