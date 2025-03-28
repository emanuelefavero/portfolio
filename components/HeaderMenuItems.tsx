import styles from './HeaderMenuItems.module.scss'
import { Link as ScrollLink } from 'react-scroll'
import useActiveSection from '@/hooks/useActiveSection'

// BEWARE: the react-scroll library raises a warning in Lighthouse - "Links are not crawlable"

type Props = {
  setIsHamburgerMenuOpen?: (isHamburgerMenuOpen: boolean) => void
}

export default function HeaderMenuItems({ setIsHamburgerMenuOpen }: Props) {
  const activeSection = useActiveSection()

  const handleDownloadCV = () => {
    const fileUrl = '/emanuele-favero-CV.pdf'
    const newWindow = window.open(fileUrl, '_blank')
    if (newWindow) {
      // Security code - Prevent new window from accessing the current window methods and properties
      newWindow.opener = null
    }
  }

  return (
    <>
      {/* Projects */}
      <li className='mr-6'>
        <ScrollLink
          to='projects'
          smooth={true}
          // TIP: Set offset (in px) to adjust the scrolling position
          offset={100}
          //
          // Change link color when the corresponding section is in the viewport
          // The first ternary operator handles the linkHoverLineAnimation state, the second the link itself
          className={`${
            activeSection === 'projects'
              ? styles.activeLinkHoverLineAnimation
              : styles.linkHoverLineAnimation
          } ${
            activeSection === 'projects' && styles.activeLink
          } relative cursor-pointer rounded-sm active:text-slate-600`}
          onClick={() =>
            setIsHamburgerMenuOpen && setIsHamburgerMenuOpen(false)
          }
        >
          Projects
        </ScrollLink>
      </li>

      {/* Skills */}
      <li className='mr-6'>
        <ScrollLink
          to='skills'
          smooth={true}
          offset={-10}
          className={`${
            activeSection === 'skills'
              ? styles.activeLinkHoverLineAnimation
              : styles.linkHoverLineAnimation
          } ${
            activeSection === 'skills' && styles.activeLink
          } relative cursor-pointer rounded-sm active:text-slate-600`}
          onClick={() =>
            setIsHamburgerMenuOpen && setIsHamburgerMenuOpen(false)
          }
        >
          Skills
        </ScrollLink>
      </li>

      {/* Download CV */}
      <li className='mr-6'>
        <button
          className={`${styles.linkHoverLineAnimation} relative cursor-pointer rounded-sm active:text-slate-600`}
          onClick={handleDownloadCV}
        >
          Download CV
        </button>
      </li>

      {/* Contact Me */}
      <li>
        <ScrollLink
          to='contact-me'
          smooth={true}
          offset={110}
          className='relative transform cursor-pointer rounded-full border-b border-slate-300 bg-slate-50 px-4 py-2 shadow-sm shadow-slate-400 transition-all duration-100 hover:bg-slate-100 hover:text-slate-600 active:top-[1px] active:shadow-none'
          onClick={() =>
            setIsHamburgerMenuOpen && setIsHamburgerMenuOpen(false)
          }
        >
          <span
            className={`${
              activeSection === 'contact-me' && styles.activeLink
            } bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent`}
          >
            Contact Me
          </span>
        </ScrollLink>
      </li>
    </>
  )
}
