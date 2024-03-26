<script lang="ts">
    // Floating UI for Popups
    import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
    import { AppShell, initializeStores, Modal, setInitialClassState, storePopup, Toast } from '@skeletonlabs/skeleton';

    import Header from '$lib/components/Header.svelte';
    import PageProgressBar from '$lib/components/PageProgressBar.svelte';

    import '../app.postcss';

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    initializeStores();
</script>

<svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head>

<PageProgressBar />

<Toast />
<Modal />

<AppShell>
    <svelte:fragment slot="header">
        <Header />
    </svelte:fragment>

    <!-- Page content -->
    <div class="p-header">
        <slot />
    </div>

    <!-- (footer) -->
</AppShell>
