import { test, expect } from "@playwright/experimental-ct-react";
import React from 'react'
import Link from '../src/components/Link';

test.describe('Link Component Tests', () => {

    const defaultLinkComponent = <Link linkTextString="testing" />;

    test.beforeEach(() => {
        console.log(`Running "${test.info().title}" test`);
    })

    test('link exists', async ({ mount }) => {
        const component = await mount(defaultLinkComponent);

        await expect(component).toBeVisible();
    });

    test('link is focusable', async ({ mount, page }) => {
        const component = await mount(defaultLinkComponent);

        await page.keyboard.press('Tab');
        await expect(component).toBeFocused();
    });

    test('link has default href destination', async ({ mount }) => {
        const component = await mount(defaultLinkComponent);
        await expect(component).toHaveAttribute('href', '#');
    });

    test('link have href destination', async ({ mount }) => {
        const customLinkComponent = <Link linkTextString="testing" destinationHref="https://www.google.ca" />
        const component = await mount(customLinkComponent);
        await expect(component).toHaveAttribute('href', 'https://www.google.ca');
    });
});