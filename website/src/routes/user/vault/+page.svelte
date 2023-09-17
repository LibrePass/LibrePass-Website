<script>
    import { goto } from "$app/navigation";
    import Seo from "$lib/components/Seo.svelte";
    import { secretsStore } from "$lib/storage";
    import { onMount } from "svelte";

    onMount(async () => {
        if (!secretsStore.exists()) {
            await goto("/auth/login")
        }
    })
</script>

<Seo title="Vault" />
