import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import { skills } from '../shared/skills'

const SkillsGrid = () => {
  const { themeIsDark } = useContext(ThemeContext)

  return (
    <div className='grid justify-center grid-cols-4 md:grid-cols-7 gap-y-[10px] md:gap-y-[20px]'>
      {skills.map((skill, idx) => (
        <a
          key={skill.name}
          href={skill.url}
          target='_blank'
          rel='noopener noreferrer'
          className={`item flex flex-col group p-1 last:col-span-2 last:items-start last:ml-1 md:last:col-span-1 md:last:items-center md:last:ml-0${
            skills.length - 2 === idx
              ? ' col-span-2 md:col-span-1 items-end mr-1 md:items-center md:mr-0'
              : ' justify-center items-center'
          }`}
        >
          <div className='flex flex-col items-center justify-center'>
            <img
              className='w-[60px] h-[60px] flex transition duration-300 group-hover:scale-110'
              src={themeIsDark && skill.imgDark ? skill.imgDark : skill.img}
              alt={skill.name}
            />
            <p className='text-center text-zinc-800 dark:text-zinc-100'>
              {skill.name}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default React.memo(SkillsGrid)
