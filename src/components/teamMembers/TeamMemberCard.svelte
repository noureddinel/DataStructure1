<script lang="ts">
    export let image: string;
    export let fullName: string;
    export let email: string;
    export let hours: string;
</script>


<div class="my-6 md:my-4 min-w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{fullName}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">email: {email}</p>
        <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Office Hours:</p>
        <p class="font-semibold text-gray-700 dark:text-gray-400">{hours}</p>
    </div>
</div>