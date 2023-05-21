import styles from './ScrollDownButton.module.scss'

export default function ScrollDownButton() {
  return (
    <>
      <a
        href='#projects'
        className={`${styles.ScrollDownButton} absolute bottom-3 right-4 z-50 text-4xl font-medium text-indigo-500`}
      >
        ↓
      </a>
    </>
  )
}
