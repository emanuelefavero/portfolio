'use client'

import styles from './ScrollDownButton.module.scss'
import { useEffect, useState } from 'react'

export default function ScrollDownButton() {
  const [scrollDistance, setScrollDistance] = useState(0)

  const handleScroll = () => {
    const currentScrollDistance =
      window.pageYOffset || document.documentElement.scrollTop
    setScrollDistance(currentScrollDistance)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Hide the button if scrolled more than 200 px */}
      {scrollDistance < 200 && (
        <a
          href='#projects'
          title='Scroll down'
          aria-label='Scroll down'
          className={`${styles.ScrollDownButton} absolute bottom-3 right-4 z-50 text-4xl font-medium text-indigo-500`}
        >
          ↓
        </a>
      )}
    </>
  )
}
