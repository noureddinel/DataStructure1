<script>
    import { team } from "../../db";
	import TeamMemberCard from "./TeamMemberCard.svelte";

</script>


<div class=" my-12">
    {#each team as member }   
        <TeamMemberCard 
            image={member.image}
            fullName={member.fullName}
            email={member.email}
            hours={member.hours}
        />    
    {/each}
</div>  