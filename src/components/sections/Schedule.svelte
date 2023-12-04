<script lang="ts">
    import Section from "../ui/Section.svelte";
	  import Title from "../typography/Title.svelte";
	  import { schedule } from "../../db";
    import { Tabs, TabItem } from 'flowbite-svelte';


    if(typeof window !== 'undefined'){
      const tabs = document.getElementsByClassName('scrollbar-none');
      console.log(tabs);
    } 

</script>

<Section id='#schedule'>
    <Title>Schedule</Title>
      <div class="mt-1">
          <Tabs 
            defaultClass='flex space-x-3 overflow-scroll scrollbar scrollbar-none'
            contentClass="p-4 bg-blue-100 dark:bg-blue-800 rounded-b-lg" 
            inactiveClasses="p-4 text-gray-500 rounded-t-lg hover:text-blue-600 bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            activeClasses="p-4 text-blue-600 bg-blue-100 rounded-t-lg dark:bg-blue-800 dark:text-primary-500 "
            divider={false}
          > 
              {#each schedule as item, index}
                  <TabItem open title={`#Week ${item.week}`}>
                      {#if index === 1}
                        <script>
                          $: $tabIndex = index;
                        </script>
                      {/if}
                      <div>
                          <div class="px-1 sm:px-4  bg-white rounded-lg py-0.5" >
                            <h3 class="text-base font-semibold leading-7 text-yellow-600 pl-1"> {item.date}</h3>
                          </div>
                          
                          
                            <div class="mt-6 border-t border-blue-100">
                              <dl class="divide-y divide-blue-300">
                              {#if item.id != 8}
                              <div class="mt-4">
                              
                              <div class="overflow-x-scroll">
                                <table class="w-full">
                                  <thead>
                                    <tr>
                                      <th class="px-4 py-2 text-left">Topic</th>
                                      <th class="px-4 py-2 text-left">Slides</th>
                                      <th class="px-4 py-2 text-left">Tutorial</th>
                                      <th class="px-4 py-2 text-left">Lab</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="px-6 py-2 font-semibold"> {item.topic} 
                                        <ul style=" padding-left: 35px;">
                                          {#if item.sub_topic}
                                            {#each item.sub_topic.split(';') as subTopic}
                                              <li style="font-weight: normal; padding-left: 2px; list-style-type: disc; " class="px-1 py-0.1  ">{subTopic}</li>
                                            {/each}
                                          {/if}
                                        </ul>
                                      </td>
                                      <td class="px-4 py-2">
                                        {#if item.lecture0}
                                            <p> <a href="{item.lecture0}" class="text-blue-600">lecture0</a> </p>
                                        {/if}
                                        <a href="{item.lecture}" class="text-blue-600">lecture{item.id}</a></td>
                                      <td class="px-4 py-2"> <a href="{item.tutorial}" class="text-blue-600">tutorial{item.id}</a>
                                      {#if item.tutorial_sup}
                                            <p> <a href="{item.tutorial_sup}" class="text-blue-600">tutorial_sup{item.id}</a> </p>
                                        {/if}
                                      </td>
                                      <td class="px-4 py-2"> <a href="{item.lab}" class="text-blue-600">lab_sheet{item.id}</a>
                                      {#if item.lab_sup}
                                            <p> <a href="{item.lab_sup}" class="text-blue-600">lab_sup{item.id}</a> </p>
                                        {/if}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          {/if}
                          {#if item.exam}
                              <div class="overflow-x-scroll">>
                                  <h3 class="text-xl font-semibold">{item.exam_type}</h3> 
                                  <thead>
                                    <tr>
                                      <th class="px-4 py-2 text-left">Exam</th>
                                      <th class="px-4 py-2 text-left">Solution</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="px-4 py-2"> <a href="{item.exam_}" class="text-blue-600">lecture</a></td>
                                      <td class="px-4 py-2"> <a href="{item.solution_}" class="text-blue-600">solution</a> </td> 
                                    </tr>
                                  </tbody>     
                              </div>
                          {/if}
                          {#if item.test}
                              <div class="py-2 mt-6   text-center" style="color: red;">
                                  <h3 class="text-xl font-semibold">{item.test}</h3>    
                              </div>
                          {/if}
                              
                            </dl>
                          </div>
                        </div>
                  </TabItem>    
              {/each}
          </Tabs>
        </div>
</Section>

