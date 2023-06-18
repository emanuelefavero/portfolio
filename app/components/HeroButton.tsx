'use client'

import styles from './HeroButton.module.scss'
import { Link as ScrollLink } from 'react-scroll'

export default function HeroButton() {
  return (
    <>
      <ScrollLink
        to='contact-me'
        smooth={true}
        offset={110}
        href='/#contact-me'
        className={`${styles.HeroButton} hover:tracking-wide' mb-16 max-w-max select-none rounded-full bg-slate-900 px-2 py-2 text-sm font-bold text-white shadow-sm shadow-indigo-300 3xs:px-6 3xs:text-xl 2xs:mb-24 xs:mb-28`}
      >
        Let&apos;s Talk
      </ScrollLink>
    </>
  )
}
