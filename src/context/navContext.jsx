import React, { createContext } from 'react'
import { useState } from 'react'

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('')

  return (
    <NavContext.Provider value={{ activeNavLinkId, setActiveNavLinkId }}>
      {children}
    </NavContext.Provider>
  )
}
