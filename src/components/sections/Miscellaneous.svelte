<script>
	import { blockIDE, cCompliers, cLibraries, externalExcercices, gnuProjects, gnuUtilities, isoCFoundation, vsCodeIDE } from "../../db";
import SubTitle from "../typography/SubTitle.svelte";
import Title from "../typography/Title.svelte";
	import Section from "../ui/Section.svelte";

    
</script>



<Section>
    <Title>Miscellaneous</Title>

    <!-- C++ Compilers -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">C++ compilers:</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {#each cCompliers as c }
            <a href={c.link} class="text-blue-500" target="_blank">
                <li>
                    {c.title}
                </li>   
            </a>
        {/each}
    </ul>

    <!-- CodeBlock IDE -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Codeblock IDE:</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {#each blockIDE as block }
            <a href={block.link} class="text-blue-500" target="_blank">
                <li>
                    {block.title}
                </li>   
            </a>
        {/each}
    </ul>


    <!-- VsCode IDE -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Vscode IDE:</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {#each vsCodeIDE as vs }
            <a href={vs.link} class="text-blue-500" target="_blank">
                <li>
                    {vs.title}
                </li>   
            </a>
        {/each}
    </ul>

    <!-- Programming assignements -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Programming assignment in Google Classroom:</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <a href="https://www.youtube.com/watch?v=YWxfZmROKpU" class="text-blue-500" target="_blank">
            <li>
                How to submit assignment in Google Classroom
            </li>   
        </a>
    </ul>

    <!-- C++ Libraries -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">C++ Libraries and Reference cards:</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {#each cLibraries as library }
            <a href={library.link} class="text-blue-500" target="_blank">
                <li>
                    {library.title}
                </li>   
            </a>
        {/each}
    </ul>

    <!-- ISO C++ Foundation: -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">ISO C++ Foundation:</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {#each isoCFoundation as foundation }
            <a href={foundation.link} class="text-blue-500" target="_blank">
                <li>
                    {foundation.title}
                </li>   
            </a>
        {/each}
    </ul>


    <!-- GNU Utilities -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">GNU utilities (Objdump):</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {#each gnuUtilities as utility }
            <a href={utility.link} class="text-blue-500" target="_blank">
                <li>
                    {utility.title}
                </li>   
            </a>
        {/each}
    </ul>


    <!-- GNU Projects -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">GNU Project Debugger (GDB):</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {#each gnuProjects as project }
            <a href={project.link} class="text-blue-500" target="_blank">
                <li>
                    {project.title}
                </li>   
            </a>
        {/each}
    </ul>


    <!-- External exercises and courses: -->
    <h2 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">External exercises and courses:</h2>
    <ul class="mt-2 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {#each externalExcercices as excerices }
            <a href={excerices.link} class="text-blue-500" target="_blank">
                <li>
                    {excerices.title}
                </li>   
            </a>
        {/each}
    </ul>

</Section>