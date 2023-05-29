'use client'

import styles from './ScrollDownButton.module.scss'
import { HiArrowDown } from 'react-icons/hi'
import useScrollDistance from '@/app/hooks/useScrollDistance'
import { Link as ScrollLink } from 'react-scroll'

export default function ScrollDownButton() {
  const scrollDistance = useScrollDistance()

  return (
    <>
      {/* Hide the button if scrolled down more than 200 px */}
      {scrollDistance < 200 && (
        <ScrollLink
          to='projects'
          smooth={true}
          offset={100}
          title='Scroll down'
          aria-label='Scroll down'
          className={`${styles.ScrollDownButton} absolute bottom-3 right-4 z-50 cursor-pointer text-4xl font-medium text-indigo-500`}
        >
          <HiArrowDown />
        </ScrollLink>
      )}
    </>
  )
}
