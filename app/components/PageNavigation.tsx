'use client'

import { Link as ScrollLink } from 'react-scroll'
import useActiveSection from '@/app/hooks/useActiveSection'
import ScrollToTopButton from './ScrollToTopButton'

export default function PageNavigation() {
  const activeSection = useActiveSection()

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

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </nav>
  )
}
