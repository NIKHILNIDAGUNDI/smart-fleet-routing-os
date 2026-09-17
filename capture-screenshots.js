const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();

  await page.goto('file:///' + path.resolve('src/smart_fleet_routing.html').replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  const fs = require('fs');
  if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');

  console.log('Capturing full page...');
  await page.screenshot({ path: 'screenshots/bento-redesign-fullpage.png', fullPage: false });

  const cards = ['radar', 'solver', 'chargers', 'timeline', 'fleet', 'assistant'];
  for (const card of cards) {
    console.log(`Capturing ${card} card...`);
    const locator = page.locator(`[data-card="${card}"]`);
    if (await locator.count() > 0) {
      await locator.screenshot({ path: `screenshots/bento-${card}-card.png` });
    } else {
      console.log(`Card ${card} not found.`);
    }
  }

  console.log('Capturing shortcut bar...');
  const shortcutBar = page.locator('.shortcut-bar');
  if (await shortcutBar.count() > 0) {
    await shortcutBar.screenshot({ path: 'screenshots/bento-shortcut-bar.png' });
  }

  console.log('Capturing expanded radar card...');
  const radarExpandBtn = page.locator('[data-card="radar"] .card-expand-btn').first();
  if (await radarExpandBtn.count() > 0) {
    await radarExpandBtn.click();
    await page.waitForTimeout(600); // Transition animation
    await page.screenshot({ path: 'screenshots/bento-expanded-radar.png' });
  }

  await browser.close();
  console.log('Done!');
})();