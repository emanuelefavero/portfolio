'use client'

import { useEffect, useState } from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  // --------------------------------------------------------
  // Hide - Show Header on scroll down - up
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (prevScrollPos > currentScrollPos) {
        setIsHeaderHidden(false)
      } else {
        setIsHeaderHidden(true)
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])
  // --------------------------------------------------------

  return (
    <div
      className={`${
        // Hide - Show Header on scroll down - up
        isHeaderHidden ? '-translate-y-full' : 'translate-y-0'
      } fixed z-50 flex w-full items-center justify-between bg-slate-200/75 px-2 py-3 backdrop-blur-lg backdrop-filter transition-all duration-200`}
    >
      <HeaderLogo />
      <HeaderMenu />
    </div>
  )
}
