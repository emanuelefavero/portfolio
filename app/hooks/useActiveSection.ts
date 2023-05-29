import { useEffect, useState } from 'react'

export default function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('[id]')
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop

      let currentSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (
          scrollPosition >= sectionTop - 200 &&
          scrollPosition < sectionTop + sectionHeight - 200
        ) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // * RETURN THE ACTIVE SECTION (VISIBLE ELEMENT ON THE VIEWPORT) ID NAME
  return activeSection
}
