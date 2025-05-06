/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Kyle Lohrberg",
  title: "Hi all, I'm Kyle",
  subTitle: emoji(
    "An aspiring junior developer focused on back-end technologies like Java and Spring Boot. I love solving logic problems, writing clean code, and being a dependable teammate—someone who communicates clearly and follows through on their work."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1g_wuC_zvjN23f0N_Tjk0uSOrhgKNqM_auukVTfy2kQQ/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lorbs32",
  linkedin: "https://www.linkedin.com/in/kylelohrberg/",
  gmail: "lorbs32@gmail.com",
  leetcode: "https://leetcode.com/u/lorbs32/",
  facebook: "https://www.facebook.com/kyle.lohrberg",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "I have experience with",
  subTitle: "",
  skills: [
    emoji("⚡ Building and maintaining Spring Boot applications with Java"),
    emoji(
      "⚡ Writing clean, maintainable code using MVC architecture and layered service design"
    ),
    emoji(
      "⚡ Designing RESTful APIs and connecting services to MySQL or H2 databases"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery also simpleicons.org for svg icons
can upload manual icons in src/components/softwareSkills.js */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fa fa-leaf"
    },
    // {
    //   skillName: "Spring Boot",
    //   fontAwesomeClassname: "fa fa-cogs"
    // },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Washtenaw Community College",
      logo: require("./assets/images/wcc.png"),
      subHeader: "Associates of Computer Science in Programming in Java",
      duration: "April 2025",
      desc: "Hands-on coursework in Java, Spring Boot, Android development, and relational databases.",
      descBullets: [
        "Built full-stack projects with clean architecture and version control",
        "Gained experience with REST APIs, MVC design, and backend logic"
      ]
    },
    {
      schoolName: "Western Michigan University",
      logo: require("./assets/images/wmu.png"),
      subHeader: "Bachelor of Science in Exercise Science",
      duration: "April 2018",
      desc: "Built strong foundations in communication, discipline, and collaboration through years of client-based training work.",
      descBullets: [
        "Worked as a personal trainer during and after school, strengthening one-on-one coaching and reliability",
        "Experience from this degree shaped my soft skills now used in software teamwork"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java/Spring Framework", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Github & Documentation",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend JS & HTML",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fitness Specialist",
      company: "Power Wellness",
      companylogo: require("./assets/images/powerwellness.jpg"),
      date: "Nov 2020 – Present",
      desc: "",
      descBullets: [
        "Instruct all types of clients one-on-one with exercise and nutrition advice",
        "Diligently stay organized to keep track of 40+ participants at one time"
      ]
    },
    {
      role: "Store Associate",
      company: "ALDI",
      companylogo: require("./assets/images/aldi.jpg"),
      date: "July 2020 – Nov 2020",
      desc: "",
      descBullets: [
        "Used POS systems to quickly and accurately complete customer purchases while handling multiple types of payment methods",
        "Stocked and maintained store inventory while also maintaining store cleanliness according to strict store policies"
      ]
    },
    {
      role: "Personal Trainer",
      company: "West Hills Athletic Club",
      companylogo: require("./assets/images/westhills.jpg"),
      date: "Oct 2018 – May 2019",
      desc: "",
      descBullets: [
        "Conducted personal assessments, one-on-one and small group training for members",
        "Created celebratory social media posts to cheer on my clients"
      ]
    },
    {
      role: "Health Fitness Specialist",
      company: "Corporate Fitness Works",
      companylogo: require("./assets/images/corporatefitnessworks.jpg"),
      date: "May 2018 – Oct 2018",
      desc: "",
      descBullets: [
        "Worked as a part of a team to create, implement and execute health and fitness programs site wide",
        "Performed a variety of personal training roles including, assessments, one-on-one and small group training of clients on site"
      ]
    },
    {
      role: "Fitness Staff",
      company: "Bronson Athletic Club",
      companylogo: require("./assets/images/bronson.webp"),
      date: "Aug 2014 – Jan 2018",
      desc: "",
      descBullets: [
        "Maintained and supervised the fitness floor while building member relationships and monitoring safety",
        "Guided and educated new members on program offerings and fitness equipment orientations"
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Skills Showcase",
  subtitle:
    "Here are a few major projects I've worked on. Click to explore documentation, demos, or code.",
  projects: [
    {
      //image: require("./assets/images/showMeTheMoney.png"),
      projectName: "Java",
      projectDesc:
        "Solid foundation in object-oriented programming with Java. Experience with backend logic, data structures, and Spring integration.",
      footerLink: [
        {
          name: "Visit Java Project",
          url: "https://github.com/Lorbs32/Budget-Application"
        },
        {
          name: "Documentation",
          url: "https://github.com/Lorbs32/Budget-Application/wiki"
        },
        {
          name: "Demo Video",
          url: "https://youtu.be/your-demo-video-link"
        },
        {
          name: "View Code Snippet",
          url: "https://youtu.be/your-demo-video-link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
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
