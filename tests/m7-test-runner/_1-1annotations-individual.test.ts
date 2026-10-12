import { test, expect } from "@playwright/test"

test.skip('will not run', async ({ page }) => {
    console.log("this should not be printed");
});

test('skip (un)conditionally', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'does not work on chromium, ticket ABC-123');

    test.skip(await page.getByTestId('someId').count() === 0, 'skipping because at least 1 element x must be present');
});

test.fixme('fixme', async () => {

});

test('will fail', async () => {

    test.fail();            // the test SHOULD fail, the functionality under test is broken

    expect(2).toEqual(3);       // the test PASS, because we expect this FAIL
})