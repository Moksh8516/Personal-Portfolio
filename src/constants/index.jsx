import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpg";
import projectImage2 from "../assets/project2.jpg";
import projectImage3 from "../assets/project3.jpg";
import projectImage4 from "../assets/project4.jpg";
import projectImage5 from "../assets/project5.jpg";
import projectImage6 from "../assets/project6.jpg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "MOKSH",
  greet: "Hello there! 👋🏻",
  description:
    " Passionate recent Post graduate adept at crafting visually appealing websites. Eager to utilize HTML, CSS,JavaScript and React skills to excel as a Web Developer.Seeking entry-level position to expand expertise, collaborate with professionals, and contribute to innovative web projects",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Moksh8516/Personal-Portfolio.git",
  },
  {
    id: 2,
    name: "Multistore website",
    description:
      "An e-commerce web application developed using React.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/Moksh8516/Multistore-website-Frontend.git",
  },
  {
    id: 3,
    name: "Todo-List",
    description:
      "A Todo-List application built with React for using store daily records.",
    image: projectImage3,
    githubLink: "https://github.com/Moksh8516/Todo-List.git",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with Html, css, js and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/Moksh8516/WeatherApi.git",
  },
  {
    id: 5,
    name: "Password Generator",
    description:
      "A password generator app built with React and styled using Tailwind CSS. It generates secure, customizable passwords instantly, offering flexibility in length and character selection.",
    image: projectImage5,
    githubLink: "https://github.com/Moksh8516/Password-Generator.git",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Moksh studed in M.Sc. in Information Technology from Punjabi University, complemented by a B.A. and certifications in React.js (KG Coding) and Tailwind CSS (Udemy). Additionally, I have completed a 6-month internship at Solitaire Infosys Pvt. Ltd., focusing on MERN Stack development. I possess hands-on experience in React, Redux Toolkit, Node.js, and REST APIs, and I have worked on several projects, including e-commerce platforms, a quote generator, and a password generator.",

  "With six months of experience in web development, I am proficient in HTML, CSS, JavaScript, MongoDB, and Tailwind CSS. My skills also extend to tools such as Git, Postman, and Redux DevTools. I am passionate about building visually appealing websites and am eager to continue growing my expertise as a web developer.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "6+ Months",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "6+ Months",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "6+ Months",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "6+ Months",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "6+ Months",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-600 lg:text-5xl" />,
    name: "REST API's",
    experience: "6+ Months",
  },
];

export const EXPERIENCES = [
  {
    title: "MERN Stack Developer Intern",
    company: "Solitaire Infosys Pvt Ltd",
    duration: "April 2024 - Present",
    description:
      "As the Mern stack Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and javascript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Information Technology",
    institution: "Punjabi University",
    duration: " August 2022 - June 2024",
    description:
      "Focused on web development, programming languages, and database management. where I developed several web applications using HTML, CSS, JavaScript, and React. Completed a senior project on developing an e-commerce platform.",
  },
  {
    degree: "Bachelor of Arts",
    institution: "Punjabi University",
    duration: "September 2017 - June 2021",
    description:
      "During my B.A. studies, I actively participated in cricket, honing my teamwork and leadership skills. I also had a keen interest in tour and travel as a subject, which fueled my passion for exploring new places and understanding different cultures.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://www.instagram.com/moksh7666/profilecard/?igsh=MzJnMW5mbzM2a251 ",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/Moksh8516",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/moksh-moksh-26a2432b3",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
