import { test } from "@playwright/test";

test.describe.skip('test group A', async () => {
    test('test a.1', async ({ page }) => {
        await page.goto('/');
        console.log("test a.1");
        
    });
    
    test('test a.2', async ({ page }) => {
        await page.goto('/');
        console.log("test a.2");
        
    })
});

test.describe('test group 2', async () => {

    // Use this to set conditions for a group of tests.
    test.skip(({ browserName }) => browserName === 'chromium', 'optional message');

    // wrong -> Use this to set conditions for a test
    // test.skip(brorserName === 'chromium', 'Does not work on chromium, ticket ABC-123);

    test('test b.1', async ({ page }) => {
        await page.goto('/');
        console.log("test b.1");
        
    });
    
    test('test b.2', async ({ page }) => {
        await page.goto('/');
        console.log("test b.2");
        
    })
});

