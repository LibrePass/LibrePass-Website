<script>
    import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title="Email address verification" />

<section class="container flex h-90-header justify-center items-center max-w-[980px] mx-auto gap-5">
    <div class="flex flex-col justify-start gap-4 text-center sm:text-start">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">Email address has been verified!</h1>

        <div class="flex justify-center">
            <a href="/auth/login" class="flex btn btn-success"> Login &rarr; </a>
        </div>
    </div>
</section>
