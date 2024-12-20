import { test, expect } from "@playwright/experimental-ct-react";
import React from 'react'
import Link from '../src/components/Link';

test.describe('Link Component Tests', () => {

    test.beforeEach(() => {
        console.log(`Running "${test.info().title}" test`);
    })

    test('link exists', async ({ mount }) => {
        const component = await mount(<Link />);

        await expect(component).toBeVisible();
    });

    test('link is focusable', async ({ mount, page }) => {
        const component = await mount(<Link />);

        await page.keyboard.press('Tab');

        await expect(component).toBeFocused();
    });
});