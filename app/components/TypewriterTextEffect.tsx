'use client'

import { useEffect, useState, useRef } from 'react'

export default function TypewriterTextEffect() {
  // * Text to be typed out
  // NOTE: If you change this, you will also need to change the text inside the span tag in the jsx below
  const text = 'let myStack = '

  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showColoredText, setShowColoredText] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    )

    const refValue = containerRef.current

    if (refValue) {
      observer.observe(refValue)
    }

    return () => {
      if (refValue) {
        observer.unobserve(refValue)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) {
      setCurrentText('')
      setCurrentIndex(0)
      setShowColoredText(false)
      return
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 100) // Adjust the typing speed here (in milliseconds)

      return () => clearTimeout(timeout)
    }

    setShowColoredText(true)
  }, [isVisible, currentIndex])

  return (
    <>
      {showColoredText ? (
        // NOTE: If you change the text here, you will also need to change the text in the text variable above
        <span>
          <span className='text-[#f180f3]'>let </span>myStack <span>=</span>{' '}
          <span className='text-amber-400'>[</span>
        </span>
      ) : (
        <span ref={containerRef}>{currentText}</span>
      )}
    </>
  )
}
