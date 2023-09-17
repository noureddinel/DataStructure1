const navLinks = [
    {
        id: 1, 
        link: '#top',
        title: 'About the course'
    },
    {
        id: 2, 
        link: '#courseTeam',
        title: 'Course team'
    },
    {
        id: 3, 
        link: '#schedule',
        title: 'Schedule'
    },
    {
        id: 4, 
        link: '#coursework',
        title: 'Coursework and Assessment',
        sublinks: [
            {
                id: 1,
                title: '2x Exams (80%)',
                link: '#exams'
            },
            {
                id: 1,
                title: '2x Tests (14%)',
                link: '#tests'
            },
            {
                id: 2,
                title: 'Quizzes (3%)',
                link: '#puzzles'
            },
            
            {
                id: 1,
                title: 'Participation & Attendance',
                link: '#participation'
            },
            
        ]
    },
    {
        id: 5, 
        link: '#textbooks',
        title: 'Textbooks and Resources',
    },
]


export { navLinks}