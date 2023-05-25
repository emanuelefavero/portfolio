import styles from './HeroButton.module.scss'

export default function HeroButton() {
  return (
    <>
      <button
        type='button'
        className={`${styles.HeroButton} hover:tracking-wide' mb-36 select-none rounded-full bg-slate-900 px-6 py-2 text-xl font-bold text-white shadow-sm shadow-indigo-300`}
      >
        Let&apos;s Talk
      </button>
    </>
  )
}
