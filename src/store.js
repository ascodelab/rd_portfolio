import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profile: {
            name: "Anil",
            surname: "Sharma",
            birthDay: new Date(1993, 9, 5),
            startDescription: "Hello I’m Anil",
            description:
                ", a software engineer based in Bengaluru, India. Full-stack developer with industry experience building websites and web applications. I’m specialized in PHP/Laravel and have professional experience working with Vue.",
        },
        technologies: {
            programming: [
                { name: "PHP", level: 90, },
                { name: "Node.js + Typescript", level: 70, },
                { name: "Serverless", level: 60 },
                { name: "Mysql, Redis & Elastic Search", level: 50 },
                { name: "C#, Python & Go", level: 30 },

            ],
            frameworks: [
                { name: "Laravel", level: 75 },
                { name: "Nest.js", level: 68 },
                { name: "Vue.js/Nuxt.js", level: 80 },
                { name: "React.js/Next.js", level: 60 },
                { name: "Bootstrap + Tailwind.css", level: 55 },
            ],
            tools: [
                { name: "git" },
                { name: "Netlify" },
                { name: "Vercel" },
                { name: "AWS" },
                { name: "Wordpress + Headless CMS + PWA" }
            ]
        },
        projects: [{
            name: "Laravel Package Starter",
            description: "Get started with laravel package development. Setting up from the scratch can be tedious and time consuming so just get started with this package and focus on deliverable",
            link: "https://github.com/ascodelab/contact",
            icon: "leaf",
            startDate: "20 Nov, 2020",
            endDate: "Present",
            developer: "Anil Sharma",
            tags: [
                { name: "#opensource" },
                { name: "#PHP" },
                { name: "#Laravel" },
                { name: "#Tools" }
            ]
        }, {
            name: "portfolio",
            description: "Portfolio made with Vue.js and Tailwind css! This portfolio is open source and you can find it on Github!",
            link: "https://github.com/ascodelab/rd_portfolio",
            icon: "address-card",
            startDate: "Jan 15, 2021",
            endDate: "Present",
            developer: "Anil Sharma",
            tags: [
                { name: "#opensource" },
                { name: "#vue" },
                { name: "#tailwindcss" },
                { name: "#portfolio" }
            ]
        }, {
            name: "PHP Simple Routing",
            description: "Setup MVC like routing for your small composer project.",
            link: "https://github.com/ascodelab/php-simple-routing",
            icon: "leaf",
            startDate: "April 04, 2020",
            endDate: "Present",
            developer: "Anil Sharma",
            tags: [
                { name: "#opensource" },
                { name: "#PHP" },
                { name: "#Composer" }
            ]
        }
        ], events: [
            {
                name: "Unicorn Tech Media ",
                description: "I work in this company as a fullstack developer, I mostly use PHP, Node and Next.s for frontend!",
                role: "Senior Software Engineer",
                type: "Work",
                startDate: "June 2020",
                endDate: "Present",
                roles: [
                    { description: " Improved and maintained Lead management system and enhanced dashboard by adding elastic search to it." },
                    { description: "Created REST Apis for 91wheels.com and added elastic for advance search and redis for performance boosting." },
                    { description: "Created Ads management system for one of their clients." }
                ]
            },
            {
                name: "Mantra Labs",
                description: "Mantra Labs is an AI First InsurTech Products and Solutions Firm working with the largest Insurance companies in India & the World.",
                role: "Senior Software Engineer",
                type: "Work",
                startDate: "Jun 2018",
                endDate: "May 2020",
                roles: [
                    { description: "Developed features and maintained an insurance engine." },
                    { description: "Migrated projects from old Libraries & tools to new ones and improved general performance." },
                    { description: "Requirement gathering, Technical decision making, Project scoping and all." },
                    { description: "Involved extensively developing RESTful Services/SDK’s, Microservices, POCs." }
                ]
            }, {
                name: "Dignitas Digital",
                description: "Dignitas Digital is a full-service Digital Agency providing Custom Software Development, Web Design, Mobile App Development and Digital Marketing services.",
                role: "Programming Analyst",
                type: "Work",
                startDate: "May 2016",
                endDate: "May 2018",
                roles: [
                    { description: "Analyzed requirements and designed, developed and implemented software applications for multiple websites" },
                    { description: "Focussed on Backend Development(RESTful Services), EC2 Server Management, R&D for choosing a particular technology with complete POC." },
                    { description: "Developed multiple applications from scratch, Migrated/ported several websites to different tech Stack." },
                    { description: "Created assets storage API using Amazon's S3 bucket that can be used by multiple clients. Implemented CDN and Redis cache for many applications to boost up the preformance." },
                ]
            },
            {
                name: "Rosh Capital Advisory",
                description: "",
                role: "Full Stack Developer",
                type: "Work",
                startDate: "March 2018",
                endDate: "Jan 2018",
                roles: [
                    { description: "" },
                    { description: "Developed a first of it's kind P2P Lending Platform in India complete with a full featured website and an android app using technologies like PHP, MySQL, Java, Redis and AWS." },
                    { description: "Created proprietary credit assessment algorithms using financial, social and behavioural data of users." },
                    { description: "Successfully scaled the platform for handling 1 Million active users with a total disbursed loans of over $200 Million." },
                ]
            },
            {
                name: "Jabalpur Engineering College (JEC)",
                description: " ",
                role: "Student",
                type: "education { B.tech, Computer Science Enginering }",
                startDate: "July 2011",
                endDate: "July 2015",
                roles: [
                    { description: "Managed college website and TPO website." },
                    { description: "Participate in many workshops and Tech events." },
                ]
            }
        ], socials: [
            {
                name: "LinkedIn",
                link: "https://linkedin.com/in/realanilsharma/",
                icon: "linkedin"
            }, {
                name: "Github",
                link: "https://github.com/ascodelab",
                icon: "github"
            }, {
                name: "Twitter",
                link: "https://twitter.com/realanilsharma",
                icon: "twitter"
            },
        ]
    },

    getters: {
        age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});
