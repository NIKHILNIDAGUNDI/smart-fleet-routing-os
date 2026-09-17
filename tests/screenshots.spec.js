const { test } = require('@playwright/test');
const path = require('path');

test.describe('Generate Feature Screenshots', () => {
  test('capture feature views', async ({ page }) => {
    // Navigate to the local file
    await page.goto('file:///C:/Users/nikhi/Ashok%20Leyland/src/smart_fleet_routing.html');
    await page.waitForLoadState('networkidle');
    
    // Optional: wait for maps & components to render properly
    await page.waitForTimeout(2000);
    
    // Full Dashboard
    await page.screenshot({ path: 'screenshots/dashboard_full.png', fullPage: true });

    // 1-Click Solver Card (Expand and capture)
    await page.evaluate(() => { 
      const card = document.querySelector('[data-card="solver"]');
      if (card) window.expandCard(card); 
    });
    await page.waitForTimeout(1000);
    await page.locator('[data-card="solver"]').screenshot({ path: 'screenshots/solver_expanded_allocation.png' });
    await page.keyboard.press('Escape'); // close expand
    await page.waitForTimeout(1000);

    // Wash Bay Pipeline
    await page.evaluate(() => { 
      const card = document.querySelector('[data-card="chargers"]');
      if (card) window.expandCard(card); 
    });
    await page.waitForTimeout(1000);
    await page.locator('[data-card="chargers"]').screenshot({ path: 'screenshots/wash_bay_pipeline.png' });
    await page.keyboard.press('Escape'); // close expand
    await page.waitForTimeout(1000);

    // Defect Governance (Assistant Card)
    await page.evaluate(() => { 
      const card = document.querySelector('[data-card="assistant"]');
      if (card) window.expandCard(card); 
    });
    await page.waitForTimeout(1000);
    
    // Switch to Defect Gov tab (assuming switchAssistantTab is available, if not we will fix)
    await page.evaluate(() => { 
        if (window.switchAssistantTab) window.switchAssistantTab('governance'); 
    });
    await page.waitForTimeout(500);
    await page.locator('[data-card="assistant"]').screenshot({ path: 'screenshots/defect_governance_inspector.png' });

    // Switch to City Manager view
    await page.evaluate(() => { 
        if (window.setActorView) window.setActorView('city_mgr'); 
    });
    await page.waitForTimeout(500);
    await page.locator('[data-card="assistant"]').screenshot({ path: 'screenshots/defect_governance_city_manager.png' });
  });
});
