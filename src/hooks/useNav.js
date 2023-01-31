import { useRef, useContext, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { NavContext } from '../context/navContext'

export const useNav = navLinkId => {
  const ref = useRef(null)

  const { setActiveNavLinkId } = useContext(NavContext)

  const isInView = useInView(ref, {
    margin: '-20% 0% -30% 0%',
  })

  useEffect(() => {
    if (isInView) {
      setActiveNavLinkId(navLinkId)
    }
  }, [isInView, setActiveNavLinkId, navLinkId])

  return ref
}
