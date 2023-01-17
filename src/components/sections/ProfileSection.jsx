import React from 'react'
import profilePicture from '../../assets/PassportPicNeiyo.jpg'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../SocialIcons'
import SocialLink from '../SocialLink'

const ProfileSection = () => {
  return (
    <section>
      <div className='container mx-auto flex p-6 pt-[12rem] items-center justify-center'>
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
              Hi, I'm Moritz a Front End Developer !
            </h1>
            <p className='text-zinc-800 dark:text-zinc-100 mt-5'>
              I am passionate about building big web applications and I am
              following a consistent desire of learning new tech skills in web
              and cloud technologies.
            </p>
            <div className='mt-6 flex gap-6'>
              <SocialLink href='#' icon={GitHubIcon} className='mt-4'>
                Follow on GitHub
              </SocialLink>
              <SocialLink href='#' icon={LinkedInIcon} className='mt-4'>
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href='#' icon={EmailIcon} className='mt-4'>
                Email me
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
