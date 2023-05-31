'use client'

import styles from './HamburgerMenuButton.module.scss'
import { useState } from 'react'

export default function HamburgerMenuButton() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

  return (
    <>
      <button
        className={`${styles.HamburgerMenuButton}`}
        onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
      >
        <div
          className={`${styles.hamburgerLines} ${
            isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ''
          }`}
        >
          <span
            className={`${styles.line} ${styles.line1} ${
              isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ''
            }`}
          ></span>
          <span
            className={`${styles.line} ${styles.line2} ${
              isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ''
            }`}
          ></span>
          <span
            className={`${styles.line} ${styles.line3} ${
              isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ''
            }`}
          ></span>
        </div>
      </button>
    </>
  )
}
