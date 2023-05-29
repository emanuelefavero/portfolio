'use client'

import styles from './ScrollDownButton.module.scss'
import useScrollDistance from '@/app/hooks/useScrollDistance'

export default function ScrollDownButton() {
  const scrollDistance = useScrollDistance()

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
