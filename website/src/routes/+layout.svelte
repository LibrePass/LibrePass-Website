<script>
    import Header from '$lib/components/nav/Header.svelte';
    import Toast from '$lib/components/utilities/Toast/Toast.svelte';

    import './../app.postcss';
</script>

<Toast />

<div>
    <Header />

    <main>
        <slot />
    </main>
</div>
