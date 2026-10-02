import { test, expect } from "@playwright/test";

test('Recommended built-in locators examples', async ({ page }) => {

    // we don't set a URL, because we did in the config file
    await page.goto('');

    // if you will use a locator multiple times, use a variable
    const firstName = page.getByLabel('First Name');
    await firstName.fill('Sofia');
    await firstName.clear();

    // if you will use only once, just chain the commands
    await page.getByLabel('First name').fill('Miguel');

    await page.getByRole('button', { name: 'Register', exact: true }).click();

    const warning = page.getByText('Valid last name is required');
    await expect(warning).toBeVisible();
})