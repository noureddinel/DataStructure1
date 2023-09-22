<script>
    import Section from "../../components/ui/Section.svelte";
	import TeamMembersList from "../teamMembers/TeamMembersList.svelte";
	import Title from "../typography/Title.svelte";
</script>

<Section id="#courseTeam">
    <Title>Course team</Title>
    <p class="my-2">We are always available for help and support during our office hours. To receive help outside of our office hours, it is prefered to schedule a meeting.</p>
    <TeamMembersList />
</Section>
