import screenshot1 from '../assets/Screenshot1.png'
import screenshotBookeroo from '../assets/Screenshot_Bookeroo.png'
import screenshotMessenger from '../assets/Screenshot_Messenger.png'
import screenshotPortfolio from '../assets/Screenshot_Portfolio.png'

import react from '../assets/icons/react.svg'
import nodejs from '../assets/icons/nodejs.svg'
import materialUi from '../assets/icons/materialUi.svg'
import sequelize from '../assets/icons/sequelize.svg'
import circleci from '../assets/icons/circleci.svg'
import figma from '../assets/icons/figma.svg'
import jest from '../assets/icons/jest.svg'
import springboot from '../assets/icons/springboot.svg'
import docker from '../assets/icons/docker.svg'
import next from '../assets/icons/next.svg'
import prisma from '../assets/icons/prisma.svg'
import graphql from '../assets/icons/graphql.svg'
import apollo from '../assets/icons/apollo.svg'
import tailwindcss from '../assets/icons/tailwindcss.svg'
import vite from '../assets/icons/vite.svg'

export const projects = [
  {
    id: 0,
    img: screenshotMessenger,
    title: 'Messenger',
    description: `This is a real time chatting application, which works over websockets. Users can signup with google and create conversations with one and another and even group chats with multiple people. All conversations can be edited so that people can be added or removed to chats`,
    technologies: [next, prisma, graphql, apollo, tailwindcss, nodejs],
    demo: 'https://messenger-production-4620.up.railway.app/',
    github: 'https://github.com/Mor1209/messenger',
  },
  {
    id: 1,
    img: screenshot1,
    title: 'Blogging Website',
    description:
      'Blogging website with user profile creation and update functionality. Offers creation of blogs inside the browser with image embedding and text formatting options. Commenting on blogs with reactions and reply functionality',
    technologies: [react, nodejs, materialUi, sequelize],
    demo: 'https://blogging-app-flax.vercel.app',
    github: 'https://github.com/Mor1209/rmit-fwp-assignment',
  },
  {
    id: 2,
    img: screenshotPortfolio,
    title: 'Portfolio Website',
    description:
      'Portfolio website with my most interesting projects, which includes my resume, a contact form and some animations',
    technologies: [react, tailwindcss, vite],
    demo: 'https://moritz.vercel.app/',
    github: 'https://github.com/Mor1209/Portfolio',
  },
  {
    id: 3,
    img: screenshotBookeroo,
    title: 'Library Managment System',
    description: `Led a team of four in utilizing Scrum, Agile, and Git Flow best practices for project management on Jira and GitHub.
      Customers can rent books online, while staff can keep track of borrowed books.
      Project is hosted on AWS with CI/CD pipeline and 80% coverage with unit and integration tests.`,
    technologies: [react, springboot, docker, circleci, jest, figma],
    github: 'https://github.com/Mor1209/sept-group-assignment',
  },
]
