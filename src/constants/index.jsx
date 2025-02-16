import academix from '../assets/academix.png'
import Employee from '../assets/Employee-management.png'
import color from '../assets/colorAnalyser.png'
import classEase from '../assets/classEase.png'

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Jayathu Sankalpa Munasinghe",
  role: "Undergraduate",
  subheading:
  "Third-year Software Engineering undergraduate with hands-on experience in full-stack web development."+
  "Passionate about building scalable applications and collaborating in team environments to deliver high-quality solutions."+
  "Seeking an opportunity to contribute and grow in a dynamic software development role."
};

export const PROJECTS = [
  {
    id: 1,
    title: "Academix- Online Educational Platform",
    description:
    "This is an individual project where I’m developing an online learning platform using the MERN stack and Docker."+
    " Implements microservices architecture for course management, user authentication, and payment processing." ,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Docker","Tailwind css"],
    imgSrc:academix,
    // link: "https://example-ecommerce.com",
  },
  {
    id: 2,
    title: "ClassEase - Class Management System",
    description:
      "This is an individual project that I developed using the MERN stack with JWT-based role-based access control."+ 
      "Supports three access levels: Admin, Faculty Member, and Student."+ 
      "Admins manage faculty, students, courses, and timetables while ensuring no scheduling conflicts."+ 
      "Faculty and students can log in to access their respective accounts and timetables.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: classEase,
    // link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
    "This is a project that I developed as a part of the Second year First semester group project for an Online Ecommerce System using the MERN stack,"+
    "implementing role-based access control with Express sessions"+
    "Supports two access levels as Admin and Employee."+ 
    "Developed a dynamic salary calculation feature and automated PDF report generation.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: Employee,
    // link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "Image Processing System",
    description:
    "This is an individual project developed using the MERN stack and Sharp library where users upload images of waste water,"+ 
    "and the system calculates the required chemical percentage  to purify the waste water.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: color,
    // link: "https://example-blogplatform.com",
  }
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Docker",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Stanford University",
    duration: "2012 - 2016",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Master of Science in Software Engineering",
    institution: "MIT",
    duration: "2016 - 2018",
    description:
      "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2019",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];
