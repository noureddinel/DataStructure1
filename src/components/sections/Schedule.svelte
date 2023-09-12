<script>
    import Section from "../ui/Section.svelte";
	import Title from "../typography/Title.svelte";
	import { schedule } from "../../db";
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Tabs, TabItem } from 'flowbite-svelte';
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
</script>

<Section id='#schedule'>
    <Title>Schedule</Title>
<!--  
<div class="overflow-x-auto">
    <Table striped divClass="mt-6">
        <TableHead>
          <TableHeadCell>Week</TableHeadCell>
          <TableHeadCell>Date</TableHeadCell>
          <TableHeadCell>Topic</TableHeadCell>
          <TableHeadCell>Chapters in Textbooks</TableHeadCell>
          <TableHeadCell>courseWork</TableHeadCell>
          <TableHeadCell>Tutorials</TableHeadCell>
        </TableHead>
        <TableBody>
          {#each schedule as week}
            <TableBodyRow >
                <TableBodyCell>#{week.week}</TableBodyCell>
                <TableBodyCell>{week.date}</TableBodyCell>
                <TableBodyCell>
                      {#if week.exam}    
                        <TableBodyCell tdClass="text-center text-xl font-bold py-2 w-full">{week.exam}</TableBodyCell>
                      {/if}
                    <div class="flex items-center gap-4">
                        {week.topic}
                        <a href={week.topicDownload}>
                            <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4.5 11H4v1h.5a.5.5 0 0 0 0-1ZM7 5V.13a2.96 2.96 0 0 0-1.293.749L2.879 3.707A2.96 2.96 0 0 0 2.13 5H7Zm3.375 6H10v3h.375a.624.624 0 0 0 .625-.625v-1.75a.624.624 0 0 0-.625-.625Z"/>
                                <path d="M19 7h-1V2a1.97 1.97 0 0 0-1.933-2H9v5a2 2 0 0 1-2 2H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1.969 1.969 0 0 0 1.933 2h12.134c1.1 0 1.7-1.236 1.856-1.614a.988.988 0 0 0 .07-.386H19a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM4.5 14H4v1a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h1.5a2.5 2.5 0 1 1 0 5Zm8.5-.625A2.63 2.63 0 0 1 10.375 16H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1.375A2.63 2.63 0 0 1 13 11.625v1.75ZM17 12a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-1v1h1Z"/>
                            </svg>
                        </a>
                    </div>
                </TableBodyCell>
                <TableBodyCell>{week.chapters}</TableBodyCell>
                <TableBodyCell>
                    <a href="#" download class="text-blue-500">
                        {week.courseWork}
                    </a>
                </TableBodyCell>
                <TableBodyCell>
                    <a href="#" download class="text-blue-500">
                        {week.tutorials}
                    </a>
                </TableBodyCell>
            </TableBodyRow>
          {/each}
          <TableBodyRow>
            <TableBodyCell>#8</TableBodyCell>
            <TableBodyCell>Mar 26, Mar 30</TableBodyCell>
            <TableBodyCell tdClass="text-center font-bold">Spring Break</TableBodyCell>
            <TableBodyCell></TableBodyCell>
            <TableBodyCell></TableBodyCell>
            <TableBodyCell></TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>#9</TableBodyCell>
            <TableBodyCell>Mar 26, Mar 30</TableBodyCell>
            <TableBodyCell tdClass="text-center font-bold">Spring Break</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>#10</TableBodyCell>
            <TableBodyCell>Apr 09 , Apr 13</TableBodyCell>
            <TableBodyCell tdClass="text-center font-bold">Final exam</TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </div>     -->
      <div class="mt-6">
          <Tabs>
                {#each schedule as item }
                    <TabItem open title={`#Week ${item.week}`}>
                        <div>
                            <div class="px-4 sm:px-0">
                              <h3 class="text-base font-semibold leading-7 text-gray-900">Dates:</h3>
                              <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{item.date}</p>
                            </div>
                            {#if item.exam}
                                <div class="py-2 mt-6 rounded-lg bg-blue-400 text-center text-white" >
                                    <h3 class="text-xl font-semibold">{item.exam}</h3>    
                                </div>
                            {/if}
                            <div class="mt-6 border-t border-gray-100">
                              <dl class="divide-y divide-gray-100">
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt class="text-sm font-semibold leading-6 text-gray-900">Topic</dt>
                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.topic}</dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt class="text-sm eading-6 text-gray-900 font-semibold">Corresponding chapters in Textbook</dt>
                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.chapters}</dd>
                            </div>
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt class="text-sm font-semibold leading-6 text-gray-900">Coursework (Labs)</dt>
                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                   <a href="#" class="text-blue-600">{item.courseWork}</a>
                                </dd>
                                </div>
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt class="text-sm font-semibold leading-6 text-gray-900">Tutorials</dt>
                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <a href="#" class="text-blue-600">{item.tutorials}</a></dd>
                                </div>
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt class="text-sm font-semibold leading-6 text-gray-900">Attachments</dt>
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