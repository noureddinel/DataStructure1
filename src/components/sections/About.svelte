<script>
    import Section from "../../components/ui/Section.svelte";
    import { lectures } from "../../db";
	import Paragraph from "../typography/Paragraph.svelte";
	import SubTitle from "../typography/SubTitle.svelte";
	import Title from "../typography/Title.svelte";
</script>

<!-- Section -->
<Section>
    <section 
        class="
            rounded-lg 
            flex 
            justify-center 
            items-center 
            bg-center 
            bg-cover 
            bg-no-repeat 
            bg-[url('https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')] 
            bg-gray-700 
            bg-blend-multiply 
            h-[340px]
            p-8
            md:p-6
            text-center
        "
    >
        <!-- Section Title -->
        <h1 
            class="
                text-white 
                font-semibold 
                text-xl 
                md:text-4xl 
                border-4 
                p-8
                border-orange-400
                w-fit
                rounded-lg
            "
        >
            Data Structure and Algorithms 1 (DSA1)
        </h1>
    </section>
    
    <!-- Section subtitle -->
    <div class="mt-6">
        <Title>About the Course</Title>
    </div>
    <!-- About section text -->
    <Paragraph>The foundations of software development are data 
    structures and algorithms because they are crucial for developing a developer's 
    problem-solving skills. The course objective is to provide the fundamental 
    concepts of data structures and the principles of their implementation, and to 
    show how to implement them wisely in an algorithm, facilitating a seamless 
    transition to a high-level programming language.
    </Paragraph>
    <Paragraph>
       This course introduces students to algorithmic thinking, programming concepts, 
       and problem-solving techniques using the C++ programming language. 
       Students will learn to design and implement simple algorithms, 
       work with data structures, and develop modular and efficient code. 
       The course includes lectures, tutorials, and lab sessions to provide a 
       comprehensive learning experience.

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
    <div class="my-6 ">
        <Title>Lectures</Title>
    </div>
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

