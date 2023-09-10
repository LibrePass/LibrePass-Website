<script>
    import Check from "svelte-material-icons/Check.svelte"
    import Devices from "svelte-material-icons/Devices.svelte"
    import ShieldCheck from "svelte-material-icons/ShieldCheckOutline.svelte"
    import Timer from "svelte-material-icons/TimerOutline.svelte"

    import phoneScreenshot from "$lib/images/screenshots/phone.avif"
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container flex min-h-screen m-no-header justify-center items-center max-w-[980px] mx-auto gap-5">
    <div class="flex flex-col justify-start gap-4 p-4 text-center sm:text-start">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
            Take control of your passwords.
        </h1>

        <p class="max-w-[720px] text-lg sm:text-xl">
            With LibrePass, convenience and security go hand in hand. Through LibrePass, your passwords are secure while
            you have easy access to them.
        </p>

        <div class="flex justify-center sm:justify-start">
            <a href="/auth/register" class="flex btn btn-primary">
                Get Started &rarr;
            </a>
        </div>
    </div>

    <div class="hidden lg:block">
        <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display w-[250px]">
                <img src={phoneScreenshot} alt="screenshot of android application" />
            </div>
        </div>
    </div>
</section>

<section class="flex min-h-[50vh] w-full bg-primary text-primary-content">
    <div class="container flex justify-center items-center mx-auto">
        <div class="flex flex-wrap justify-center text-center gap-12 p-20">
            <div class="badge-item">
                <Timer class="h-16 w-16 p-2 outline rounded-xl" />

                <p class="font-bold">
                    Fast
                </p>

                <p>Instant access to your passwords</p>
            </div>

            <div class="badge-item">
                <ShieldCheck class="h-16 w-16 p-2 outline rounded-xl" />

                <p class="font-bold">
                    Secure
                </p>

                <p>Your passwords are end-to-end encrypted and securely stored</p>
            </div>

            <div class="badge-item">
                <Devices class="h-16 w-16 p-2 outline rounded-xl" />

                <p class="font-bold">
                    Accessible
                </p>

                <p>Available on all your favorite platforms</p>
            </div>
        </div>
    </div>
</section>

<section class="flex mx-auto p-10 w-full sm:w-96">
    <div class="card w-full mx-auto bg-secondary text-secondary-content">
        <div class="card-body">
            <h2 class="card-title justify-center">
                Free
            </h2>

            <h1 class="card-title text-4xl justify-center">
                $0
            </h1>

            <p class="card-title text-sm justify-center">Free forever</p>

            <div class="flex flex-col gap-2 pt-2">
                <div class="flex text-lg items-center space-x-2">
                    <Check />
                    <p>Unlimited passwords</p>
                </div>

                <div class="flex text-lg items-center space-x-2">
                    <Check />
                    <p>Unlimited devices</p>
                </div>

                <div class="flex text-lg items-center space-x-2">
                    <Check />
                    <p>Password generator</p>
                </div>

                <div class="flex text-lg items-center space-x-2">
                    <Check />
                    <p>Advanced password encryption</p>
                </div>

                <div class="flex text-lg items-center space-x-2">
                    <Check />
                    <p>Always free</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    .badge-item {
        @apply flex flex-col gap-2 items-center max-w-[16em];
    }
</style>
