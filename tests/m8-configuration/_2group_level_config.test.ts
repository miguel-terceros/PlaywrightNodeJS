import { test } from "@playwright/test";

/**
 * configs at file level
 */
test.use({
    // geolocation, httpCredential, viewport, baseURL, javaScriptEnabled, screenshot, video...
    actionTimeout: 3000,                                        // browser.newContext()
    navigationTimeout: 5000,
    launchOptions: { slowMo: 2000, headless: true },            // browserType.launch()
    timezoneId: 'America/New_York'
});

test('Test 1', async ({ page }) => {
    await page.goto('');
    const zone = await getTimeZone(page);
    console.log(zone);
});


test.describe('Group Title', () => {

    /**
     * override the config for the tests inside the Describe
     */
    test.use({
        timezoneId: 'America/Toronto'       // closer to the test wins
    });

    test('Test 2', async ({ page }) => {
        await page.goto('');
        const zone = await getTimeZone(page);
        console.log(zone);
    });
});

async function getTimeZone(page) {
    return await page.evaluate(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
}
