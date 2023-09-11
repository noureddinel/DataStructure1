<script>
    import Section from "../ui/Section.svelte";
	import Title from "../typography/Title.svelte";
	import { schedule } from "../../db";
</script>

<Section id='#schedule'>
    <Title>Schedule</Title>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Week
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Topic
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Corresponding Chapters in Textbook
                    </th>
                    <th scope="col" class="px-6 py-3">
                        CourseWork (Labs)
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Tutorials
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each schedule as item }
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            # {item.week}
                        </th>
                        <td class="px-6 py-4">
                            {item.date}
                        </td>
                        <td class="px-6 py-4">
                            {item.topic + ' ' + item.file}
                        </td>
                        <td class="px-6 py-4">
                            {item.chapters}
                        </td>
                        <td class="px-6 py-4">
                            {item.courseWork}
                        </td>
                        <td class="px-6 py-4">
                            {item.tutorials}
                        </td>
                    </tr>                    
                {/each}
            </tbody>
        </table>
    </div>
</Section>