import { test, expect } from "@playwright/test";

test('Chack test', async ({ page }) => {
    await page.goto('/');

    const checkbox = page.getByRole('checkbox');
    const textare = page.locator('#textarea');
    const message = 'msg';

    await checkbox.check();

    await textare.fill(message);

    await expect(textare).toHaveValue(message);
});