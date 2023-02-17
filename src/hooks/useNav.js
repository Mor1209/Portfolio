import { useRef, useContext, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { NavContext } from '../context/navContext'

export const useNav = navLinkId => {
  const ref = useRef()

  const { setActiveNavLinkId } = useContext(NavContext)

  const inView = useInView(ref, {
    margin: '-40% 0% -40% 0%',
  })

  useEffect(() => {
    if (inView) {
      setActiveNavLinkId(navLinkId)
    }
  }, [inView, setActiveNavLinkId, navLinkId])

  return [inView, ref]
}
