import styles from './HeroButton.module.scss'
import Link from 'next/link'

export default function HeroButton() {
  return (
    <>
      <Link
        href='/#contact-me'
        type='button'
        className={`${styles.HeroButton} hover:tracking-wide' mb-36 max-w-max select-none rounded-full bg-slate-900 px-6 py-2 text-xl font-bold text-white shadow-sm shadow-indigo-300`}
      >
        Let&apos;s Talk
      </Link>
    </>
  )
}
