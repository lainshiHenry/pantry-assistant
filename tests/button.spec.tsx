import { test, expect } from "@playwright/experimental-ct-react";
// import { test, expect } from "@playwright/test";
import Button from "../src/components/Button";
import React from "react";
import { execPath } from "process";

test('has title', async ({ page, mount }) => {
  const component = await mount(<Button />);
  await expect(component).toContainText('Button');
});