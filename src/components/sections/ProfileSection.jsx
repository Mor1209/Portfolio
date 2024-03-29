import React, { useEffect } from 'react'
import profilePicture from '../../assets/PassportPicNeiyo.jpg'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../SocialIcons'
import SocialLink from '../SocialLink'
import { useNav } from '../../hooks/useNav'
import { m, AnimatePresence, useInView, useAnimation } from 'framer-motion'
import SectionContainer from '../SectionContainer'

const ProfileSection = () => {
  return (
    <SectionContainer id='profile'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12'>
        <div className='flex max-w-xs px-2.5 justify-self-center lg:justify-self-end'>
          <img
            src={profilePicture}
            alt=''
            sizes='(min-width: 1024px) 32rem, 20rem'
            className='aspect-auto rotate-3 rounded-2xl text-zinc-800 dark:text-zinc-100 object-cover dark:bg-zinc-800'
          />
        </div>

        <div className='lg:order-first lg:row-span-2 justify-self-end'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            Who am I ?
          </h1>
          <p className='text-[18px] text-justify text-zinc-800 dark:text-zinc-100 mt-5'>
            My Name is Moritz. As a computer enthusiast from a young age, I've
            always been drawn to programming languages and their potential to
            transform the world. In high school, I began exploring programming
            languages like Java and Python, and my love for coding only grew
            stronger.
            <br />
            During my studies at RMIT, I became particularly fascinated by
            JavaScript and the many frameworks that have emerged around it. From
            React to Next.js, I've immersed myself in the world of JavaScript
            frameworks, constantly seeking to deepen my knowledge and hone my
            skills.
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href='https://github.com/Mor1209'
              icon={GitHubIcon}
              className='mt-4'
              title='Follow on GitHub'
            />
            <SocialLink
              href='https://www.linkedin.com/in/moritz-hauptmann/'
              icon={LinkedInIcon}
              className='mt-4'
              title='Follow on LinkedIn'
            />
            <SocialLink
              href='mailto:mohauptmann@gmail.com'
              icon={EmailIcon}
              className='mt-4'
              title='Email me'
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default ProfileSection
