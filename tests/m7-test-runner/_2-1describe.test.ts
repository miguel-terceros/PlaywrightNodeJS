import { test } from "@playwright/test";

test.describe('test group A', async () => {
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
    test('test b.1', async ({ page }) => {
        await page.goto('/');
        console.log("test b.1");
        
    });
    
    test('test b.2', async ({ page }) => {
        await page.goto('/');
        console.log("test b.2");
        
    })
});

