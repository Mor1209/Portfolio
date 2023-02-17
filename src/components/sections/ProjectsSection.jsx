import React, { useEffect, useState } from 'react'
import profilePicture from '../../assets/PassportPicNeiyo.jpg'
import { projects } from '../../shared/projects'
import SocialLink from '../SocialLink'
import { useNav } from '../../hooks/useNav'
import SectionContainer from '../SectionContainer'
import Project from '../Project'

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all')
  const projectsRef = useNav('projects')

  const filterHandler = e => {
    setFilter(e.currentTarget.id)
  }

  return (
    <SectionContainer id='projects' additionalStyles={'flex-col'}>
      <h1 className='text-4xl font-bold text-zinc-800 dark:text-zinc-100'>
        My Projects
      </h1>
      <div className='flex flex-wrap gap-3 mt-6' role='group'>
        <button
          type='button'
          id='all'
          onClick={filterHandler}
          className={`${
            filter === 'all' &&
            'ring-indigo-500 text-indigo-500 dark:text-indigo-500 dark:ring-indigo-500'
          } rounded-full bg-white/90 px-4 text-lg font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:active:text-indigo-600 active:text-indigo-600 transition`}
        >
          All
        </button>
        <button
          type='button'
          id='webApplications'
          onClick={filterHandler}
          className={`${
            filter === 'webApplications' &&
            'ring-indigo-500 text-indigo-500 dark:text-indigo-500 dark:ring-indigo-500'
          } rounded-full bg-white/90 px-4 text-lg font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:active:text-indigo-600 active:text-indigo-600 transition`}
        >
          Web Applications
        </button>
        <button
          type='button'
          id='cloudApplications'
          onClick={filterHandler}
          className={`${
            filter === 'cloudApplications' &&
            'ring-indigo-500 text-indigo-500 dark:text-indigo-500 dark:ring-indigo-500'
          } rounded-full bg-white/90 px-4 text-lg font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:active:text-indigo-600 active:text-indigo-600 transition`}
        >
          Cloud Applications
        </button>
        <button
          type='button'
          id='machineLearning'
          onClick={filterHandler}
          className={`${
            filter === 'machineLearning' &&
            'ring-indigo-500 text-indigo-500 dark:text-indigo-500 dark:ring-indigo-500'
          } 
            rounded-full bg-white/90 px-4 text-lg font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:active:text-indigo-600 active:text-indigo-600 transition`}
        >
          Machine Learning
        </button>
      </div>
      {projects.map((project, index) => (
        <Project project={project} index={index} key={project.id} />
      ))}
      {/* <div className='flex flex-row mt-5 w-full md:w-[70%]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 rounded-md ring-1 ring-zinc-900/5 shadow-lg w-full'>
            <div className='h-[25vh] w-full overflow-hidden'>
              <img
                src={profilePicture}
                alt=''
                className='w-full h-full object-cover'
              />
            </div>
            <div>
              <h1>Text</h1>
            </div>
          </div>
        </div> */}
    </SectionContainer>
  )
}

export default ProjectsSection
