'use client'

import { Link as ScrollLink } from 'react-scroll'
import useActiveSection from '@/app/hooks/useActiveSection'
import ScrollDownButton from './ScrollDownButton'
import ScrollToTopButton from './ScrollToTopButton'

export default function PageNavigation() {
  const activeSection = useActiveSection()

  return (
    <div className='fixed right-0 top-0 z-40 hidden h-screen w-[2.6rem] select-none flex-col items-center justify-center gap-4 2xs:flex xs:w-[4.2rem]'>
      {/* Home */}
      <ScrollLink
        title='Home'
        to='home'
        smooth={true}
        offset={0}
        className={`${
          activeSection === 'home'
            ? 'scale-125 border border-indigo-500 bg-indigo-600'
            : 'border border-slate-400 bg-slate-300 hover:border-indigo-600 hover:bg-indigo-300'
        } h-4 w-4 cursor-pointer rounded-full transition-all duration-200 hover:scale-110 active:scale-90`}
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
            : 'border border-slate-400 bg-slate-300 hover:border-indigo-600 hover:bg-indigo-300'
        } h-4 w-4 cursor-pointer rounded-full transition-all duration-200 hover:scale-110 active:scale-90`}
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
            : 'border border-slate-400 bg-slate-300 hover:border-indigo-600 hover:bg-indigo-300'
        } h-4 w-4 cursor-pointer rounded-full transition-all duration-200 hover:scale-110 active:scale-90`}
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
            : 'border border-slate-400 bg-slate-300 hover:border-indigo-600 hover:bg-indigo-300'
        } h-4 w-4 cursor-pointer rounded-full transition-all duration-200 hover:scale-110 active:scale-90`}
      ></ScrollLink>

      {/* Scroll down button */}
      <ScrollDownButton />

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  )
}
