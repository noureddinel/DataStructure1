<script lang="ts">
    import { team } from "../../db";
	import TeamMemberCard from "./TeamMemberCard.svelte";
    import { Button } from "flowbite-svelte";
    import { fade } from "svelte/transition";
    import { flip } from 'svelte/animate'

    // Declaring the initial team list count
    let count: number = 3

    // The $ sign bind one value to another reactivly when one change the other re-renders
    $:teamMembers = team.slice(0, count);

    // Small pagination handler that will show team members two at a time if all team shown function hides back the team is reduced to initial count
    const handleShowMore = (): void => {
        count = count + 2;
        if(teamMembers.length == team.length){
            count = 3;
        }
    }

</script>


<div class=" my-12 grid md:col-span-2 md:grid-cols-2">
    <!-- Added the teamMember id as a key, this will make every item in the dom unique -->
    {#each team as member (member.id)}   
        <div in:fade animate:flip={{ duration: 500}}>
            <TeamMemberCard 
                image={member.image}
                fullName={member.fullName}
                email={member.email}
                hours={member.hours}
                gender={member.gender}
                biography={member.biography}
            />    
        </div>
    {/each}
 
</div>  