'use client'

import styles from './ScrollToTopButton.module.scss'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { HiArrowDown } from 'react-icons/hi'

export default function ScrollToTopButton() {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const documentHeight = document.documentElement.scrollHeight

      // Show the scroll button when the user is 100 px from the bottom of the page
      if (documentHeight - scrollPosition < 100) {
        setShowScrollToTopButton(true)
      } else {
        setShowScrollToTopButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Hide the scroll to top button if scrolled up more than 100px from the website bottom */}
      {showScrollToTopButton && (
        // Scroll to the top of the page
        <ScrollLink
          to='home'
          smooth={true}
          offset={0}
          className={`${styles.ScrollToTopButton} vertical-text absolute bottom-6 right-6  flex rotate-180 cursor-pointer items-center justify-center gap-3 text-center text-sm font-bold uppercase text-indigo-500 transition-all duration-200 hover:text-indigo-600 active:text-indigo-400`}
        >
          <span className='text-lg'>
            <HiArrowDown />
          </span>
          Scroll To Top
        </ScrollLink>
      )}
    </>
  )
}
