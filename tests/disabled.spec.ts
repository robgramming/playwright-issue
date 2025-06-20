import { test, expect } from '@playwright/test';

test('Playwright selects disabled options.', async ({ page }) => {
  await page.goto("/");
  
  /* Select Option within a disabled optgroup:
    Playwright selects the disabled option. (expected "element is not enabled" error") */
  const select = page.locator("select#selectOptgroup");
  await select.selectOption({value: "carrot"}, { force: false });
  
  /* Select a disabled option:
    Playwright selects the disabled option. (expected "element is not enabled" error") */
  const select1 = page.locator("select#selectDisabled");
  await select1.selectOption({value: "medium"}, { force: false });
  
  /* Select an option in a disabled select:
    this generates an "element is not enabled" error (which is expected) */
  //const select2 = page.locator("select#disabledSelect");
  //await select2.selectOption('optionB');
});
