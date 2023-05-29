import { useState, useEffect } from 'react'

export default function useScrollDistance() {
  const [scrollDistance, setScrollDistance] = useState(0)

  const handleScroll = () => {
    const currentScrollDistance =
      window.scrollY || document.documentElement.scrollTop
    setScrollDistance(currentScrollDistance)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollDistance
}
