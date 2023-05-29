// @ts-nocheck

import { useEffect, useState, useRef } from 'react'

function useWebsiteHeight() {
  const [websiteHeight, setWebsiteHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    function calculateHeight() {
      const height = contentRef.current.getBoundingClientRect().height
      setWebsiteHeight(height)
    }

    calculateHeight()

    function handleResize() {
      calculateHeight()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return websiteHeight
}

export default useWebsiteHeight
