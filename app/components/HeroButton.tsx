import styles from './HeroButton.module.scss'
import Link from 'next/link'

export default function HeroButton() {
  return (
    <>
      <Link
        href='/#contact-me'
        type='button'
        className={`${styles.HeroButton} hover:tracking-wide' mb-16 max-w-max select-none rounded-full bg-slate-900 px-2 py-2 text-lg font-bold text-white shadow-sm shadow-indigo-300 3xs:px-6 3xs:text-xl 2xs:mb-24 xs:mb-36`}
      >
        Let&apos;s Talk
      </Link>
    </>
  )
}
