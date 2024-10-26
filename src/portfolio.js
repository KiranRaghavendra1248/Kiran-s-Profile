/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import laptopAnimation from "./assets/lottie/laptopmap.json";
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kiran Raghavendra",
  title: "Hey there, I'm Kiran",
  subTitle: emoji(
    "A passionate software engineer with a diverse skill set. Proficient in crafting web and mobile apps, backend, AI/ML pipelines and deployment. Delved deep in the field of Natural Language, Computer Vision, Multi Modal AI & Reinforcement Learning"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KG7dQtVzOW_87WPjmX-v0zsXo3RhKx4z/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KiranRaghavendra1248",
  linkedin: "https://www.linkedin.com/in/kiranraghavendra789/",
  gmail: "kraghav1@uci.com",
  medium: "https://medium.com/@kiranraghavendra",
  display: true // Set true to display this section, defaults to false
};


const skillsSection = {
  title: "What I do",
  skills: [
    emoji("⚡ Proficient in crafting mobile and web apps using Flutter, Dart, Express & Node"),
    emoji("⚡ Love Integration of third-party services such as Firebase, AWS, and Redis for enhanced application functionality"),
    emoji("⚡ Experienced in developing and deploying AI and ML solutions for real-world challenges"), 
    emoji("⚡ Love working on problems in Vision, Natural Language and Multi Modal AI"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Irvine",
      logo: require("./assets/images/ucilogo.png"),
      subHeader: "Master in Computer Science",
      duration: "September 2023 - December 2024",
      desc: "Took courses on Operating Systems, Machine Learning and Data Mining, Transaction Processing & Distributed Data Management",
    },
    {
      schoolName: "JSS Science and Technology University",
      logo: require("./assets/images/jssstulogo.png"),
      subHeader: "Bachelor of Engineer in Computer Science",
      duration: "August 2018 - June 2022",
      desc: "Took courses on Data Structures & Algorithms, Database Systems, Computer Architecture, Introduction to Deep Learning Architectures",
      descBullets: ["Best final year project award", "2x Research Publications"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Frameworks(Express, Node, Flask, REST API, gRPC, protobuf, PostgreSQL, MySQL)", 
      progressPercentage: "80%" 
    },
    {
      Stack: "Deep learning and AI(Pytorch, Tensorflow, Generative AI, NLP, Computer Vision)",
      progressPercentage: "95%"
    },
    {
      Stack: "Data Science(A/B testing, EDA, Feature Engineering, Numpy, Pandas, Scikit-learn)",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming(C/C++, Python, Javascript, Dart)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "ESRI",
      companylogo: require("./assets/images/esrilogo.png"),
      date: "June 2024 – Present",
      descBullets: [
        "Worked on semantic search and intent classification for AI Assistant, developing key features and addressing production bugs.",
        "Preprocessed, cleaned, and extracted text data using regex and NLP techniques with Pandas, Numpy, and NLTK.",
        "Created platform for online and offline eval of search system. Automated eval suite using Jenkins, used Docker containers for scalability and deployed on AWS EC2.",
        "Proposed CTR based metrics for online eval and LLM as judge with few-shot & chain-of-thought prompting for offline eval.",
        "Researched approaches to reduce bias in semantic search by hard debiasing vectors, improving search metrics"
      ]
    },
    {
      role: "Embedded Software Engineer",
      company: "Western Digital",
      companylogo: require("./assets/images/wdlogo.jpeg"),
      date: "June. 2022 – Aug. 2023",
      descBullets: [
        "Spearheaded development of features for read error handling, cvd caching, time tag allocation and update in C.",
        "Designed validation strategies and end-to-end feature validation tests in Python, leading to a 14% increase in firmware reliability.",
        "Developed bash shell scripts to automate routine tasks on Linux distributions and addressed production bugs."
      ] 
    },
    {
      role: "Embedded Software Engineer Intern",
      company: "Western Digital",
      companylogo: require("./assets/images/wdlogo.jpeg"),
      date: "June. 2022 – Aug. 2023",
      descBullets: [
        "Created a log extraction tool, with RESTful APIs for backend using Node & Express, and front-end using React, resulting in a 28% reduction in bug burndown time. Used docker containers for scalability and deployed on AWS.",
        "Addressed production bugs and maintained legacy code for UFS protocol read/write, memory map, unmap and power mode features according to project requirements."
      ] 
    },
    {
      role: "Undergraduate Researcher",
      company: "Dept of Computer Science, JSS Science and Technology University",
      companylogo: require("./assets/images/jss_logo.png"),
      date: "June 2021 – Dec. 2021",
      descBullets: [
        "Developed novel application for sign language recognition using Tensorflow and Streamlit, deployed on AWS EC2.",
        "Researched SOTA techniques for Sign Language Recognition. Preprocessed video frames using OpenCV.",
        "Trained Graph-CNN and Separable Spatial Temporal CNN on RGB & RGB-depth data with added facial key points resulting in 91% top1 accuracy on AUTSL multi modal dataset."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Startup Ideas",
  projects: [
    {
      image: require("./assets/images/Rideshare copy.png"),
      projectName: "Ride Share",
      projectDesc: "A true carpooling Android & IOS application using which users can upload their journeys beforehand & passengers can find & request rides in real time from users traveling headed on the same route.",
      footerLink: [
        {
          name: "Watch Demo",
          url: "https://www.youtube.com/watch?v=k5ItUC8abTU"
        },
        {
          name: "Elevator Pitch",
          url: "https://www.youtube.com/watch?v=iYpgXT08ksk"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  result: [
    "https://drive.google.com/file/d/1aWvGbW0eQaooRgsAQdYb8C1Gd0mMmCxe/view?usp=drive_link"
  ],
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Hit me up!!",
  number: "+1 7149717414",
  email_address: "kraghav1@uci.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
