<script>
    import MainNav from '$lib/components/nav/MainNav.svelte';
    import './../app.postcss'
</script>

<div>
    <MainNav />

    <main class="m-header">
        <slot />
    </main>
</div>
