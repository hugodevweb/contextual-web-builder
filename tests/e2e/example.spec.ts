import { test, expect } from "@playwright/test";

// Example E2E test - replace with your actual tests
test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/La Petite Maison de l'Épouvante/);
});

// Uncomment and modify when you have pages to test:
// test("navigation works", async ({ page }) => {
//   await page.goto("/");
//   await page.click('text=About');
//   await expect(page).toHaveURL(/.*about/);
// });

