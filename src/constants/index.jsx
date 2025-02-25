import academix from '../assets/academix.png'
import Employee from '../assets/Employee-management.png'
import color from '../assets/colorAnalyzer.png'
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
import { FaDocker } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certification", href: "#certification" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Jayathu Sankalpa Munasinghe",
  role: "Undergraduate",
  subheading:
    "Third-year Software Engineering undergraduate with hands-on experience in full-stack web development." +
    "Passionate about building scalable applications and collaborating in team environments to deliver high-quality solutions." +
    "Seeking an opportunity to contribute and grow in a dynamic software development role."
};

export const PROJECTS = [
  {
    id: 1,
    title: "Academix- Online Educational Platform",
    description:
      "This is an individual project where I’m developing an online learning platform using the MERN stack and Docker." +
      " Implements microservices architecture for course management, user authentication, and payment processing.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Docker", "Tailwind css"],
    imgSrc: academix,
    link: "https://github.com/Munasinghe123/Academix-Online-Education-Platform",
  },
  {
    id: 2,
    title: "ClassEase - Class Management System",
    description:
      "This is an individual project that I developed using the MERN stack with JWT-based role-based access control." +
      "Supports three access levels: Admin, Faculty Member, and Student." +
      "Admins manage faculty, students, courses, and timetables while ensuring no scheduling conflicts." +
      "Faculty and students can log in to access their respective accounts and timetables.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: classEase,
    link: "https://github.com/Munasinghe123/classEase",
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "This is a project that I developed as a part of the Second year First semester group project for an Online Ecommerce System using the MERN stack," +
      "implementing role-based access control with Express sessions" +
      "Supports two access levels as Admin and Employee." +
      "Developed a dynamic salary calculation feature and automated PDF report generation.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: Employee,
    link: "https://github.com/Munasinghe123/Employee-management-system",
  },
  {
    id: 4,
    title: "Color Analyzer-Image Processing System",
    description:
      "This is an individual project developed using the MERN stack and Sharp library where users upload images of waste water," +
      "and the system calculates the required chemical percentage  to purify the waste water.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: color,
    link: "https://github.com/Munasinghe123/ColorAnalyzer",
  }
];

export const SKILLS = [

  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500 w-10 h-10" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400 w-10 h-10" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 w-10 h-10" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-green-600 w-10 h-10" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 w-10 h-10" />,
  },
  {
    name: "Tailwind CSS",
    icon: < SiTailwindcss className="text-teal-400 w-10 h-10" />,
  },
  {
    name: "Docker",
    icon: <FaDocker className='text-blue-600 w-10 h-10' />
  },
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600 w-10 h-10" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500 w-10 h-10" />,
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "BSc (Hons) in Information Technology Specialising in Software Engineering ",
    institution: "SLIIT",
    duration: "2022- Present",
    results: "CGPA - 3.34"
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level (2021) - Arts Stream",
    institution: "Bandaranayake College Gampaha ",
    duration: "2017 - 2019",
    results: "Results - Information and Communication Technology - C \n Geography - A \n History - C\n General English - A\n Z-Score : 1.1920"
  },
  {
    id: 3,
    degree: "G.C.E. Ordinary Level (2016) - English Medium",
    institution: "Thakshila College Gampaha (2015-2016)",
    duration: "2015-2016",
    results:
      "Results - 8 A s including Information and Communication Technology  and 1 C ",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "MERN 2025 Edition - MongoDB, Express, React and NodeJS",
    institution: "Udemy",
  },
  {
    id: 2,
    name: "Introduction to SQL",
    institution: "Solo learn",
  },
  {
    id: 3,
    name: "Introduction to Java",
    institution: "Solo learn",
  },
  {
    id: 4,
    name: "Introduction to JavaScript",
    institution: "Solo learn",
  },
  {
    id: 5,
    name: "Java Intermediate",
    institution: "Solo learn",
  },
  {
    id: 6,
    name: "JavaScript Intermediate",
    institution: "Solo learn",
  },
  {
    id: 7,
    name: "SQL Intermediate",
    institution: "Solo learn",
  }
]
