import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import { useNav } from '../../hooks/useNav'
import { useMemo } from 'react'
import SkillsGrid from '../SkillsGrid'

const SkillsSection = () => {
  const skillsRef = useNav('skills')

  return (
    <section id='skills' className='flex justify-center pt-[4rem] mt-[-4rem]'>
      <div className='container flex flex-col items-center justify-center p-6'>
        <h1
          ref={skillsRef}
          className='text-4xl font-bold text-zinc-800 dark:text-zinc-100'
        >
          My Skills
        </h1>
        <p className='description text-lg text-zinc-800 dark:text-zinc-100'>
          Technologies and lenguages I use for creating web applications
        </p>
        <SkillsGrid />
      </div>
    </section>
  )
}

export default SkillsSection
