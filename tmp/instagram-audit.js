const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  console.log('Navigating to Instagram...');
  await page.goto('https://www.instagram.com/sorrywecan/', { waitUntil: 'networkidle' });
  
  // Wait for content to load
  await page.waitForTimeout(5000);

  // Take screenshot
  await page.screenshot({ path: 'tmp/instagram-sorrywecan.png', fullPage: true });
  console.log('Screenshot saved to tmp/instagram-sorrywecan.png');

  // Try to extract data
  const data = await page.evaluate(() => {
    const getText = (selector) => {
      const el = document.querySelector(selector);
      return el ? el.textContent.trim() : null;
    };

    return {
      title: document.title,
      url: window.location.href,
      bodyText: document.body.innerText.substring(0, 2000)
    };
  });

  console.log('Page data:', JSON.stringify(data, null, 2));

  await browser.close();
})();
