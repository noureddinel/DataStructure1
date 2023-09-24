<script lang="ts">
    import Section from "../ui/Section.svelte";
	  import Title from "../typography/Title.svelte";
	  import { schedule } from "../../db";
    import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Section id='#schedule'>
    <Title>Schedule</Title>
      <div class="mt-6">
          <Tabs 
            defaultClass='flex space-x-3 overflow-scroll scrollbar scrollbar-none'
            contentClass="p-4 bg-gray-100 dark:bg-gray-800 rounded-b-lg" 
            inactiveClasses="p-4 text-gray-500 rounded-t-lg hover:text-gray-600 bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            activeClasses="p-4 text-orange-400 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500 "
            divider={false}
          > 
              {#each schedule as item}
                  <TabItem open title={`#Week ${item.week}`}>
                      <div>
                          <div class="px-4 sm:px-0  bg-white rounded-lg py-4">
                            <h3 class="text-base font-semibold leading-7 text-gray-900 pl-2">Dates:</h3>
                            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 pl-2">{item.date}</p>
                          </div>
                          {#if item.exam}
                              <div class="py-2 mt-6 rounded-lg bg-blue-400 text-center text-white" >
                                  <h3 class="text-xl font-semibold">{item.exam}</h3>    
                              </div>
                          {/if}
                          <div class="mt-6 border-t border-gray-100">
                            <dl class="divide-y divide-gray-100">
                              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0  bg-white rounded-lg mb-4">
                                <dt class="md:text-sm font-semibold leading-6 text-gray-900 pl-2">Topic</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.topic}</dd>
                          </div>
                          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0  bg-white rounded-lg mb-4">
                                <dt class="md:text-sm eading-6 text-gray-900 font-semibold pl-2">Corresponding chapters in Textbook</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.chapters}</dd>
                          </div>
                              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0  bg-white rounded-lg mb-4">
                                <dt class="md:text-sm font-semibold leading-6 text-gray-900 pl-2">Coursework (Labs)</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <a href="#" class="text-blue-600">{item.courseWork}</a>
                              </dd>
                              </div>
                              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-white rounded-lg mb-4">
                                <dt class="md:text-sm font-semibold leading-6 text-gray-900 border-dashed pl-2">Tutorials</dt>
                                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <a href="#" class="text-blue-600">{item.tutorials}</a></dd>
                              </div>
                              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt class="md:text-sm font-semibold leading-6 text-gray-900">Attachments</dt>
                                <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                  <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                      <div class="flex w-0 flex-1 items-center">
                                        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                        </svg>
                                        <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                          <span class="truncate font-medium">Topic attachement download.{item.topicDownload}</span>
                                          <span class="flex-shrink-0 text-gray-400"></span>
                                        </div>
                                      </div>
                                      <div class="ml-4 flex-shrink-0">
                                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                      </div>
                                    </li>
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                  </TabItem>    
              {/each}
          </Tabs>
        </div>
</Section>


<style>
.hide-scrollbar{
  height: 0;
  background-color: transparent;
}
</style>