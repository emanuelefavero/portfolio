'use client'
import Script from 'next/script'

export default function HackerTextEffect() {
  return (
    <>
      <Script src='/scripts/hackerTextEffect.js' />

      <span className='text-indigo-600' id='hacker-text'>
        Frontend
      </span>
    </>
  )
}
