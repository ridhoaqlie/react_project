const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '',
    title: 'ReactFromRidho.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Ridho Aqli Efendi',
    role: 'Software Engineer',
    description:
        'Here you can see some of project that I use with reactJS',
    resume: 'https://github.com/ridhoaqlie/react_project',
    social: {
        linkedin: 'https://linkedin.com/in/ridhoaqlie',
        github: 'https://github.com/ridhoaqlie',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Weather Project',
        description:
            'This is an app to find a weather in all city on earth, configure with Open Weather API'
    },
    {
        name: 'Project 2',
        description:
            'Not Implement Yet'
    },
    {
        name: 'Project 3',
        description:
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam'
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'ridhoaqlie@mail.com',
}

export { header, projects, about, skills, contact }
