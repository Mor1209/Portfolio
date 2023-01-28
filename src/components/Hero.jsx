import { Fragment, memo, useContext } from 'react'
import { m } from 'framer-motion'
import { characters } from '../shared/constants'
import { ThemeContext } from '../context/themeContext'

const Hero = () => {
  const { themeIsDark } = useContext(ThemeContext)

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]'
        viewBox='-5 -5 290 97'
        fill='none'
        strokeLinecap='round'
      >
        {characters.map((character, index) => (
          <Fragment key={`${themeIsDark}-${character}`}>
            <m.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: index / 10, duration: 1 }}
              d={character}
              // fill={themeIsDark ? '#27272A' : '#F4F4F5'}
              stroke={!themeIsDark ? '#27272A' : '#F4F4F5'}
              strokeWidth='3'
            ></m.path>
            <m.path
              initial={{ fill: themeIsDark ? '#FFFFFF00' : '#FFFFFF00' }}
              animate={{ fill: !themeIsDark ? '#27272A' : '#F4F4F5' }}
              transition={{ delay: 0.7 + index / 10, duration: 0.6 }}
              fill='none'
              d={character}
            ></m.path>
          </Fragment>
        ))}
      </svg>
      <m.p
        key={`${themeIsDark}-p`}
        data-scroll
        data-scroll-speed='1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className='text-3xl text-center z-[1] overflow-hidden text-zinc-800 dark:text-zinc-100'
      >
        {`I'm a Full Stack Developer`}
      </m.p>
      <svg
        key={`${themeIsDark}-arrow`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 2 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='absolute w-8 h-[5rem] bottom-[6vh] left-[calc(50%-16px)]'
      >
        <m.path
          // animate={{ y: ['50%', '-50%'] }}
          animate={{ opacity: 1, y: ['20%', '-20%'] }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.4,
            y: {
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeOut',
            },
          }}
          stroke={!themeIsDark ? '#27272A' : '#F4F4F5'}
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
        />
      </svg>
    </>
  )
}

export default memo(Hero)
