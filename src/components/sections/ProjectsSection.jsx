import React, { useEffect, useState } from 'react'
import profilePicture from '../../assets/PassportPicNeiyo.jpg'
import { projects } from '../../shared/projects'
import { GitHubIcon } from '../SocialIcons'
import SocialLink from '../SocialLink'
import { useNav } from '../../hooks/useNav'

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all')
  const projectsRef = useNav('projects')

  const filterHandler = e => {
    setFilter(e.currentTarget.id)
  }

  const Projects = React.memo(() => {
    return (
      <>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
              index % 2 === 1
                ? 'flex-col lg:flex-row'
                : 'flex-col lg:flex-row-reverse'
            }`}
          >
            <div data-scroll data-scroll-speed='3' className='lg:flex-1'>
              <div className='border-[#888] border-2 rounded-[20px] overflow-hidden'>
                <div className=''>
                  <img
                    className='w-full h-auto rounded-[12px] border-black border-[8px]'
                    src={project.img}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='item-info lg:flex-1'>
              <h1 className='text-3xl text-zinc-800 dark:text-zinc-100'>
                {project.title}
              </h1>
              <p className='text-[20px] text-justify my-3 text-zinc-800 dark:text-zinc-100'>
                {project.description}
              </p>

              <div className='flex gap-[5px]'>
                {project.technologies.map(tech => (
                  <img
                    key={tech}
                    className='w-[30px] h-[30px]'
                    src={tech}
                    alt=''
                  />
                ))}
                {/* <img
                  key='react'
                  className='w-[30px] h-[30px]'
                  src={react}
                  alt=''
                />
                <img
                  key='nodejs'
                  className='w-[30px] h-[30px]'
                  src={nodejs}
                  alt=''
                />
                <img
                  key='materialUi'
                  className='w-[30px] h-[30px]'
                  src={materialUi}
                  alt=''
                />
                <img
                  key='sequelize'
                  className='w-[30px] h-[30px]'
                  src={sequelize}
                  alt=''
                /> */}
              </div>

              <div className='flex mt-[25px] gap-[20px]'>
                {project.demo && (
                  <a
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                      />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25]'
                  >
                    <GitHubIcon className='h-8 w-8 fill-zinc-500 transition dark:fill-zinc-400' />
                    <span> View Github</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </>
    )
  })

  return (
    <section id='projects' className='flex justify-center pt-[4rem] mt-[-4rem]'>
      <div className='container flex flex-col items-center justify-center p-6'>
        <h1
          ref={projectsRef}
          className='text-4xl font-bold text-zinc-800 dark:text-zinc-100'
        >
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
        <Projects />
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
      </div>
    </section>
  )
}

export default ProjectsSection
