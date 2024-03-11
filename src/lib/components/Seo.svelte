<script lang="ts">
    export let title: string;
    export let description: string | undefined = undefined;

    const keywords = [
        'open source',
        'free software',
        'libre software',
        'password manager',
        'security',
        'privacy',
        'encryption',
        'cross platform',
        'passwords',
        'two-factor authentication',
        'online security',
        'data security',
        'data protection',
        'password management',
        'password vault',
        'password generator',
        'password protection',
        'phishing',
        'cyber attacks',
        'password management software',
        'password manager application',
        'password manager features',
        'password manager benefits',
        'password manager reviews'
    ];
</script>

<svelte:head>
    <title>{title} - LibrePass</title>

    {#if description == undefined}
        <meta name="description" content={description} />
    {/if}

    <meta name="keywords" content={keywords.join(', ')} />
</svelte:head>
