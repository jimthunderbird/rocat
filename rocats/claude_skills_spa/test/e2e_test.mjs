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
    const inputExists = await page.$('#book_url');
    log(!!inputExists, '1. Page has URL input field (#book_url)');

    // 2. Body has wheat background
    const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    log(bodyBg === 'rgb(245, 222, 179)', `2. Body background is wheat (got: ${bodyBg})`);

    // 3. Book content area is empty on initial load (no history)
    const contentEmpty = await page.$eval('#book_content', el => el.innerHTML.trim() === '');
    log(contentEmpty, '3. Book content area is empty on load (no history)');

    // 4. Top bar has BurlyWood background
    const topBarBg = await page.$eval('.top-bar', el => getComputedStyle(el).backgroundColor);
    log(topBarBg === 'rgb(222, 184, 135)', `4. Top bar background is BurlyWood (got: ${topBarBg})`);

    // 5. Top bar uses horizontal layout
    const topBarDir = await page.$eval('.top-bar', el => getComputedStyle(el).flexDirection);
    log(topBarDir === 'row', `5. Top bar uses horizontal layout (got: ${topBarDir})`);

    // 5b. Top bar has padding: 10px
    const topBarPadding = await page.$eval('.top-bar', el => getComputedStyle(el).padding);
    log(topBarPadding === '10px', `5b. Top bar has padding: 10px (got: ${topBarPadding})`);

    // 6. Book content area has wheat background
    const contentBg = await page.$eval('#book_content', el => getComputedStyle(el).backgroundColor);
    log(contentBg === 'rgb(245, 222, 179)', `6. Book content background is wheat (got: ${contentBg})`);

    // 7. Book content has line-height 1.4
    const lineHeight = await page.$eval('#book_content', el => getComputedStyle(el).lineHeight);
    const fontSize = await page.$eval('#book_content', el => parseFloat(getComputedStyle(el).fontSize));
    const expectedLH = Math.round(fontSize * 1.4 * 10) / 10;
    const actualLH = parseFloat(lineHeight);
    log(Math.abs(actualLH - expectedLH) < 1, `7. line-height is ~1.4 (got: ${lineHeight})`);

    // 8. BookHistory dropdown button exists
    const historyBtn = await page.$('#book_history_btn');
    log(!!historyBtn, '8. BookHistory dropdown button exists');

    // 9. Enter URL and press Enter - shows "Loading..."
    await page.type('#book_url', GUTENBERG_URL);
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => {
      const el = document.getElementById('book_content');
      return el && el.textContent.includes('Loading');
    }, { timeout: 3000 }).catch(() => {});
    const loadingText = await page.$eval('#book_content', el => el.textContent);
    log(loadingText.includes('Loading'), `9. Shows "Loading..." after Enter (got: "${loadingText.substring(0, 30)}")`);

    // 10. Wait for content to load as paragraphs
    let contentLoaded = false;
    try {
      await page.waitForFunction(() => {
        const el = document.getElementById('book_content');
        return el && el.querySelectorAll('p').length > 5;
      }, { timeout: 60000 });
      const pCount = await page.$eval('#book_content', el => el.querySelectorAll('p').length);
      log(pCount > 5, `10. Book content displays as paragraphs (${pCount} paragraphs found)`);
      contentLoaded = true;
    } catch (e) {
      log(false, `10. Book content failed to load: ${e.message}`);
    }

    if (contentLoaded) {
      // 11. Paragraphs contain only text (no HTML tags except buttons)
      const hasNoInnerHtml = await page.$$eval('#book_content p', ps => {
        return ps.slice(0, 10).every(p => {
          const children = Array.from(p.childNodes).filter(n => n.nodeType === 1 && n.tagName !== 'BUTTON');
          return children.length === 0;
        });
      });
      log(hasNoInnerHtml, '11. Paragraphs contain only text (no HTML tags from source)');

      // 12. Each paragraph has a Convert button inside it
      const btnCount = await page.$$eval('#book_content .simple-english-btn', btns => btns.length);
      const pCount2 = await page.$eval('#book_content', el => el.querySelectorAll('p').length);
      log(btnCount === pCount2 && btnCount > 0, `12. Each paragraph has a Convert button (${btnCount} buttons, ${pCount2} paragraphs)`);

      // 13. Button is the last child of the paragraph (appended at end, not below)
      const btnIsLast = await page.$$eval('#book_content p', ps => {
        return ps.slice(0, 5).every(p => {
          const lastEl = p.lastElementChild;
          return lastEl && lastEl.classList.contains('simple-english-btn');
        });
      });
      log(btnIsLast, '13. Convert button is appended at the end of each paragraph');

      // 14. Convert button text
      const btnText = await page.$eval('.simple-english-btn', el => el.textContent);
      log(btnText === 'Convert to Simple English', `14. Button text is "Convert to Simple English" (got: "${btnText}")`);

      // 15. Convert buttons have gold background
      const btnBg = await page.evaluate(() => {
        const btn = document.querySelector('.simple-english-btn');
        btn.style.display = 'inline-block';
        return getComputedStyle(btn).backgroundColor;
      });
      log(btnBg === 'rgb(255, 215, 0)', `15. Convert button background is gold (got: ${btnBg})`);

      // 16. Visible paragraphs show buttons, hidden ones don't (IntersectionObserver)
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 500));
      const allBtns = await page.$$eval('#book_content .simple-english-btn', btns => {
        return btns.map(b => getComputedStyle(b).display);
      });
      const hiddenCount = allBtns.filter(d => d === 'none').length;
      const visibleCount = allBtns.filter(d => d !== 'none').length;
      log(hiddenCount > 0, `16. Some Convert buttons are hidden when paragraph not in viewport (${hiddenCount} hidden)`);
      log(visibleCount > 0, `17. Some Convert buttons are visible when paragraph in viewport (${visibleCount} visible)`);

      // 18. Select text - modal appears
      const firstP = await page.$('#book_content p');
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
            const modalVisible = await page.$eval('#translation_modal', el => getComputedStyle(el).display !== 'none');
            log(modalVisible, '18. Word meaning modal appears on text selection');

            if (modalVisible) {
              modalTestsDone = true;

              // 19. Modal body has vertical scrolling
              const overflow = await page.$eval('#modal_box', el => getComputedStyle(el).overflowY);
              log(overflow === 'auto' || overflow === 'scroll', `19. Modal has vertical scrolling (overflow-y: ${overflow})`);

              // 20. Modal is draggable
              const cursor = await page.$eval('#modal_header', el => getComputedStyle(el).cursor);
              log(cursor === 'move', `20. Modal header has cursor: move (got: ${cursor})`);

              // 21. Modal has close button
              const closeBtn = await page.$('#modal_close');
              log(!!closeBtn, '21. Modal has close button');

              if (closeBtn) {
                await closeBtn.click();
                await new Promise(r => setTimeout(r, 500));
                const modalHidden = await page.$eval('#translation_modal', el => getComputedStyle(el).display === 'none');
                log(modalHidden, '22. Modal closes on X click');
              } else {
                log(false, '22. (skipped - no close button)');
              }
            }
          }
        }
      }
      if (!modalTestsDone) {
        log(false, '18. Word meaning modal appears on text selection');
        log(false, '19. (skipped - no modal)');
        log(false, '20. (skipped - no modal)');
        log(false, '21. (skipped - no modal)');
        log(false, '22. (skipped - no modal)');
      }

      // 23. Modal position persistence
      const positionPersistence = await page.evaluate(() => {
        const scripts = document.querySelectorAll('script');
        for (const s of scripts) {
          if (s.textContent.includes('modal_pos')) return true;
        }
        return false;
      });
      log(positionPersistence, '23. Code supports modal position persistence via localStorage');

    } else {
      // Skip content-dependent tests
      for (let i = 11; i <= 23; i++) {
        log(false, `${i}. (skipped - content not loaded)`);
      }
    }

    // 24. book_history saved to localStorage
    const historyCheck = await page.evaluate(() => {
      const history = JSON.parse(localStorage.getItem('book_history') || '[]');
      return history.length > 0;
    });
    log(historyCheck, '24. book_history saved to localStorage');

    // 25. Entries in book_history are unique
    const uniqueCheck = await page.evaluate(() => {
      const history = JSON.parse(localStorage.getItem('book_history') || '[]');
      return new Set(history).size === history.length;
    });
    log(uniqueCheck, '25. book_history entries are unique');

    // 26. On reload, last entry loaded into input
    const lastEntry = await page.evaluate(() => {
      const history = JSON.parse(localStorage.getItem('book_history') || '[]');
      return history.length > 0 ? history[history.length - 1] : null;
    });
    if (lastEntry) {
      await page.reload({ waitUntil: 'networkidle0' });
      const urlValue = await page.$eval('#book_url', el => el.value);
      log(urlValue === lastEntry, `26. On reload, last entry from book_history loaded (expected: ${lastEntry.substring(0, 40)}..., got: ${urlValue.substring(0, 40)}...)`);
    } else {
      log(false, '26. (no history to test reload)');
    }

    // 27. BookHistory dropdown shows recent entries
    const historyBtnReload = await page.$('#book_history_btn');
    if (historyBtnReload) {
      await historyBtnReload.click();
      await new Promise(r => setTimeout(r, 300));
      const dropdownVisible = await page.$eval('#book_history_dropdown', el => getComputedStyle(el).display !== 'none');
      log(dropdownVisible, '27. BookHistory dropdown shows when clicked');

      const dropdownItems = await page.$$eval('#book_history_dropdown div', divs => divs.length);
      log(dropdownItems > 0, `28. BookHistory dropdown has items (${dropdownItems} items)`);
    } else {
      log(false, '27. (no history button)');
      log(false, '28. (skipped)');
    }

    // 29. BookHistory button has downward triangle background image
    const historyBtnBgImg = await page.$eval('#book_history_btn', el => getComputedStyle(el).backgroundImage);
    log(historyBtnBgImg !== 'none' && historyBtnBgImg.includes('url('), `29. BookHistory button has triangle background image (got: ${historyBtnBgImg.substring(0, 60)}...)`);

  } catch (err) {
    console.error('Test error:', err.message);
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);

  await browser.close();
  process.exit(failed > 0 ? 1 : 0);
})();
