import React, { useEffect, useState } from 'react'

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all')

  const filterHandler = e => {
    setFilter(e.currentTarget.id)
  }

  return (
    <section className='flex justify-center'>
      <div className='container flex flex-col items-center justify-center p-6'>
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
      </div>
    </section>
  )
}

export default ProjectsSection
