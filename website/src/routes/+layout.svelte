<script>
    import Header from '$lib/components/nav/Header.svelte';

    import './../app.postcss';
</script>

<div>
    <Header>
        <slot />
    </Header>
</div>
