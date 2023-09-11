<script>
	import { text } from "@sveltejs/kit";
	import { textBooks } from "../../db";
import Paragraph from "../typography/Paragraph.svelte";
    import Title from "../typography/Title.svelte";
    import Section from "../ui/Section.svelte";
</script>

<Section id="#textbooks">
    <Title>Textbooks & Resources</Title>
    <Paragraph>In this course, we will refer to the below resources and textbooks.</Paragraph>

    <div class="grid md:grid-cols-3 gap-4 my-12">
        {#each textBooks as textbook }
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={textbook.link}>
                    <img class="rounded-t-lg" src={textbook.thumbnail} alt="" />
                </a>
                <div class="p-5">
                    <a href={textbook.link}>
                        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{textbook.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{textbook.edition}</p>
                    <a href={textbook.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Get the book
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        {/each}

    </div>    

</Section>