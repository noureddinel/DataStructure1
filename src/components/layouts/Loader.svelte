<script>
    import {SyncLoader} from 'svelte-loading-spinners';
	import { fade, scale, slide } from 'svelte/transition';
</script>


<div in:fade out:slide class="flex h-screen justify-center items-center flex-col">
  <img src="/Logos/cropped-logo.png"  alt="logo" class="w-48"/>
  <SyncLoader size="60" color="#ff8a4c" unit="px" />
</div>