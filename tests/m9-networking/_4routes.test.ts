import { expect, test } from "@playwright/test";

test.use({ javaScriptEnabled: false });

test('Route abort - JS block', async ({ page }) => {

    // or **/*.{png,jpg,jpeg}
    page.route('**/*.{js}', route => route.abort());                // you can exclude specific resources

    await page.goto('/savings.html');
    await page.getByTestId('deposit').fill('10');

    await expect(page.getByTestId('result')).not.toBeVisible();
});

test('Route with a condition', async ({ page }) => {

    await page.route('**/*', route => {
        if ( route.request().resourceType() === 'script' ) {
            route.abort();
        } else {
            route.continue();
        }
    });

    // ...
});

test('Route fulfill', async ({ page }) => {

    await page.route('**/*.pdf', route => {
        route.fulfill({
            status: 404,
            contentType: 'text/plain',
            body: 'Not Found!'
        });
    });

    await page.goto('/savings.html');
    await page.getByText('Download Our Offer').click();

    await page.screenshot({ path: 'route.png' });

    await page.waitForURL('**/*.pdf');

    const body = page.locator('body');

    await expect(body).toContainText('Not Found!');

});