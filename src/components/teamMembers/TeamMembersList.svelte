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


<div class=" my-12">
    <!-- Added the teamMember id as a key, this will make every item in the dom unique -->
    {#each teamMembers as member (member.id)}   
        <div in:fade animate:flip={{ duration: 500}}>
            <TeamMemberCard 
                image={member.image}
                fullName={member.fullName}
                email={member.email}
                hours={member.hours}
            />    
        </div>
    {/each}
    <div class="flex justify-center items-center my-6">
        <Button
            outline
            size="sm"
            class="hover:bg-orange-400 border-orange-400"
            on:click={handleShowMore}
        >
            <!-- Button will show content depending on the length on the team array -->
            {teamMembers.length == team.length? "Hide back" : 'Show more'}
        </Button>
    </div>
</div>  