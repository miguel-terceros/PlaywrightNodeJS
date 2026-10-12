import { test, expect } from "@playwright/test";

test.beforeAll('meaningful description', () => {
    console.log('before all setup');
});

test.beforeEach('meaningful description', async ({ page }) => {
    console.log('before each setup');
    page.goto('/');
});


test('test 1', async ({ page }) => {
    console.log('test 1');
    await expect(page.getByRole('button')).toHaveCount(3);
});

test('test 2', async ({ page }) => {
    console.log('test 2');
    await expect(page.getByRole('checkbox')).toHaveCount(1);
});


test.afterEach('meaningful description', async ({ page }) => {
    console.log('after each setup');
});

test.afterAll('meaningful description', () => {
    console.log('after all setup');
});