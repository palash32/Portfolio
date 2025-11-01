
import { test, expect } from '@playwright/test';

test('Mobile menu functionality', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000');

  // Click the menu button to open the mobile menu
  await page.getByRole('button', { name: 'menu' }).click();

  // Verify that the mobile menu is visible
  await expect(page.locator('div > a:has-text("Skills Matrix")')).toBeVisible();

  // Take a screenshot of the open mobile menu
  await page.screenshot({ path: 'mobile_menu_open.png' });

  // Click the close button to close the mobile menu
  await page.getByRole('button', { name: 'close' }).click();

  // Verify that the mobile menu is no longer visible
  await expect(page.locator('div > a:has-text("Skills Matrix")')).not.toBeVisible();
});
