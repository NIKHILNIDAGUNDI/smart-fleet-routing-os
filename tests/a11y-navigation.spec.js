const { test, expect } = require('@playwright/test');

test.describe('Bento Grid Redesign A11y Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///C:/Users/nikhi/Ashok%20Leyland/src/smart_fleet_routing.html');
  });

  test('skip links are present and navigatable', async ({ page }) => {
    const skipLinks = page.locator('.skip-links a');
    await expect(skipLinks).toHaveCount(6);
    
    // Test the first skip link
    await page.keyboard.press('Tab');
    const firstLink = skipLinks.first();
    await expect(firstLink).toBeFocused();
    
    // Press enter to navigate
    await page.keyboard.press('Enter');
    
    // Assuming the radar card is at #radar-card
    const radarCard = page.locator('#radar-card');
    await expect(radarCard).toBeFocused();
  });
});
