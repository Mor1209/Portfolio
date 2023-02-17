import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import { useNav } from '../../hooks/useNav'
import { useMemo } from 'react'
import SkillsGrid from '../SkillsGrid'
import SectionContainer from '../SectionContainer'

const SkillsSection = () => {
  return (
    <SectionContainer id='skills' additionalStyles={'flex-col'}>
      <h1 className='text-4xl font-bold text-zinc-800 dark:text-zinc-100'>
        My Skills
      </h1>
      <p className='description text-[18px] text-zinc-800 dark:text-zinc-100 text-center'>
        Technologies and lenguages I use for creating web applications
      </p>
      <SkillsGrid />
    </SectionContainer>
  )
}

export default SkillsSection
