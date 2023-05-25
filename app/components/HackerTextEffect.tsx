'use client'
import Script from 'next/script'

export default function HackerTextEffect() {
  return (
    <>
      {/* HACKER TEXT EFFECT */}
      <Script src='/scripts/hackerTextEffect.js' />

      <span className='text-indigo-600' id='hacker-text'>
        Frontend
      </span>
    </>
  )
}
