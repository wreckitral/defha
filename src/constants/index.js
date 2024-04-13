import {
    gobank,
    toolbox,
    todo,
    skillsBg,
    teamwork,
    lightning,
    communication,
    nodejs,
    golang,
    dsa,
    database,
    virtualization,
    debug,
    mednology,
    tobecontinued
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Projects",
        url: "#projects", 
    },
    {
        id: "1",
        title: "Skills",
        url: "#skills",
    },
    {
        id: "2",
        title: "Dev-Tools",
        url: "#dev-tools",
    },
    {
        id: "3",
        title: "Contacts",
        url: "#contacts",
        onlyMobile: true
    },
    {
        id: "4",
        title: "Other",
        url: "#other",
        onlyMobile: true
    },
];

export const projects = [
    {
        id: "4",
        title: "Compiler",
        text: "A Compiler",
        date: "-- 2024",
        status: "progress",
        imageUrl: tobecontinued,
    },
    {
        id: "3",
        title: "UNTI Center",
        text: "Student Center for Infomatics Student UNSRI",
        date: "-- 2024",
        status: "progress",
        imageUrl: tobecontinued,
    },
    {
        id: "5",
        title: "Mednology",
        text: "API service for an medical app, made by using Node.js, Express & MongoDB",
        date: "Mar 2023",
        status: "done",
        imageUrl: mednology,
        projectUrl: "https://github.com/wreckitral/mednology.git",
        colorful: true,
    },
    {
        id: "0",
        title: "GO BANK",
        text: "API service for bank account management, made by using Golang",
        date: "Feb 2024",
        status: "done",
        imageUrl: gobank,
        projectUrl: "https://github.com/wreckitral/go-bank",
        colorful: true,
    },
    {
        id: "1",
        title: "Todo CLI",
        text: "Todo app on terminal made by using golang",
        date: "Jan 2023",
        status: "done",
        projectUrl: "https://github.com/wreckitral/todo-cli",
        imageUrl: todo,
        colorful: true
    },
    {
        id: "2",
        title: "Toolbox CLI",
        text: "CLI app that contains bundle of toolbox to help things related to your pc",
        date: "Jan 2024",
        status: "done",
        projectUrl: "https://github.com/wreckitral/toolbox-cli",
        imageUrl: toolbox,
        colorful: true
    },
];

export const contacts = [
    {
        id: "0",
        title: "Email",
        description: "Reach me anytime, open for any opportunity",
        link: "#",
        button: "Contact Me"
    },
    {
        id: "1",
        title: "Linkedin",
        description: "Feel free to connect",
        link: "#",
        button: "Connect"
    },
    {
        id: "2",
        title: "Github",
        description: "Welcome for suggestions, lesson, and learning",
        link: "#",
        button: "Follow"
    },
];

export const skills = [
    {
        id: "0",
        title: "Communication",
        text: "Effective communicator, fostering effective collaboration and understanding within teams and workplace.",
        skillUrl: "https://www.youtube.com/",
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        iconUrl: communication,
        imageUrl: skillsBg,
    },
    {
        id: "1",
        title: "Teamwork",
        text: "Proficient in teamwork, excelling in collaborative environments to drive collective success.",
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        skillUrl: "https://github.com/",
        iconUrl: teamwork,
        imageUrl: skillsBg,
        light: true,
    },
    {
        id: "2", 
        title: "Agile & Goal Oriented",
        text: "Highly adaptable and driven individual, skilled at navigating challenges with agility and maintaining a steadfast commitment to accomplishing goals.",
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        iconUrl: lightning,
        imageUrl: skillsBg,
    },
    {
        id: "3",
        title: "Node.js & Express",
        text: "Build some API using Node.js and Express",
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        iconUrl: nodejs,
        imageUrl: skillsBg,
        light: true,
    },
    {
        id: "4",
        title: "Golang",
        text: "Currently learning golang and build some projects",
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        iconUrl: golang,
        imageUrl: skillsBg,
    },
    {
        id: "5",
        title: "C & Python",
        text: "I use C & Python for solving DSA problems, and i use Python for Machine Leaning and data manipulation.",
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        iconUrl: dsa,
        imageUrl: skillsBg,
    },
    {
        id: "6",
        title: "Database",
        text: "I've used Mysql, Postgresql and MongoDB, mostly for my web projects, and also use Oracle for my database class.",
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        iconUrl: database,
        imageUrl: skillsBg,
    },
    {
        id: "7",
        title: "Virtualization",
        text: `For providing an entire machine virtualization i used Qemu, KVM, VirtManager and Virtualbox. 
            For my personal developing environment i use docker. For python i use venv and conda.`,
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        iconUrl: virtualization,
        imageUrl: skillsBg,
    },
    {
        id: "8",
        title: "To Be Continued...",
        text: "This list will continue, i will always keep learning and building more, as i fall more deeply inlove with computer.",
        backgroundUrl: `https://raw.githubusercontent.com/wreckitral/defha/b7aea710b2c03e4360d76741bb60e4febb8dc9b0/src/assets/skills/card-${Math.floor(Math.random() * 6) + 1}.svg`,
        iconUrl: debug,
        imageUrl: skillsBg,
    },
];

