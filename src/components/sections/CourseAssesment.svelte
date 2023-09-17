<script>
	import { courseAssessment } from "../../db";
	import Paragraph from "../typography/Paragraph.svelte";
    import Title from "../typography/Title.svelte";
    import Section from "../ui/Section.svelte";
    import { type } from "../../db";
</script>

<Section id="#coursework">
    <Title>Course Assessment</Title>
    <ul class="mt-6 space-y-4 list-disc list-inside dark:text-gray-400">
        <li>
            The participation of students in the course will involve five forms of activities:
            <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                {#each courseAssessment as course}
                    <li>{course.assessment}</li>
                {/each}
            </ol>
        </li>
    </ul>   
    
    <h3 class="text-xl font-semibold mt-6">Final Grade Assignment and Assessment methods</h3>
    <Paragraph>To this end, the below table shows the breakdown of the five forms of activities that the course involves, alongside the quantity and the overall weight of each activity.</Paragraph>
    <div class="relative overflow-x-auto">
        <table class="my-8 w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-orange-400 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" class="px-6 py-3 w-fit">
                        #
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Weight  
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each type as item }
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.type} 
                        </th>
                        <td class="px-6 py-4">
                            {item.count}
                        </td>
                        <td class="px-6 py-4">
                            {item.weight}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <h3 id="#exams" class="text-xl font-semibold mt-6">Exams (80%)</h3>
    <Paragraph>There will be two in-class exams – midterm and final – which together will count for 80% of your final score.</Paragraph>
    
    <ul class="max-w-md py-2 space-y-1 list-disc list-inside dark:text-gray-400">
        <li>
            The midterm is worth 20%
        </li>
        <li>
            The final is worth 60%
        </li>
    </ul>

    <Paragraph>No electronic device is not allowed during the exam.</Paragraph>

    <h3 id="#tests" class="text-xl font-semibold mt-6">Testes (14%)</h3>
    <Paragraph>There will be 2 Tests (tutorial and lab tests), which together will count for 14% of your final score. These Tests are meant to test your understanding and preparation for the concepts covered throughout the lectures, tutorials and labs.</Paragraph>

    <h3 id="#participation" class="text-xl font-semibold mt-6">Quizzes (3%)</h3>
    <Paragraph>There will be one online Quizze for each chapter.</Paragraph>
    <h3 id="#participation" class="text-xl font-semibold mt-6">Participation & Attendance (3%)</h3>
    <Paragraph>Your attendance of labs as well as your participation in discussions during presentations will count for 3% of your final score.</Paragraph>
</Section>