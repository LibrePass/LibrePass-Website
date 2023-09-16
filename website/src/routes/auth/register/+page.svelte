<script lang="ts">
    import { onMount } from 'svelte';
    import { AuthClient } from '@librepass/client';

    import { goto } from '$app/navigation';
    import Seo from '$lib/components/Seo.svelte';
    import { secretsStore } from '$lib/storage';

    let email: string;
    let password: string;
    let confirmPassword: string;
    let passwordHint: string;

    onMount(() => {
        if (secretsStore.exists()) {
            return goto('/user/vault');
        }
    });

    const authClient = new AuthClient();

    function submit() {}
</script>

<Seo
    title="Register"
    description="Create an account with LibrePass to start creating secure passwords for your accounts,
which will be stored securely."
/>

<section class="container h-full-header mx-auto flex justify-center items-center">
    <div class="card w-96 border">
        <div class="card-body">
            <h2 class="card-title justify-center">Create an account</h2>

            <div class="form-control w-full max-w-xs gap-2">
                <div>
                    <span class="label-text">Email address</span>
                    <input type="email" class="input input-bordered w-full max-w-xs" bind:value={email} />
                    <span class="label-text-alt">
                        We will never share your email address with anyone else. And we will never send spam.
                    </span>
                </div>

                <div>
                    <span class="label-text">Password</span>
                    <input type="password" class="input input-bordered w-full max-w-xs" bind:value={password} />
                    <span class="label-text-alt">
                        <strong>Important:</strong>
                        Your forgotten password cannot be recovered! 8 characters required
                    </span>
                </div>

                <div>
                    <span class="label-text">Confirm Password</span>
                    <input type="password" class="input input-bordered w-full max-w-xs" bind:value={confirmPassword} />
                </div>

                <div>
                    <span class="label-text">Password hint (optional)</span>
                    <input type="text" class="input input-bordered w-full max-w-xs" bind:value={passwordHint} />
                    <span class="label-text-alt"> The password hint can help you remember it when you forget it. </span>
                </div>
            </div>

            <div class="card-actions justify-end">
                <button class="btn btn-primary">Register</button>
            </div>
        </div>
    </div>
</section>
