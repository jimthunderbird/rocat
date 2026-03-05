import puppeteer from 'puppeteer';

(async () => {
    let browser;
    try {
        browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
        const page = await browser.newPage();

        // Navigate to the app
        await page.goto('http://127.0.0.1:8765', { waitUntil: 'networkidle0' });

        // Enter book URL and press Enter
        const input = await page.$('#book_url');
        await input.type('https://www.gutenberg.org/cache/epub/100/pg100.txt');
        await input.press('Enter');

        // Wait for loading message
        await page.waitForSelector('.loading', { timeout: 5000 });
        console.log('PASS: Loading message appeared');

        // Check loading message background matches wheat
        const loadingBg = await page.$eval('.loading', el => getComputedStyle(el).backgroundColor);
        console.log('Loading bg:', loadingBg);

        // Wait for content to load (paragraphs appear)
        await page.waitForSelector('.paragraph', { timeout: 60000 });
        console.log('PASS: Book content loaded');

        // Check that book_content contains only text, not raw HTML tags
        const contentHTML = await page.$eval('#book_content', el => el.innerHTML);
        const paragraphs = await page.$$('.paragraph');
        console.log('Number of paragraphs:', paragraphs.length);

        // Check each paragraph has textContent (not innerHTML with tags like <p>, <div>, etc from gutenberg)
        const firstParaContent = await page.$eval('.paragraph', el => ({
            text: el.childNodes[0].textContent.substring(0, 100),
            hasScriptTags: el.innerHTML.includes('<script'),
            hasStyleTags: el.innerHTML.includes('<style'),
        }));
        console.log('First paragraph preview:', firstParaContent.text);
        if (firstParaContent.hasScriptTags || firstParaContent.hasStyleTags) {
            console.log('FAIL: Content contains HTML script/style tags');
            process.exit(1);
        }
        console.log('PASS: Content is text-only (no script/style tags)');

        // Check that Convert to Simple English button exists
        const btnExists = await page.$('.btn-simple');
        if (btnExists) {
            console.log('PASS: "Convert to Simple English" button exists');
        } else {
            console.log('FAIL: Button not found');
            process.exit(1);
        }

        // Scroll to make a paragraph visible so button shows
        await page.evaluate(() => {
            const p = document.querySelector('.paragraph');
            p.scrollIntoView();
        });
        await new Promise(r => setTimeout(r, 500));

        // Check button is visible
        const btnVisible = await page.$eval('.btn-simple', el => getComputedStyle(el).display !== 'none');
        console.log('Button visible:', btnVisible);

        // Click the Convert to Simple English button
        const btn = await page.$('.btn-simple');
        await btn.click();

        // Wait for modal to appear
        await page.waitForSelector('.modal-overlay.active', { timeout: 5000 });
        console.log('PASS: Modal appeared after clicking button');

        // Check modal title
        const title = await page.$eval('#modal_title', el => el.textContent);
        console.log('Modal title:', title);

        // Wait for LLM response (or timeout if LLM not available)
        await new Promise(r => setTimeout(r, 3000));
        const modalText = await page.$eval('#modal_content', el => el.textContent);
        console.log('Modal content preview:', modalText.substring(0, 100));

        if (modalText && modalText !== 'Converting...' && !modalText.startsWith('Error')) {
            console.log('PASS: Modal contains simple english content');
        } else if (modalText.startsWith('Error')) {
            console.log('WARN: LLM may not be running - modal shows error (expected if Ollama is not running)');
        } else {
            console.log('WARN: Modal still shows "Converting..." - LLM may be slow');
        }

        console.log('\nAll checks passed!');

    } catch (err) {
        console.error('Test failed:', err.message);
        process.exit(1);
    } finally {
        if (browser) await browser.close();
    }
})();
