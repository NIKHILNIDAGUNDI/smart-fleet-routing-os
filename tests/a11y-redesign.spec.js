const { test, expect } = require('@playwright/test');

test.describe('Bento Grid Redesign A11y', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///C:/Users/nikhi/Ashok%20Leyland/src/smart_fleet_routing.html');
    await page.waitForLoadState('networkidle');
  });

  test('should have proper ARIA attributes on all cards', async ({ page }) => {
    const cards = page.locator('.bento-card');
    const count = await cards.count();
    
    expect(count).toBe(6);

    for (let i = 0; i < count; i++) {
       const role = await cards.nth(i).getAttribute('role');
       expect(role).toBe('region');

       const tabindex = await cards.nth(i).getAttribute('tabindex');
       expect(tabindex).toBe('0');

       const ariaLabel = await cards.nth(i).getAttribute('aria-label');
       expect(ariaLabel).toBeTruthy();
    }
  });

  test('expand button should have aria-label', async ({ page }) => {
    const btn = page.locator('.card-expand-btn').first();
    const ariaLabel = await btn.getAttribute('aria-label');
    expect(ariaLabel).toBe('Expand or Collapse Card');
  });

  test('expanding a card makes other cards inert', async ({ page }) => {
    const firstCard = page.locator('.bento-card').first();
    const secondCard = page.locator('.bento-card').nth(1);

    // Expand the first card
    const expandBtn = firstCard.locator('.card-expand-btn');
    await expandBtn.click();
    await page.waitForTimeout(500); // transition

    // Second card should have the inert attribute
    const hasInert = await secondCard.evaluate(el => el.hasAttribute('inert'));
    expect(hasInert).toBe(true);

    // Collapse the first card
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500); // transition

    const hasInertAfter = await secondCard.evaluate(el => el.hasAttribute('inert'));
    expect(hasInertAfter).toBe(false);
  });
});
