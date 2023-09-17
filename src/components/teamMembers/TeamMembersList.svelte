<script lang="ts">
    import { team } from "../../db";
	import TeamMemberCard from "./TeamMemberCard.svelte";
    import { Button } from "flowbite-svelte";
    import { fade, slide, scale } from "svelte/transition";
    import { flip } from 'svelte/animate'
	import TeamMembers from "../sections/TeamMembers.svelte";

    let count = 3
    $:teamMembers = team.slice(0, count);

    const handleShowMore = () => {
        count = count + 2;
        if(teamMembers.length == team.length){
            count = 3;
        }
    }

</script>


<div class=" my-12">
    {#each teamMembers as member (member.id)}   
        <div  in:scale animate:flip={{ duration: 500}}>
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
            {teamMembers.length == team.length? "Hide back" : 'Show more'}
        </Button>
    </div>
</div>  