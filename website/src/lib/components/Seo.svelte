<script lang="ts">
    export let title: string;
    export let description: string | undefined;

    const keywords = [
        "LibrePass",
        "Libre Pass",
        "KeePass",
        "password manager",
        "secure passwords",
        "online security",
        "convenient password management",
        "secure online life",
        "two factor authentication",
        "free password manager",
        "password management tool",
        "password storage",
        "password protection",
        "password encryption",
        "password generator",
        "password security",
        "password accessibility",
        "password organization",
        "password vault",
        "password synchronization",
        "password management software",
        "password manager application",
        "password manager features",
        "password manager benefits",
        "password manager reviews"
    ]
</script>

<svelte:head>
    <title>{title} - LibrePass</title>

    {#if description == undefined}
        <meta name="description" content={description} />
    {/if}

    <meta
        name="keywords"
        content={keywords.join(", ")}
    />

    <meta name="author" content="Medzik <me@medzik.dev>" />
</svelte:head>
