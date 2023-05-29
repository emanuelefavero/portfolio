'use client'

import styles from './PageNavigation.module.scss'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { HiArrowDown } from 'react-icons/hi'
import useActiveSection from '@/app/hooks/useActiveSection'

export default function PageNavigation() {
  const activeSection = useActiveSection()
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset
      const documentHeight = document.documentElement.scrollHeight

      // Show the scroll button when the user is 100 px from the bottom of the page
      if (documentHeight - scrollPosition < 100) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className='fixed right-0 top-0 z-40 flex h-screen w-[4.2rem] select-none flex-col items-center justify-center gap-4'>
      {/* Home */}
      <ScrollLink
        title='Home'
        to='home'
        smooth={true}
        offset={0}
        className={`${
          activeSection === 'home'
            ? 'scale-125 border border-indigo-500 bg-indigo-600'
            : 'border border-slate-400 bg-slate-300'
        } h-4 w-4 cursor-pointer rounded-full transition-all duration-200`}
      ></ScrollLink>

      {/* Projects */}
      <ScrollLink
        title='Projects'
        to='projects'
        smooth={true}
        offset={100}
        className={`${
          activeSection === 'projects'
            ? 'scale-125 border border-indigo-500 bg-indigo-600'
            : 'border border-slate-400 bg-slate-300'
        } h-4 w-4 cursor-pointer rounded-full transition-all duration-200`}
      ></ScrollLink>

      {/* Skills */}
      <ScrollLink
        title='Skills'
        to='skills'
        smooth={true}
        offset={-10}
        className={`${
          activeSection === 'skills'
            ? 'scale-125 border border-indigo-500 bg-indigo-600'
            : 'border border-slate-400 bg-slate-300'
        } h-4 w-4 cursor-pointer rounded-full transition-all duration-200`}
      ></ScrollLink>

      {/* Contact Me */}
      <ScrollLink
        title='Contact Me'
        to='contact-me'
        smooth={true}
        offset={110}
        className={`${
          activeSection === 'contact-me'
            ? 'scale-125 border border-indigo-500 bg-indigo-600'
            : 'border border-slate-400 bg-slate-300'
        } h-4 w-4 cursor-pointer rounded-full transition-all duration-200`}
      ></ScrollLink>

      {/* Hide the button if scrolled up more than 100px from the website bottom */}
      {showScrollButton && (
        <ScrollLink
          to='home'
          smooth={true}
          offset={0}
          className={`${styles.scrollToTopButton} vertical-text absolute bottom-6 right-6  flex rotate-180 cursor-pointer items-center justify-center gap-3 text-center text-sm font-bold uppercase text-indigo-500 transition-all duration-200 hover:text-indigo-600 active:text-indigo-400`}
        >
          <span className='text-lg'>
            <HiArrowDown />
          </span>
          Scroll To Top
        </ScrollLink>
      )}
    </nav>
  )
}
