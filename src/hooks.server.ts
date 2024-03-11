import { locale } from 'svelte-i18n';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const lang = event.request.headers.get('accept-language')?.split(',')[0];
    if (lang) {
        locale.set(lang);
    }

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', lang || 'en')
    });
};
