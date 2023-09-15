<script>
    import Section from "../../components/ui/Section.svelte";
    import { lectures } from "../../db";
	import Paragraph from "../typography/Paragraph.svelte";
	import SubTitle from "../typography/SubTitle.svelte";
	import Title from "../typography/Title.svelte";
</script>

<!-- Section -->
<Section>
    <!-- Section Title -->
    <Title>Introduction to Programming with C++ (3rd Term)</Title>
    <!-- Section subtitle -->
    <SubTitle>About the Course</SubTitle>
    <!-- About section text -->
    <Paragraph>C++ is a high-level programming language that supports various computer 
        programming models such as object-oriented programming and generic programming. 
        It was created by <a class="text-blue-600" href="https://fr.wikipedia.org/wiki/Bjarne_Stroustrup" target="_blank">Bjarne Stroustrup</a> 
        and, “Its main purpose was to make writing good programs easier and more pleasant 
        for the programmer.”
    </Paragraph>
    <Paragraph>
        By learning C++, you can create applications that will run on a wide variety of 
        hardware platforms such as personal computers running Windows, Linux, UNIX, 
        and Mac OS X, as well as small form factor hardware such as IoT devices like 
        the Raspberry PI and Arduino–based boards.
    </Paragraph>
    <Paragraph>
        C++ is <a class="text-blue-600" href="https://www.tiobe.com/tiobe-index/" target="_blank">TIOBE's</a> programming language of the year 2022. 
        It has won this title because C++ gained most popularity (+4.62%) in 2022. 
        The reason for C++'s popularity is its excellent performance while being a high 
        level object-oriented language. Because of this, it is possible to develop fast 
        and vast software systems (over millions of lines of code) in C++ without 
        necessarily ending up in a maintenance nightmare.
    </Paragraph>

<!-- C++ inventor quote  -->
<p class="text-gray-500 dark:text-gray-400">
    <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p class="text-base md:text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            I have reaffirmed a long-standing and strongly held view: Language comparisons are rarely meaningful and even less often fair. – Bjarne Stroustrup (inventor of C++)
        </p>
    </blockquote>


    <!-- Lectures -->
    <h3 class="text-md my-6 font-semibold">Lectures</h3>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-orange-400 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        
                    </th>
                    <th scope="col" class="px-6 py-3 w-fit">
                        Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Section/Group   
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Place   
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Faculty/Staff
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each lectures as lecture }
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Lecture 
                        </th>
                        <td class="px-6 py-4">
                            {lecture.time}
                        </td>
                        <td class="px-6 py-4">
                            {lecture.section}
                        </td>
                        <td class="px-6 py-4">
                            {lecture.place}
                        </td>
                        <td class="px-6 py-4">
                            {lecture.staff}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Section>

