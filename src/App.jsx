import React, {
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
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProfileSection from './components/sections/ProfileSection'
import { icons } from './shared/constants'
import SkillsSection from './components/sections/SkillsSection'
import ProjectSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import ResumeDialog from './components/ResumeDialog'
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [resumeDialog, setResumeDialog] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange(latest => {
      if (latest >= 10) setIsVisible(true)
      if (latest < 10) setIsVisible(false)
    })
  }, [])

  const resumeToggleHandler = () => {
    setResumeDialog(prev => !prev)
  }

  return (
    <div className='bg-white dark:bg-darkbg'>
      <NavBar isVisible={isVisible} resumeToggleHandler={resumeToggleHandler} />
      <div className='relative h-screen flex justify-center items-center flex-col gap-5'>
        <Canvas />
        <Hero />
        <ResumeDialog
          resumeDialog={resumeDialog}
          resumeToggleHandler={resumeToggleHandler}
        />
      </div>
      <ProfileSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default App
