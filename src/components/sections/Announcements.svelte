<script>
    import { announcements } from "../../db/announcements";
	import Paragraph from "../typography/Paragraph.svelte";
import Title from "../typography/Title.svelte";
import Section from "../ui/Section.svelte";
</script>

<!-- Announcement section -->
<Section id="#announcements">
    <Title>Announcements</Title>
    <div class="mt-6">
        {#each announcements as announcement  }
            <div class="flex items-center gap-2">
                <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
                <Paragraph>{announcement.announcement}</Paragraph>
            </div>
        {/each}
    </div>
</Section>