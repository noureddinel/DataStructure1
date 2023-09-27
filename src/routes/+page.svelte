<script lang="ts">
	import About from "../components/sections/About.svelte";
	import Announcements from "../components/sections/Announcements.svelte";
	import CourseAssesment from "../components/sections/CourseAssesment.svelte";
	import Miscellaneous from "../components/sections/Miscellaneous.svelte";
	import Schedule from "../components/sections/Schedule.svelte";
	import TeamMembers from "../components/sections/TeamMembers.svelte";
	import Textbooks from "../components/sections/Textbooks.svelte";
</script>

<!-- <div>
    <img id="logo" src='/Logos/cropped-logo.png' alt="Logo ENSIA" class="w-60 mx-auto md:m-0"/>
</div> -->

    
<!-- About section -->
<About />

<!-- Course team section -->
<TeamMembers />

<!-- Schedule section -->
<Schedule />

<!-- CourseWork and Assessment section -->
<CourseAssesment />

<!-- Textbooks & Resources  -->
<Textbooks />

<!-- Miscellaneous -->
<Miscellaneous />

<!-- Announcements -->
<Announcements />

