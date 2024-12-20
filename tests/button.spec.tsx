import { test, expect } from "@playwright/experimental-ct-react";
// import { test, expect } from "@playwright/test";
import Button from "../src/components/Button";
import React from "react";

test.describe('Button Component Tests', () => {

  test.beforeEach(() => {
    console.log(`Running "${test.info().title}" test`);
  })

  test('Button is Visible', async ({ mount }) => {
    const component = await mount(<Button />);

    await expect(component).toBeVisible();
  });

  test('Button is focusable', async ({ mount, page }) => {
    const component = await mount(<Button />);

    await page.keyboard.press('Tab');

    await expect(component).toBeFocused();
  });
});