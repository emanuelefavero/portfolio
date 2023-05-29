'use client'

import styles from './HeaderMenu.module.scss'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import useActiveSection from '@/app/hooks/useActiveSection'

export default function HeaderMenu() {
  const activeSection = useActiveSection()

  return (
    <nav>
      <ul className='mr-4 flex select-none items-center justify-center text-xl font-semibold text-slate-700'>
        <li className='mr-6'>
          <ScrollLink
            to='projects'
            smooth={true}
            // TIP: Set offset (in px) to adjust the scrolling position
            offset={100}
            // TIP: We added rounded-sm to style the accessibility focus outline
            className={`${
              styles.linkHoverLineAnimation
            } relative cursor-pointer rounded-sm active:text-slate-600 ${
              activeSection === 'projects' ? styles.activeLink : ''
            }`}
          >
            Projects
          </ScrollLink>
        </li>
        <li className='mr-6'>
          <ScrollLink
            to='skills'
            smooth={true}
            offset={-10}
            className={`${
              styles.linkHoverLineAnimation
            } relative cursor-pointer rounded-sm active:text-slate-600 ${
              activeSection === 'skills' ? styles.activeLink : ''
            }`}
          >
            Skills
          </ScrollLink>
        </li>
        <li className='mr-6'>
          <Link
            href='/emanuele-favero-CV.pdf'
            target='_blank'
            className={`${styles.linkHoverLineAnimation} relative cursor-pointer rounded-sm active:text-slate-600`}
          >
            Download CV
          </Link>
        </li>
        <li>
          <ScrollLink
            to='contact-me'
            smooth={true}
            offset={110}
            className='relative transform cursor-pointer rounded-full border-b border-slate-300 bg-slate-50 px-4 py-2 shadow-sm shadow-slate-400 transition-all duration-100 hover:bg-slate-100 hover:text-slate-600 active:top-[1px] active:shadow-none'
          >
            <span
              className={`bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent ${
                activeSection === 'contact-me' ? styles.activeLink : ''
              }
          `}
            >
              Contact Me
            </span>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  )
}
