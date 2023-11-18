<script>
    import { Modal, Toast } from '@medzik/svelte-utils';
    import NProgress from 'nprogress';

    import Header from '$lib/components/nav/Header.svelte';
    import { navigating } from '$app/stores';

    import 'nprogress/nprogress.css';
    import './../app.postcss';

    NProgress.configure({
        minimum: 0.16
    });

    $: {
        if ($navigating) {
            NProgress.start();
        }
        if (!$navigating) {
            NProgress.done();
        }
    }
</script>

<Toast />

<Modal />

<div>
    <Header />

    <main>
        <slot />
    </main>
</div>
