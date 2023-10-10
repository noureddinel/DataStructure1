<script lang="ts">
    import { navLinks, type } from "../../db";
    import { handleScroll } from "$lib";
    import { signOut } from "@auth/sveltekit/client";
	import { onMount } from "svelte";

    onMount(() => {
      const navbar = document.querySelector('#navbar');
      const logo = document.querySelector('#logo');
      
      window.addEventListener('scroll', function(){
        let scrollVal = this.window.scrollY;
        if(scrollVal > 130) {
           navbar?.classList.add('shadow-lg');
           logo?.classList.replace('sm\:w-60', 'sm\:w-32')
        } else {
            navbar?.classList.remove('shadow-lg');
        }

      });
    })

</script>



 
 <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
       <ul class="space-y-2 font-medium">
          <li>
             <a href="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <!-- <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg> -->
                <svg class="w-6 h-6 text-orange-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                  <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/>
                </svg>
                <span class="ml-3">DSA1 Course</span>
             </a>
          </li>
          {#each navLinks as link}
            <li>
                <a href={link.link} class="flex items-center p-2 text-sm text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" on:click={handleScroll}>
                    <!-- <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                    </svg> -->
                    <span class="flex-1 ml-3 whitespace-nowrap">{link.title}</span>
                  </a>
               </li>  
               {#if link.sublinks}
                   {#each link.sublinks as sublink }
                      <ul class="pl-5 mt-2 space-y-1 list-inside">
                         <a href={sublink.link} class="flex items-center p-2 text-sm text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" on:click={handleScroll}>
                            <li class="pl-3">{sublink.title}</li>
                         </a>
                      </ul>   
                   {/each}
               {/if}
          {/each}
       </ul>
       <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
             <a href="#announcements" class="text-sm flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group" on:click={handleScroll}>
               <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"/>
                </svg>
                <span class="ml-4">Announcements</span>
             </a>
          </li>
          <!-- <li>
             <button  class="text-sm flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group" on:click={() => signOut()}>
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
                <span class="ml-4">SignOut</span>
             </button>
          </li> -->
        </ul>
    </div>
 </aside>
 
 <!-- Fix top navbar -->
 <nav id="navbar" class="flex transition-all items-center sm:block sm:ml-64 h-20 md:h-20 w-full fixed top-0 md:p-4 pt-4 bg-white overflow-hidden z-10">
    <img id="logo" src='/Logos/cropped-logo.png' alt="Logo ENSIA" class="sm:w-60 mx-auto md:m-0 w-30 h-12"/>
  </nav>
 <div class="p-4 md:px-14 md:py-6 sm:ml-64">
   <slot></slot>
 </div>
 