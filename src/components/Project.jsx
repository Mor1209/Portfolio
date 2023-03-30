import React, { useRef, useEffect } from 'react'
import { m, useInView, useAnimation } from 'framer-motion'
import { GitHubIcon } from './SocialIcons'

const Project = ({ project, index }) => {
  const ref = useRef()
  const inView = useInView(ref, {
    margin: '-20% 0% -20% 0%',
    once: true,
  })

  const animation = useAnimation()

  useEffect(() => {
    // console.log(`in view ${inView}`)
    if (inView && index !== 0) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'circOut',
        },
      })
    }
    // if (!inView) {
    //   animation.start({ x: '-100vw' })
    // }
  }, [inView])

  return (
    <div ref={ref}>
      <m.div
        initial={{
          opacity: `${index === 0 ? 1 : 0}`,
          x: `${index % 2 === 1 && index !== 0 ? '-100vw' : ''}${
            index % 2 !== 1 && index !== 0 ? '100vw' : ''
          }`,
        }}
        animate={animation}
        className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] my-6 md:my-20 ${
          index % 2 === 1
            ? 'flex-col lg:flex-row'
            : 'flex-col lg:flex-row-reverse'
        }`}
      >
        <div className='lg:flex-1'>
          <div className='border-[#888] border-2 rounded-[20px] overflow-hidden bg-black'>
            <div className=''>
              <img
                className='w-full h-auto rounded-[18px] border-black border-[8px]'
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
          <p className='text-[18px] text-justify my-3 text-zinc-800 dark:text-zinc-100'>
            {project.description}
          </p>

          <div className='flex gap-[5px]'>
            {project.technologies.map(tech => (
              <img key={tech} className='w-[30px] h-[30px]' src={tech} alt='' />
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
                <span>Demo</span>
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
                <span>Github</span>
              </a>
            )}
          </div>
        </div>
      </m.div>
    </div>
  )
}

export default React.memo(Project)
