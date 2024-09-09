import p1 from '@/public/p1.png'
import p2 from '@/public/p2.png'
import p3 from '@/public/p3.png'
import exp1 from '@/public/exp1.svg'
import exp2 from '@/public/exp2.svg'
import exp3 from '@/public/exp3.svg'
import exp4 from '@/public/exp4.svg'
import re from '@/public/re.svg'
import router from '@/public/react-router-svgrepo-com.svg'
import redux from '@/public/redux.svg'
import css from '@/public/css.svg'
import html from '@/public/html.svg'
import git from '@/public/git.svg'
import js from '@/public/js.svg'
import tail from '@/public/tail.svg'
import twit from '@/public/twit.svg'
import link from '@/public/link.svg'
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: p3,
      iconLists: [re,redux,router ,tail],
      href:"/Lilylan.com",
      link: "https://quiet-peony-8add6d.netlify.app/",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: p2,
      iconLists: [re,router,css],
      href:"/gomycode.com",
      link: "https://cerulean-moonbeam-a15caa.netlify.app/",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: p1,
      iconLists:[html,css,js],
      href:"/QuizGame.com",
      link: "https://reliable-tiramisu-56585f.netlify.app/",
    },
   
  ];
  export const workExperience = [
    {
      id: 1,
    title: "GOMYCODE Web Development Course",
    desc: "Attended a comprehensive web development course at GOMYCODE, gaining hands-on experience with various technologies.",
     className: "md:col-span-2",
      thumbnail: exp1,
    },
    {
      id: 2,
    title: "Computer Science Student at USTHB",
    desc: "Currently pursuing a Computer Science degree at USTHB, deepening my understanding of programming principles and computer systems.",
    className: "md:col-span-2", 
      thumbnail: exp2,
    },
    {
      id: 3,
      title: "Personal Web Development Projects",
      desc: "Actively working on personal web development projects to enhance my skills and explore different technologies.",
      className: "md:col-span-2", 
      thumbnail: exp3,
    },
    {
      id: 4,
    title: "Ongoing Learning and Development",
    desc: "Continuously expanding my knowledge through online courses, tutorials, and community engagement.",
      className: "md:col-span-2",
      thumbnail: exp4,
    },
  ];
  export const socialMedia = [
    {
      id: 1,
      img: git,
    },
    {
      id: 2,
      img: twit,
    },
    {
      id: 3,
      img: link,
    },
  ];