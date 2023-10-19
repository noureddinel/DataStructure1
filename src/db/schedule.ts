const schedule = [
    {
        id: 1,
        week: 1,
        date: 'Sept 24, Sept 28',
        topic: 'Algorithmic Thinking and Problem Solving: Introduction',
        sub_topic: 'Algorithm, Processor, Action;Program and Programming language;Resolution process',
        topicDownload: 'PDF',
        lecture0: 'https://drive.google.com/file/d/1l7jaYePFNMcjADWuDpJXglpat4kpG23N/view?usp=drive_link',
        lecture: 'https://drive.google.com/file/d/1a1IP7YRAQWHwAzde9Sq1UTd60duBYu1_/view?usp=drive_link',
        tutorial: 'https://drive.google.com/file/d/1QPnkqFRjzGhltdBXADrCrZw42jqQMSpO/view?usp=drive_link',
        lab_sup: 'https://drive.google.com/file/d/12M2s0_5dc951PZBxm8HCtueemP_pa-rS/view?usp=drive_link'
    },
    {
        id: 2,
        week: 2,
        date: 'Oct 1 , Oct 5',
        topic: 'Algorithmic Thinking and Problem Solving: Algorithm Formalism ',
        sub_topic: 'Algorithm structure;Flowchart;Declaration;Body',
        topicDownload: 'PDF',
        lecture: 'https://drive.google.com/file/d/1uizCa69rLIEu1mpTwfFRSmR833vJsaSp/view?usp=drive_link',
        lab: 'https://drive.google.com/file/d/1Swqya_k1-GGG54IQWIWwMVO8gkTUP4Q6/view?usp=drive_link',
        tutorial_sup: 'https://drive.google.com/file/d/13i4AAOdqKkKiHb8oGKUjh7We9m9-z6UT/view?usp=drive_link',
        tutorial: 'https://drive.google.com/file/d/1OsvBgmJR01P4QuXKXAQVcsNnUpDwY4bz/view?usp=drive_link'
    },
    {
        id: 3,
        week: 3,
        date: 'Oct 8 , Oct 12',
        topic: 'Control Structures',
        sub_topic: 'Conditional Statements',
        topicDownload: 'PDF',
        lecture: 'https://drive.google.com/file/d/1OrBD-iPyY0lvP8SphrigOE8FrK8OxVSp/view?usp=drive_link',
        lab: 'https://drive.google.com/file/d/14L3ajMzN_U-hfltXMlbAuxsaaI8zZc6C/view?usp=drive_link',
        tutorial: 'https://drive.google.com/file/d/1aEk6n6c8T2G_6NRmD_nTI4qrtZjvgUhF/view?usp=drive_link'
    },
    {
        id: 4,
        week: 4,
        date: 'Oct 15 , Oct 19',
        topic: 'Control Structures',
        sub_topic: 'Loops (while, for, repeat... until)',
        //topic: 'Modular Programming: Introduction',
        //sub_topic: 'Functions and Modular Programming',
        topicDownload: 'PDF',
        lecture: 'https://drive.google.com/file/d/1OrBD-iPyY0lvP8SphrigOE8FrK8OxVSp/view?usp=drive_link',
        lab: 'https://drive.google.com/file/d/1NjhfmFfN3sx4dTggHORGFFrb4C9WlxZr/view?usp=drive_link',
        tutorial: 'https://drive.google.com/file/d/1KXo9dczy2dq-7MA0uNEEU3JhG8eX2umH/view?usp=drive_link',
        tutorials: 'tuts 4'
    },
    {
        id: 5,
        week: 5,
        date: 'Oct 22 , Oct 26',
        topic: 'Modular Programming: Functions',
        sub_topic: 'Function Declaration, Definition, and Calling',
        topicDownload: 'PDF',
        test: 'Tutorial Test',
        chapters: 'Chapter/s 8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },
    {
        id: 6,
        week: 6,
        date: 'Oct 29 , Nov 3',
        topic: 'Static data structure',
        sub_topic: '1D array',
        topicDownload: 'PDF',
        chapters: 'Chapter/s 9, 12',
        courseWork: 'lab sheet 6',
        tutorials: 'tuts 6'
    },
    {
        id: 7,
        week: 7,
        date: 'Nov 5 , Nov 9',
        topic: 'Static data structure',
        sub_topic: '2D array',
        topicDownload: 'PDF',
        chapters: 'Chapter/s 10, 11',
        courseWork: 'lab sheet 7',
        tutorials: 'tuts 7'
    },
    {
        id: 8,
        week: 8,
        date: 'Nov 12 , Nov 16',
        topic: '',
        sub_topic: '',
        topicDownload: 'PDF',
        exam: 'Mid-term Exam',
        chapters: '8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },
    {
        id: 9,
        week: 9,
        date: 'Nov 19 , Nov 23',
        topic: 'Static data structure: Advanced Operations on Arrays',
        sub_topic: 'Sorting Algorithms: Bubble Sort;Searching Algorithms: Linear Search',
        topicDownload: 'PDF',
        chapters: '8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },
    {
        id: 10,
        week: 10,
        date: 'Nov 26 , Nov 30',
        topic: 'Static data structure:  ',
        sub_topic: 'String;Struct',
        topicDownload: 'PDF',
        chapters: '8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },
    {
        id: 11,
        week: 11,
        date: 'Dec 03, Dec 07',
        topic: 'Recursion',
        sub_topic: 'Principles of recursion;Rules;Example 1: Factorial',
        test: 'Lab Test',
        topicDownload: 'PDF',
        chapters: '8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },
    {
        id: 12,
        week: 12,
        date: 'Dec 10, Dec 14',
        topic: 'Recursion: Examples ',
        sub_topic: 'Fibonacci;Binary search',
        topicDownload: 'PDF',
        chapters: '8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },
    {
        id: 13,
        week: 13,
        date: 'Dec 17, Dec 21',
        topic: 'Dynamic Memory Allocation ',
        sub_topic: 'Introduction;Pointer definition;Pointer in C++',
        topicDownload: 'PDF',
        chapters: '8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },
    {
        id: 14,
        week: 14,
        date: 'Jan 7, Jan 11',
        topic: 'Dynamic Memory Allocation: Application',
        sub_topic: 'Array of pointers;Linked List',
        topicDownload: 'PDF',
        chapters: '8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },
    {
        id: 15,
        week: 15,
        date: 'Jan 14, Jan 18',
        topic: 'File Handling',
        sub_topic: 'File Handling and Streams',
        topicDownload: 'PDF',
        chapters: '8',
        courseWork: 'lab sheet 5',
        tutorials: 'tuts 5'
    },

]

export {schedule}