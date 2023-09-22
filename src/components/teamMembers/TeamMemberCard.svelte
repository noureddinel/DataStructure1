<script lang="ts">
	import { Avatar } from "flowbite-svelte";

    export let image: string;
    export let fullName: string;
    export let email: string;
    export let hours: string;
    export let gender: string;
</script>


<!-- <div class="my-6 md:my-4 min-w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{fullName}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">email: {email}</p>
        <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Office Hours:</p>
        <p class="font-semibold text-gray-700 dark:text-gray-400">{hours}</p>
    </div>
</div> -->

<div class="my-6 md:my-4">
    <!-- <div>
        <div class="my-4">
            <Avatar  src={image ? image : '/Images/user.png'} size="lg" border />
        </div>
        <h5 class="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{fullName}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">email: {email}</p>
        <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Office Hours:</p>
        <p class="font-semibold text-gray-700 dark:text-gray-400">{hours}</p>
    </div> -->
    <div class="flex items-center space-x-4">
        {#if image}
            <Avatar  src={image} size="lg" border />    
        {/if}
        {#if !image}
            {#if gender == 'male'}
                <Avatar  src={'/Images/user.png'} size="lg" border />
            {:else}
                <Avatar src={'/Images/user_female.png'}  size="lg" border />
            {/if}
        {/if}
        <div class="space-y-1 font-medium dark:text-white">
            <a href="https://www.ensia.edu.dz/fr/faculty-members/" target="_blank">
                <div 
                    class="
                        hover:text-blue-800
                        transition 
                        w-fit
                    "
                >
                    {fullName}
                </div>
            </a>
          <div class="text-sm text-gray-500 dark:text-gray-400">{email}</div>
          <p class="text-sm font-semibold text-gray-600 dark:text-gray-400">Office hours: {hours}</p>
        </div>
      </div>
</div>
