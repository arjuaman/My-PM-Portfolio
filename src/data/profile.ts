export interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    skills: string[];
    achievements?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    grade?: string;
    activities?: string[];
}

export interface Skill {
    name: string;
    proficiency: number;
    description: string;
}

export interface Certification {
    name: string;
    authority: string;
    date: string;
    credentialId?: string;
    skills?: string[];
}

export interface Publication {
    title: string;
    publisher: string;
    date: string;
    domain: string;
    description: string;
    achievements: string[];
}

export interface Award {
    title: string;
    issuer: string;
    date: string;
    description: string;
}

export interface Project {
    name: string;
    period: string;
    description: string;
    technologies: string[];
    achievements?: string[];
}

export interface VolunteerWork {
    role: string;
    organization: string;
    period: string;
    cause: string;
    description: string;
}

export interface Profile {
    name: string;
    title: string;
    value: string; // Professional value metric
    about: string;
    contact: {
        email: string;
        phone: string;
        linkedin: string;
        location: string;
    };
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    certifications: Certification[];
    publications: Publication[];
    awards: Award[];
    projects: Project[];
    volunteerWork: VolunteerWork[];
    image?: string;
}

export const profileData: Profile = {
    name: "Arju Aman",
    title: "Product Manager | Ex-Game Dev",
    value: "₹ 15,00,000 CTC",
    image: "/assets/profile-pic.jpg",
    about: "A skilled Product Manager with a background in Game Development. Started my journey in R&D at Ingenuity Gaming, creating feature-rich gaming experiences. Then moved to Helmerich & Payne, building intuitive interfaces for drilling operations. Recently completed a successful PM internship at Microsoft, earning a Pre-Placement Offer. Currently pursuing my MBA at IIM Ahmedabad, ready to drive impactful product strategies.",
    contact: {
        email: "p24arju@iima.ac.in",
        phone: "9006415009",
        linkedin: "https://www.linkedin.com/in/arjuaman/",
        location: "Ahmedabad, Gujarat, India",
    },
    experience: [
        {
            role: "Events and Community Cell Head",
            company: "The ProdMan Club | IIM Ahmedabad",
            period: "Mar 2025 - Present",
            location: "Ahmedabad, Gujarat, India",
            description: [
                "Steering the ship for the Product Management club's community initiatives.",
                "Orchestrating grand events that bring together aspiring PMs and industry veterans.",
                "Building a strong crew of future product leaders through engagement and mentorship."
            ],
            skills: ["Community Leadership", "Event Strategy", "Stakeholder Management"]
        },
        {
            role: "Product Management Intern",
            company: "Microsoft",
            period: "Apr 2025 - May 2025",
            location: "Hyderabad, Telangana, India",
            description: [
                "🏆 Secured a Pre-Placement Offer (PPO).",
                "Charted a course into developer challenges, discovering critical pain points through 20+ deep-dive interviews.",
                "Navigated through feedback data to uncover gaps between existing tools and user needs.",
                "Crafted a treasure map of solutions with strategic mockups and user journeys.",
                "Delivered actionable intelligence to leadership, influencing the product roadmap."
            ],
            skills: ["Product Strategy", "User Research", "Data Analysis", "Stakeholder Management", "Microsoft Copilot", "Wireframing"],
            achievements: [
                "Conducted 20+ developer interviews to identify pain points",
                "Created strategic mockups and user journeys",
                "Influenced product roadmap with actionable recommendations"
            ]
        },
        {
            role: "Software Engineer 1",
            company: "Helmerich & Payne",
            period: "Sep 2023 - May 2024",
            location: "Noida, Uttar Pradesh, India",
            description: [
                "Built the frontend for mission-critical drilling operations.",
                "Launched a new internal project for efficient well management, improving operational speed.",
                "Designed intuitive interfaces for remote control capabilities, empowering rig operators.",
                "Optimized the 'ship's controls' for better usability and safety."
            ],
            skills: ["Vue.js", "UX Design", "Technical Feasibility", "Agile", "MVVM Architecture", "JavaScript", "HTML5", "CSS3", "Figma", "Postman"],
            achievements: [
                "2+ rigs using the web app feature developed",
                "Beta version in production serving 200+ potential customers",
                "Raised 10+ bugs in developer testing phase",
                "Created 3+ high-level and low-level design documents",
                "Provided knowledge transfers to 4+ team members"
            ]
        },
        {
            role: "Game Developer - Research (Tier 1)",
            company: "Ingenuity Gaming",
            period: "Jan 2022 - Sep 2023",
            location: "Noida, Uttar Pradesh, India",
            description: [
                "Architected frameworks for next-gen slot games.",
                "Tailored game engines for diverse projects using TypeScript and PIXI.",
                "Coordinated with Art & QA crews to ensure a polished final product.",
                "Maintained the codebase 'ship' to ensure smooth sailing for all developers."
            ],
            skills: ["TypeScript", "Game Mechanics", "Cross-functional Collaboration", "React.js", "PixiJS", "JavaScript", "HTML5", "CSS3"],
            achievements: [
                "🏆 Received High Roller Award for exceptional performance (1/20 in 500+ members)",
                "1/3 among 150+ developers promoted to Tier 1 Research role",
                "Developed 5+ online slot games played across 42+ countries",
                "Supported 32+ languages & 6+ jurisdictions with 30+ currencies",
                "Games loved across 66+/165 casinos worldwide",
                "1/10 selected for R&D team from 500+ members",
                "Created 10+ high-level and low-level design documents",
                "Revived 2 shelved projects generating £50K+ revenue",
                "Achieved 100% goals with 'Excellent' grade in annual appraisal",
                "Implemented 100+ change requests over tenure",
                "Provided 120+ hours of knowledge transfer sessions to 20+ members",
                "Served as POC/SME for 10+ clients",
                "Resolved 50+ bugs through daily client interactions",
                "Developed and executed reintegration plans for 3 employees with 100% success rate"
            ]
        },
        {
            role: "Associate Game Developer",
            company: "Ingenuity Gaming",
            period: "Nov 2021 - Jan 2022",
            location: "Noida, Uttar Pradesh, India",
            description: [
                "Developed slot games for online gaming casinos.",
                "Worked on both frontend and backend game development."
            ],
            skills: ["TypeScript", "JavaScript", "PixiJS"]
        },
        {
            role: "Associate Game Developer Trainee",
            company: "Ingenuity Gaming",
            period: "May 2021 - Nov 2021",
            location: "Noida, Uttar Pradesh, India",
            description: [
                "Learning and application of JavaScript, TypeScript, PixiJS among other frameworks."
            ],
            skills: ["JavaScript", "TypeScript", "PixiJS"]
        },
        {
            role: "Information Technology Intern",
            company: "Nestlé",
            period: "Nov 2020 - Dec 2020",
            location: "Remote",
            description: [
                "Worked on the project WOR/MOR KPIs.",
                "Worked on Microsoft PowerBI tool for generating company's department-specific reports."
            ],
            skills: ["Microsoft Power BI", "Data Analysis", "Python", "C++"]
        },
        {
            role: "Intern",
            company: "Electronics & ICT Academy, IIT Guwahati",
            period: "May 2019 - Jul 2019",
            location: "Remote",
            description: [
                "Worked on ECG data compression using wavelet transform.",
                "Achieved average compression ratio of 12.8 with acceptable signal preservation.",
                "Focused on solving the problem of saving or wirelessly transmitting ECG data."
            ],
            skills: ["Signal Processing", "Wavelet Transform", "Data Compression"]
        }
    ],
    education: [
        {
            degree: "Master of Business Administration - MBA",
            institution: "Indian Institute of Management Ahmedabad",
            period: "Jun 2024 - Apr 2026",
            activities: ["Cell Head of the Web Cell of Official IIMA Media Cell", "Events and Community Cell Head - The ProdMan Club"]
        },
        {
            degree: "Bachelor of Technology - BTech, Electronics and Communications Engineering",
            institution: "Indian Institute of Information Technology Bhagalpur",
            period: "2017 - 2021",
            grade: "84.8% (9+/10 GPA in 56% of subjects)",
            activities: ["Training and Placement Cell Coordinator", "Hostel Representative", "Volleyball Team Captain"]
        },
        {
            degree: "Class XII",
            institution: "Kendriya Vidyalaya Kankarbagh, Patna",
            period: "2016",
            grade: "89% (A1 in 3/6 subjects, 97/100 in Chemistry)",
            activities: []
        },
        {
            degree: "Class X",
            institution: "Kendriya Vidyalaya Kankarbagh, Patna",
            period: "2014",
            grade: "10/10 CGPA (10/10 in all 5 subjects)",
            activities: ["School Football Team"]
        }
    ],
    skills: [
        {
            name: "Product Management",
            proficiency: 95,
            description: "Transforms complex user needs into winning product strategies that drive business growth."
        },
        {
            name: "User Research",
            proficiency: 92,
            description: "Uncovers hidden insights through deep user empathy, turning feedback into actionable intelligence."
        },
        {
            name: "Data Analysis",
            proficiency: 88,
            description: "Decodes patterns in chaos, making data-driven decisions that eliminate guesswork."
        },
        {
            name: "Game Development",
            proficiency: 90,
            description: "Crafts engaging experiences by blending technical prowess with creative storytelling."
        },
        {
            name: "Agile Methodologies",
            proficiency: 93,
            description: "Navigates rapid iterations with precision, keeping teams aligned and shipping fast."
        },
        {
            name: "Stakeholder Management",
            proficiency: 94,
            description: "Builds bridges across teams and hierarchies, turning diverse perspectives into unified vision."
        },
        {
            name: "TypeScript",
            proficiency: 91,
            description: "Writes bulletproof code with type safety, preventing bugs before they happen."
        },
        {
            name: "React.js/Vue.js",
            proficiency: 89,
            description: "Builds lightning-fast interfaces that users love, balancing performance with elegance."
        },
        {
            name: "Machine Learning",
            proficiency: 85,
            description: "Leverages AI to automate decisions and predict outcomes, staying ahead of the curve."
        }
    ],
    certifications: [
        {
            name: "Google Prompting Essentials",
            authority: "Google",
            date: "Aug 2025",
            credentialId: "RPDHUTHFZ5XC",
            skills: ["AI Prompting", "Prompt Chaining"]
        },
        {
            name: "Deep Learning Specialization",
            authority: "Coursera & DeepLearning.AI",
            date: "Dec 2020",
            skills: ["Deep Learning", "Neural Networks", "CNN", "RNN", "TensorFlow"],
        },
        {
            name: "Python for Everybody Specialization",
            authority: "Coursera & University of Michigan",
            date: "May 2020",
            skills: ["Python", "Data Structures", "Web Scraping", "Databases"]
        },
        {
            name: "Sequence Models",
            authority: "Coursera & DeepLearning.AI",
            date: "Dec 2020",
            skills: ["RNN", "LSTM", "NLP"]
        },
        {
            name: "Convolutional Neural Networks",
            authority: "Coursera & DeepLearning.AI",
            date: "Sep 2020",
            skills: ["CNN", "Computer Vision"]
        },
        {
            name: "Applied Plotting, Charting & Data Representation in Python",
            authority: "Coursera & University of Michigan",
            date: "May 2020",
            skills: ["Data Visualization", "Matplotlib"]
        },
        {
            name: "Predictive Modelling with Azure Machine Learning Studio",
            authority: "Coursera Project Network",
            date: "Nov 2020",
            skills: ["Azure ML", "Predictive Modeling"]
        },
        {
            name: "Exploratory Data Analysis with Seaborn",
            authority: "Coursera Project Network",
            date: "Nov 2020",
            skills: ["Seaborn", "EDA"]
        },
        {
            name: "Intro to Time Series Analysis in R",
            authority: "Coursera Project Network",
            date: "Nov 2020",
            skills: ["R", "Time Series"]
        },
        {
            name: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
            authority: "Coursera & Stanford",
            date: "May 2020",
            skills: ["Algorithms", "Data Structures"]
        }
    ],
    publications: [
        {
            title: "Detection of Malaria by Using a CNN Model",
            publisher: "Springer",
            date: "May 2023",
            domain: "Deep Learning",
            description: "Developed a fully automated CNN-based algorithm to identify malaria from blood smear images with 96.39% accuracy, 95% precision, and 98% recall.",
            achievements: [
                "96.39% accuracy with 95% precision and 98% recall",
                "F1 score of 96%",
                "Trained on 27,558 cell images",
                "Outperformed traditional ML algorithms (Ada Boost, Decision Tree, KNN)"
            ]
        },
        {
            title: "An Efficient Bar/QR Code Recognition System for Consumer Service Applications",
            publisher: "IEEE",
            date: "Aug 2020",
            domain: "Image Processing",
            description: "Developed a Python-based bar code and QR code recognition system using OpenCV with 100% accuracy and 0.25-second execution time.",
            achievements: [
                "100% accuracy on large database",
                "0.25 seconds execution time",
                "Real-time image capture and processing",
                "Potential for micro-controller prototyping"
            ]
        }
    ],
    awards: [
        {
            title: "High Roller Award",
            issuer: "Ingenuity Gaming",
            date: "Jun 2022 - Dec 2022",
            description: "1/20 in 500+ members to receive the High Roller Award for outstanding contribution & business impact."
        },
        {
            title: "CAT 2023 - 98.91 Percentile",
            issuer: "IIM",
            date: "Nov 2023",
            description: "Scored 75.20 marks achieving 98.91 percentile. Converted calls from IIM Bangalore (PGP & PGPBA), IIM Calcutta, IIM Lucknow, IIM Indore, IIM Kozhikode, and FMS Delhi."
        },
        {
            title: "National Semi-Finalist - Tata Imagination Challenge 2024",
            issuer: "Tata & Unstop",
            date: "Jan 2025",
            description: "Reached national semi-finals in the student track of Tata Imagination Challenge 2024."
        },
        {
            title: "International Mathematics Olympiad - School Rank 1",
            issuer: "Science Olympiad Foundation",
            date: "Dec 2011",
            description: "Achieved School Rank 1 and International Rank 2060 in the 5th International Mathematics Olympiad. Awarded Gold Medal."
        },
        {
            title: "100% Placement Achievement",
            issuer: "IIIT Bhagalpur",
            date: "May 2021",
            description: "As Training & Placement Cell Coordinator, oversaw 100% placement of 60+ students despite COVID-19. Brought in 62 offers with highest of 30 LPA & average of 8.50 LPA."
        }
    ],
    projects: [
        {
            name: "PIMA Indian Onslaught of Diabetes",
            period: "Jun 2020",
            description: "Built a sequential model to predict diabetes onset within five years using patient medical record data for Pima Indians.",
            technologies: ["Python", "Flask", "HTML", "Machine Learning"],
            achievements: ["Robust predictive model for medical applications"]
        },
        {
            name: "Last Words at Deathbed - PageRank, Spidering, Scraping and Visualizing",
            period: "Dec 2019 - Mar 2020",
            description: "Created a WordCloud visualization of the most common words (length > 5) from last statements of executed offenders. Used web scraping and data analysis techniques.",
            technologies: ["Python", "BeautifulSoup", "SQLite", "Data Visualization"],
            achievements: ["Comprehensive data pipeline from scraping to visualization"]
        }
    ],
    volunteerWork: [
        {
            role: "Volunteer",
            organization: "SMILE Activity Camp",
            period: "Aug 2024",
            cause: "Education",
            description: "Volunteered for Science Project and Mini MBA workshop sessions for 20+ underprivileged students."
        },
        {
            role: "Coordinator of Volunteers",
            organization: "National Service Scheme (NSS)",
            period: "Aug 2017 - Apr 2018",
            cause: "Health",
            description: "NSS Volunteer at IIIT Bhagalpur. Surveyed nearby villages regarding hygienic conditions, interacted with residents to promote health awareness."
        },
        {
            role: "Scout",
            organization: "The Bharat Scouts and Guides",
            period: "Apr 2007 - Apr 2011",
            cause: "Civil Rights and Social Action",
            description: "Indulged in social activities during time at Kendriya Vidyalaya AFS Sarsawa, Saharanpur, UP."
        },
        {
            role: "Training and Placement Cell Coordinator",
            organization: "IIIT Bhagalpur",
            period: "Oct 2019 - May 2021",
            cause: "Career Development",
            description: "1/4 coordinators elected from 67 students. Connected with 35+ companies, coordinated crash courses, refresher sessions, and mock interviews. Achieved 100% placement for 60+ students with 62 offers."
        }
    ]
};
