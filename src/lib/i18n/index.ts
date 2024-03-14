import { init, register } from 'svelte-i18n';

import { browser } from '$app/environment';

const defaultLocale = 'en';

register('en', () => import('./locales/en.yml'));
register('de', () => import('./locales/de.yml'));
register('pl', () => import('./locales/pl.yml'));
register('nb-NO', () => import('./locales/nb_NO.yml'));
register('fr', () => import('./locales/fr.yml'));

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale
});
