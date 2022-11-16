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
import { Dialog, Transition } from '@headlessui/react'
import {
  ArrowDownTrayIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Resume from './assets/Moritz_Hauptmann_-_Full_Stack_Developer.jpg'
import ResumePDF from './assets/Moritz_Hauptmann_-_Full_Stack_Developer.pdf'

function App() {
  // const [themeIsDark, setThemeIsDark] = useState(true)

  const [isVisible, setIsVisible] = useState(false)
  const [resumeDialog, setResumeDialog] = useState(false)
  const { scrollY } = useScroll()
  // let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    // updateMode()

    return scrollY.onChange(latest => {
      if (latest >= 10) setIsVisible(true)
      if (latest < 10) setIsVisible(false)
    })
  }, [])

  const resumeToggleHandler = () => {}

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

  const ResumeDialog = () => {
    return (
      <Transition.Root appear show={resumeDialog} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setResumeDialog(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden px-4 pt-5 pb-4 rounded-lg bg-white text-left shadow-xl transition-all sm:my-20 sm:w-full sm:max-w-4xl sm:p-6'>
                  <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
                    <button
                      type='button'
                      className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      onClick={() => setResumeDialog(false)}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  <div>
                    <img src={Resume} />
                  </div>
                  <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                    <a href={ResumePDF} download tabIndex='-1'>
                      <button
                        type='button'
                        className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                        onClick={() => setResumeDialog(false)}
                      >
                        <ArrowDownTrayIcon
                          className='-ml-1 mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                        <span>Download PDF</span>
                      </button>
                    </a>
                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
                      onClick={() => setResumeDialog(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }

  return (
    <div className='bg-white dark:bg-darkbg'>
      <NavBar
        isVisible={isVisible}
        resumeToggleHandler={() => setResumeDialog(true)}
      />
      <div className='relative h-screen flex justify-center items-center flex-col gap-5'>
        <Canvas />
        <Hero />
        <ResumeDialog />
        {/* {resumeDialog && <Dialog />} */}
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
