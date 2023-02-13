import screenshot1 from '../assets/Screenshot1.png'
import screenshotBookeroo from '../assets/Screenshot_Bookeroo.png'

import react from '../assets/icons/react.svg'
import nodejs from '../assets/icons/nodejs.svg'
import materialUi from '../assets/icons/materialUi.svg'
import sequelize from '../assets/icons/sequelize.svg'
import circleci from '../assets/icons/circleci.svg'
import figma from '../assets/icons/figma.svg'
import jest from '../assets/icons/jest.svg'
import springboot from '../assets/icons/springboot.svg'
import docker from '../assets/icons/docker.svg'

export const projects = [
  {
    id: 0,
    img: screenshot1,
    title: 'Blogging Website',
    description:
      'Blogging website with similar features as Medium.com. Commenting below blogs for registered users with reactions and reply options close to Reddit.com',
    technologies: [react, nodejs, materialUi, sequelize],
    demo: 'https://rmit-fwp-assignment-production.up.railway.app/',
    github: 'https://github.com/Mor1209/rmit-fwp-assignment',
  },
  {
    id: 1,
    img: screenshotBookeroo,
    title: 'Library Managment System',
    description: `Team Project completed with four people.
      Customers can rent books online, while staff can keep track of borrowed books.
      Project hosted on AWS with CI/CD pipeline and 80% coverage with unit and integration tests.`,
    technologies: [react, springboot, docker, circleci, jest, figma],
    github: 'https://github.com/Mor1209/sept-group-assignment',
  },
]
