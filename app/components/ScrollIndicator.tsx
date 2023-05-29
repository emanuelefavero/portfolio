'use client'

import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const newScrollWidth = (scrollTop / (scrollHeight - clientHeight)) * 100
      setScrollWidth(newScrollWidth)
    }

    const handleResize = () => {
      handleScroll()
    }

    document.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        .scrollIndicator {
          position: fixed;
          width: ${scrollWidth}%;
          height: 0.25rem;
          background-color: #4f46e5;
          box-shadow: 1px 1px 1px 0 rgba(49, 46, 129, 0.2);
          border-bottom: 1px solid rgba(49, 46, 129, 0.3);
          border-radius: 50px;
          top: 0;
          left: 0;
          /* transition: width 0.1s ease-out; */
          z-index: 1000;
        }
      `}</style>
      <div className='scrollIndicator' />
    </>
  )
}
