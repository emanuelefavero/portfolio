'use client'

import styles from '@/app/styles/animations.module.scss'
import HamburgerMenuButton from './HamburgerMenuButton'
import HeaderMenuItems from './HeaderMenuItems'
import { useState } from 'react'

export default function HamburgerMenu() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

  return (
    <>
      <HamburgerMenuButton
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
      />

      <ul
        className={`text-slate text-slate absolute right-0 top-0 flex flex-col items-center justify-center border-2 border-b-slate-700 bg-slate-300/95 text-2xl font-semibold text-slate-700 transition-all duration-200`}
        style={{
          width: isHamburgerMenuOpen ? '100%' : '0',
          height: isHamburgerMenuOpen ? '100vh' : '0',
          opacity: isHamburgerMenuOpen ? '1' : '0',
          overflow: 'hidden',
          position: 'fixed',
          transformOrigin: 'top right',
          transitionProperty: 'width, height, opacity',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <div
          className={`flex flex-col gap-8 ${
            isHamburgerMenuOpen ? styles.fadeInSlideUpSlow : ''
          }`}
        >
          <HeaderMenuItems setIsHamburgerMenuOpen={setIsHamburgerMenuOpen} />
        </div>
      </ul>
    </>
  )
}
