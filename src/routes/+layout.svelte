<script lang="ts">
    // Floating UI for Popups
    import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
    import { PageProgressBar } from '@medzik/skeleton-utils';
    import { AppShell, initializeStores, Modal, setInitialClassState, storePopup, Toast } from '@skeletonlabs/skeleton';

    import Footer from '$lib/components/footer/Footer.svelte';
    import Header from '$lib/components/header/Header.svelte';

    import '../app.postcss';

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    initializeStores();
</script>

<svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head>

<PageProgressBar />

<Toast />
<Modal />

<AppShell>
    <!-- Header -->
    <svelte:fragment slot="header">
        <Header />
    </svelte:fragment>

    <!-- Page content -->
    <div class="p-header min-h-screen h-full">
        <slot />
    </div>

    <svelte:fragment slot="footer">
        <Footer />
    </svelte:fragment>
</AppShell>
