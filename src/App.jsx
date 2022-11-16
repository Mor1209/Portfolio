import {
  useEffect,
  useRef,
  useState,
  Fragment,
  useMemo,
  memo,
  useContext,
} from 'react'

import './App.css'
import Canvas from './components/Canvas'
import { m, useScroll } from 'framer-motion'
import proflePicture from './assets/PassportPicNeiyo.jpg'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { GitHubIcon, LinkedInIcon } from './components/SocialIcons'
import { ThemeContext } from './context/themeContext'

function App() {
  // const [themeIsDark, setThemeIsDark] = useState(true)

  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  // let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    // updateMode()

    return scrollY.onChange(latest => {
      if (latest >= 10) setIsVisible(true)
      if (latest < 10) setIsVisible(false)
    })
  }, [])

  // darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  // window.addEventListener('storage', updateModeWithoutTransitions)

  // function updateMode() {
  //   let isSystemDarkMode = darkModeMediaQuery.matches
  //   let isDarkMode =
  //     window.localStorage.isDarkMode === 'true' ||
  //     (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //     setThemeIsDark(false)
  //   }

  //   if (isDarkMode === isSystemDarkMode) {
  //     delete window.localStorage.isDarkMode
  //   }
  // }

  // function disableTransitionsTemporarily() {
  //   document.documentElement.classList.add('[&_*]:!transition-none')
  //   window.setTimeout(() => {
  //     document.documentElement.classList.remove('[&_*]:!transition-none')
  //   }, 0)
  // }

  // function updateModeWithoutTransitions() {
  //   disableTransitionsTemporarily()
  //   updateMode()
  // }

  function SocialLink({ icon: Icon, ...props }) {
    return (
      <a className='-m-1 p-1' {...props}>
        <Icon className='h-10 w-10 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300' />
      </a>
    )
  }

  return (
    <div className='bg-white dark:bg-darkbg'>
      <NavBar isVisible={isVisible} />
      <div className='relative h-screen flex justify-center items-center flex-col gap-5'>
        <Canvas />
        <Hero />
      </div>
      <section>
        <div className='container p-6 md:mx-auto pt-[12rem]'>
          <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <img
                  src={proflePicture}
                  alt=''
                  sizes='(min-width: 1024px) 32rem, 20rem'
                  className='aspect-auto rotate-3 rounded-2xl text-zinc-800 dark:text-zinc-100 object-cover dark:bg-zinc-800'
                />
              </div>
            </div>
            <div className='lg:order-first lg:row-span-2'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                Hi, I'm Moritz a Front End Developer !
              </h1>
              <p>I like to create websites with cutting adge techlogy.</p>
              <div className='mt-6 flex gap-6'>
                <SocialLink href='#' icon={GitHubIcon} className='mt-4'>
                  Follow on GitHub
                </SocialLink>
                <SocialLink href='#' icon={LinkedInIcon} className='mt-4'>
                  Follow on LinkedIn
                </SocialLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
