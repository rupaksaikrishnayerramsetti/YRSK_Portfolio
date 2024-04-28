// import html from "../images/Skills/";

export const Bio = {
  name: "Yerramsetti R Sai Krishna",
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Python Programmer",
  ],
  description:
    "I am a motivated individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/rupaksaikrishnayerramsetti/",
  resume: "https://drive.google.com/file/d/1kmc6fsH9Tj3dKwDFz--i7N7UCY3jxj99/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
  insta: "https://www.instagram.com/rupaksaiyerramsetti/",
  facebook: "https://www.facebook.com/rupaksai.yerramsetti",
};

export const mainSkills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "reactjs.png",
      },
      {
        name: "Typescript",
        image:
          "typescript.png",
      },
      {
        name: "Redux Toolkit",
        image:
          "reduxtoolkit.jpg",
      },
      {
        name: "HTML",
        image: "html.jpg",
      },
      {
        name: "CSS",
        image:
          "css.png",
      },
      {
        name: "JavaScript",
        image:
          "js.jpg",
      },
      {
        name: "Material UI",
        image:
          "mui.png",
      },
      {
        name: "Angular",
        image:
          "angular.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "nodejs.png",
      },
      {
        name: "Express Js",
        image:
          "expressjs.png",
      },
      {
        name: "Codeiginator",
        image: "codeiginator.png",
      },
      {
        name: "golang",
        image:
          "golang.jpg",
      },
      {
        name: "ASP.NET",
        image: "asp.net.jpg",
      },
      {
        name: "Spring Boot",
        image:
          "springboot.png",
      },
      {
        name: "MySQL",
        image:
          "mysql.png",
      },
      {
        name: "Postgresql",
        image: "postgresql.png",
      },
      {
        name: "MongoDB",
        image:
          "mongodb.png",
      },
    ],
  }, 
  {
    title: "Others",
    skills: [
      {
        name: "Python",
        image:
          "python.png",
      },
      {
        name: "Machine Learning",
        image:
          "machinelearning.jpg",
      },
      {
        name: "Git",
        image:
          "git.png",
      },
      {
        name: "GitHub",
        image:
          "github.png",
      },
      {
        name: "Postman",
        image:
          "postman.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: "blackbuck.jpg",
    role: "Mentorship Intern",
    company: "Blackbuck Engineers Pvt. Ltd, Hyderabad",
    date: "4 months",
    desc: "My job is to help final-year students to finish their final year machine learning projects in a month. I work with ten batches of students, each of which consists three members each.",
    skills: [
      "Leadership",
      "Mentoring",
      "Machine Learning",
    ],
  },
  {
    id: 2,
    img: "sureify.jpg",
    role: "Software Development Engineer",
    company: "Sureify Labs Technology Pvt Ltd, Hyderabad",
    date: "Feb 2023 - Mar 2024",
    desc: "As a Full Stack Developer I used to work on 3 main products with different technology background. I used to work on writing Migrations, Develop API, Solving the Bugs, and develop Reusable UI components as per the Task assigned to me in the jira ticket. I found a potential/critical bug which was found and solved by myself and got an appriciation from my product manager. Apart from that I had done a Upskilling end to end project which got reviewed and appriciation from 2 of my porduct managers.",
    skills: [
      "React Js",
      "Typescript",
      "Redux toolkit",
      "Node Js",
      "Express Js",
      "Codeiginator",
      "Golang",
      "ASP.NET",
      "Spring Boot",
      "My Sql",
      "MongoDB",
      "Angular",
      "git"
    ],
  }
];

export const education = [
  {
    id: 0,
    img: "srkr.jpg",
    school: "Sagi Rama Krishnam Raju Engineering College, Bhimavaram",
    date: "Aug 2019 - May 2023",
    cgpa: "8.25",
    desc: "I am a 2023 and Computer Science and Engineering graduate from SRKR Engineering College, Bhimavaram. I have completed btech having a CGPA of 8.25. I have studied different computer science courses like Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks..etc. I am even good at coding and even maintained good coding profiles in different coding platforms like Hackerrank, Leetcode, and Geeks for Geeks Practice.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "srichaitanya.jpg",
    school: "Sri Chaitanya jr college, Vijayawada, Andhra Pradesh",
    date: "June 2017 - Apr 2019",
    cgpa: "9.88",
    desc: "I completed my Intermediate education at Sri Chaitanya jr college, Vijayawada, where I studied MPC(Maths-Physics-Chemistry",
    degree: "State of Intermediate, MPC",
  },
  {
    id: 2,
    img: "bvb.jpg",
    school: "Bharatiya Vidya Bhavan's ,Pedatadepalli, Andhra Pradesh",
    date: "Apr 2017",
    cgpa: "10",
    desc: "I completed my class 10 education at Bharatiya Vidya Bhavan's School, Pedatadepalli, Andhra Pradesh.",
    degree: "CBSE Xth",
  },
];

export const projects = [
  {
    id: 0,
    title: "KEAOP",
    date: "Sep 2023 - Oct 2023",
    description:
      `The project KEAOP stands for Keep Everything at one place. It is a full-stack web application developed as a upskilling project. This project got reviewed by 2 product managers and got appreciation from them. The key features of this project is When the User initially Sign up a new password is generated, and credentials are sent to the user's mail if there is any change in the password the new credentials are also sent to the user's mail as Updated credentials.
      We can create notes and Alerts on this website where if an alert is created mail is sent with the user's mail with the Google Calendar remainder integration and if there is any update mail in the alert then a new mail with new Google Calendar updated details are sent.
      For security data communication JWT token is utilized.
      The Spent Analysis feature is automatically handled for the change in a month and fetches the current month's spent with a pie chat representation for the spent. we can add different scents which will be automatically changed in both table and pie chat.
      This is a dynamic and responsive website for laptop and mobile applications.`,
    image:
      "keaop.jpg",
    tags: ["React Js", "TypeScript", "Mysql", "Codeiginator"],
    category: "web app",
    github: "https://github.com/rupaksaikrishnayerramsetti/KEAOP",
    member: [
      {
        name: "Yerramsetti R Sai Krishna",
        img: "https://avatars.githubusercontent.com/u/65356848?v=4",
        linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
        github: "https://github.com/rupaksaikrishnayerramsetti",
      },
    ],
  },
  {
    id: 1,
    title: "KEAOP MERN Stack",
    date: "Feb 2024 - Feb 2024",
    description:
      `This is the upgraded version of KEAOP project done as part of the upskilling project in my previous company. This project is now implemented in the MERN Stack with additionally Typescript for the frontend.
      This is the drive link for the video recording of the manager-level conference
       https://drive.google.com/file/d/1m057PIbYRWv1lx4JcNPfpgB-7YN-i0_U/view?usp=drive_link
      The key features implemented in it are
      When the User initially Sign up a new password is generated, and credentials are sent to the user's mail if there is any change in the password the new credentials are also sent to the user's mail as Updated credentials.
      We can create notes and Alerts on this website where if an alert is created mail is sent with the user's mail with the Google Calendar remainder integration and if there is any update mail in the alert then a new mail with new Google Calendar updated details are sent.
      For security data communication JWT token is utilized.
      The Spent Analysis feature is automatically handled for the change in a month and fetches the current month's spent with a pie chat representation for the spent. we can add different scents which will be automatically changed in both table and pie chat. And able to download the record of the spents page as a pdf.
      This is a dynamic and responsive website for laptop and mobile applications.`,
    image:
      "keaop.jpg",
    tags: ["React Js", "TypeScript", "MongoDB", "Node Js", "Express Js"],
    category: "web app",
    github: "https://github.com/rupaksaikrishnayerramsetti/KEAOP_MERN",
    member: [
      {
        name: "Yerramsetti R Sai Krishna",
        img: "https://avatars.githubusercontent.com/u/65356848?v=4",
        linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
        github: "https://github.com/rupaksaikrishnayerramsetti",
      },
    ],
  },
  {
    id: 2,
    title: "KEAOP using ASP.NET",
    date: "Jan 2024 - Feb 2024",
    description:
      `Implementation of the Keep Everything at One Place project Backend using ASP.NET WEB API. 
      This is the drive link for the video recording of the manager-level conference. 
      https://drive.google.com/file/d/1m057PIbYRWv1lx4JcNPfpgB-7YN-i0_U/view?usp=drive_link
      Backend :- ASP.NET web api
      Database :- MySQL`,
    image:
      "keaop.jpg",
    tags: ["React Js", "TypeScript", "Mysql", "ASP.NET"],
    category: "web app",
    github: "https://github.com/rupaksaikrishnayerramsetti/KEOPBackend",
    member: [
      {
        name: "Yerramsetti R Sai Krishna",
        img: "https://avatars.githubusercontent.com/u/65356848?v=4",
        linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
        github: "https://github.com/rupaksaikrishnayerramsetti",
      },
    ],
  },
  {
    id: 3,
    title: "KEAOP using Spring Boot",
    date: "Feb 2024 - Mar 2024",
    description:
      `Implementation of the Keep Everything at One Place project Backend using Spring Boot. 
      This is the drive link for the video recording of the manager-level conference. 
      https://drive.google.com/file/d/1m057PIbYRWv1lx4JcNPfpgB-7YN-i0_U/view?usp=drive_link
      Backend :- Spring Boot 
      Database :- MongoDB`,
    image:
      "keaop.jpg",
    tags: ["React Js", "TypeScript", "Mysql", "ASP.NET"],
    category: "web app",
    github: "https://github.com/rupaksaikrishnayerramsetti/KEAOP_SpringBoot",
    member: [
      {
        name: "Yerramsetti R Sai Krishna",
        img: "https://avatars.githubusercontent.com/u/65356848?v=4",
        linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
        github: "https://github.com/rupaksaikrishnayerramsetti",
      },
    ],
  },
  {
    id: 4,
    title: "Auto Email sender",
    date: "Mar 2024 - Mar 2024",
    description:
      `The Project Auto Email Sender is developed to read the file 
      which cotains the data about the companies which includes all
      the data about company like comany name, phone number, email, 
      carrer/website, description..etc. In which I extracted emails 
      from the file which divided into the 3 files which contains 
      350 mails in each file and there is a tracker file which keep 
      tack of each and every file sent. I maintained a email template 
      with the resume pdf with the sending email for each and every 5
      seconds.
      `,
    image:
      "autoemail.png",
    tags: ["Node Js", "Express Js"],
    category: "web app",
    github: "https://github.com/rupaksaikrishnayerramsetti/AutoJobMailSending",
    member: [
      {
        name: "Yerramsetti R Sai Krishna",
        img: "https://avatars.githubusercontent.com/u/65356848?v=4",
        linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
        github: "https://github.com/rupaksaikrishnayerramsetti",
      },
    ],
  },
  {
    id: 4,
    title: "Role Employee Management System",
    date: "1 day",
    description:
      `
      The project Role Employee Management System mainly done in the view of completing a hiring task for 
      one of the hiring company in just one day. The Task is to develop a Role Employee Management System 
      for Developing a RESTful API using Node.js and Express.js to manage roles and employees in a database.
      `,
    image:
      "role-emp.png",
    tags: ["Node Js", "Express Js", "MongoDB"],
    category: "web app",
    github: "https://github.com/rupaksaikrishnayerramsetti/AutoJobMailSending",
    member: [
      {
        name: "Yerramsetti R Sai Krishna",
        img: "https://avatars.githubusercontent.com/u/65356848?v=4",
        linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
        github: "https://github.com/rupaksaikrishnayerramsetti",
      },
    ],
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    date: "Apr 2024 - Apr 2024",
    description:
      `
      This is my personal web site to showcase my skills, Project, Experience, Education and contact.
      This web site will act as a symbol for my skills in development of Fronend Application and deployment.
      `,
    image:
      "yrsk.png",
    tags: ["React Js"],
    category: "web app",
    github: "https://github.com/rupaksaikrishnayerramsetti/",
    member: [
      {
        name: "Yerramsetti R Sai Krishna",
        img: "https://avatars.githubusercontent.com/u/65356848?v=4",
        linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
        github: "https://github.com/rupaksaikrishnayerramsetti",
      },
    ],
  },
  {
    id: 10,
    title: "Acquire-clone",
    date: "May 2023 - June 2023",
    description:
      "It is a full-stack web application and is a protype version of a main product that allows users to fill the form keeps the abondant flow utilized session to keep track of data & persist the current page data, Can able to Navigate through different sections, sub-sections or breadcrumps, Displaying review page to view complete response and given an option to edit the data in any section, abdantent flow check with the phone number which makes users to continue the form where they have stop or closed before submitting it, An email service to make user to get confirmation of successfull data submition.",
    image:
      "acquire.png",
    tags: ["React Js", "Mysql", "Codeiginator", "Jest(unit testing)"],
    category: "web app",
    github: "https://github.com/",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Yerramsetti R Sai Krishna",
        img: "https://avatars.githubusercontent.com/u/65356848?v=4",
        linkedin: "https://www.linkedin.com/in/yerramsettirsaikrishna/",
        github: "https://github.com/rupaksaikrishnayerramsetti",
      },
      {
        name: "P Bharath",
      },
      {
        name: "T Varun",
      },
      {
        name: "P Tejasree",
        gender: "female"
      },
      {
        name: "P Bala Chandu prakesh"
      }
    ],
  },
];
