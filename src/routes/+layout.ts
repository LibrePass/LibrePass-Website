import { locale, waitLocale } from 'svelte-i18n';

import { browser } from '$app/environment';

import '$lib/i18n';

import type { LayoutLoad } from './$types';

// Translations
export const load: LayoutLoad = async () => {
    if (browser) {
        locale.set(window.navigator.language);
    }
    await waitLocale();
};

// export const prerender = true;
