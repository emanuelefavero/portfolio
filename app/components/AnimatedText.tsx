'use client'

import './AnimatedText.css'
import { useEffect, useState } from 'react'

export default function AnimatedText() {
  const [fadeIntervalMs] = useState(3000)
  const [wordChangeIntervalMs] = useState(fadeIntervalMs * 2)
  const [wordsToAnimate] = useState(['Frontend', 'Backend', 'Fullstack', 'Web'])

  const [wordOrder, setWordOrder] = useState(0)
  const [isFadeIn, setIsFadeIn] = useState(true)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setIsFadeIn((prevIsFadeIn) => !prevIsFadeIn)
    }, fadeIntervalMs)

    return () => clearInterval(fadeTimeout)
  }, [fadeIntervalMs])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        // If the word order is the last one, reset it to the first one (thanks to the modulo operator)
        // TIP: wordsToAnimate is of length 4, so when wordOrder is 3, the next value will be 0 since 4 % 4 = 0
        (prevWordOrder) => (prevWordOrder + 1) % wordsToAnimate.length
      )
    }, wordChangeIntervalMs)

    return () => clearInterval(wordTimeout)
  }, [wordChangeIntervalMs, wordsToAnimate])

  return (
    <>
      <span className={`${isFadeIn ? 'fade-in' : 'fade-out'} text-indigo-600`}>
        {wordsToAnimate[wordOrder]}
      </span>
    </>
  )
}
