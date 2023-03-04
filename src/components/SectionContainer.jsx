import React, { useEffect, useContext } from 'react'
import { m, useAnimation } from 'framer-motion'
import { useNav } from '../hooks/useNav'

const SectionContainer = ({ id, children, additionalStyles }) => {
  const [inView, ref] = useNav(id)
  // const inView = useInView(profileRef, {
  //   margin: '0px 0px -60% 0px',
  //   once: true,
  // })
  const animation = useAnimation()

  useEffect(() => {
    // console.log(`in view ${inView}`)
    if (inView) {
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
    <section ref={ref} id={id} className='pt-[4rem] mt-[-4rem] overflow-hidden'>
      <m.div
        initial={{
          opacity: 0,
          x: `${id === 'skills' || id === 'contact' ? '' : '-'}100vw`,
        }}
        animate={animation}
        className={`container mx-auto flex p-6 pt-10 lg:pt-40 items-center justify-center ${additionalStyles}`}
      >
        {children}
      </m.div>
    </section>
  )
}

export default SectionContainer
