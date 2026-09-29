import { test, chromium } from "@playwright/test";

test('Test with Page fixture', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    console.log("Test content: ", await page.title());
});

test("Other Fixtures", async ({ browserName, browser, context, page }) => {

    const page1 = await context.newPage();
    const page2 = await context.newPage();
})