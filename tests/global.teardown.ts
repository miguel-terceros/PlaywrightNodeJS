import { test as setup } from "@playwright/test";

setup.use({});

setup('Do Teardown steps', async ({ page }) => {
    console.log('do teardown steps');
    
});