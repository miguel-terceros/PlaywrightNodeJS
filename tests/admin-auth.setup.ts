import { test as setup } from "@playwright/test";

setup.use({});

setup('authenticate as admin', async ({ page }) => {
    console.log('do admin auth');
    
});