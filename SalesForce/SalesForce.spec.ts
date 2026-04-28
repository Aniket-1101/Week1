import {test, chromium, firefox} from "@playwright/test";

test('Launching Salesforce', async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    console.log("Launching Salesforce");
    console.log(await page.title());
    console.log(await page.url());
    await page.waitForLoadState('domcontentloaded')
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('[name="pw"]').fill("TestLeaf@2025");
    await page.locator('input[id="Login"]').click();
    await page.waitForTimeout(10000)
    console.log(await page.title());
    console.log(await page.url());
    await page.locator('button[title="App Launcher"]').click();
    await page.close();

})