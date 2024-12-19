import { test, expect } from "@playwright/experimental-ct-react";
// import { test, expect } from "@playwright/test";
import Button from "../src/components/Button";
import React from "react";

test('has title', async ({ mount }) => {
  const component = await mount(<Button></Button>);

  await expect(component).toBeVisible();
});