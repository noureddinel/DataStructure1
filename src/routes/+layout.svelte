<script>
	import '../app.postcss';
	import { signIn } from "@auth/sveltekit/client"
  	import { page } from "$app/stores"
	import Sidebar from '../components/layouts/Sidebar.svelte';
	import Title from '../components/typography/Title.svelte';
	import Loader from '../components/layouts/Loader.svelte';
	import { onMount } from 'svelte';

	// Loading state
	let loading = true;

	// Await font loading
	async function areFontsReady() {
	  await (document).fonts.ready
	  loading = false;
  	}

	onMount(() => {
		areFontsReady()
	});
	

</script>


<!-- {#if $page.data.session} -->
{#if loading}
	<Loader />
{:else}
	<Sidebar >
		<slot />
	</Sidebar>
{/if}

<!-- {:else}
	<div class="text-center h-screen flex justify-center items-center bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
		<div>
			<Title>ENSIA course</Title>
			<Title>Data structure and Algorithms 1</Title>
			<button
				class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				on:click={() => signIn('google')}
			>
				Login
			</button>
		</div>
	</div>
{/if} -->

