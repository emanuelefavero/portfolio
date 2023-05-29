'use client'

import { useEffect, useState } from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'
import useScrollDistance from '@/app/hooks/useScrollDistance'

export default function Header() {
  const scrollDistance = useScrollDistance()

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
        // Show the header when the scroll distance is less than 50 px
        scrollDistance < 50
          ? 'translate-y-0'
          : // Hide - Show Header on scroll down - up
          isHeaderHidden
          ? '-translate-y-full'
          : 'translate-y-0'
      } fixed z-50 flex w-full items-center justify-between bg-slate-200/75 px-2 py-3 backdrop-blur-lg backdrop-filter transition-all duration-200`}
    >
      <HeaderLogo />
      <HeaderMenu />
    </div>
  )
}
