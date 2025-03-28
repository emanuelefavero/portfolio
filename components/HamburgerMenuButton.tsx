import styles from './HamburgerMenuButton.module.scss'

type Props = {
  isHamburgerMenuOpen: boolean
  setIsHamburgerMenuOpen: (isHamburgerMenuOpen: boolean) => void
}

export default function HamburgerMenuButton({
  isHamburgerMenuOpen,
  setIsHamburgerMenuOpen,
}: Props) {
  return (
    <>
      <button
        role='button'
        aria-label='Open menu'
        className={`${styles.HamburgerMenuButton}`}
        onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
      >
        <div
          className={`${styles.hamburgerLines} ${
            isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ''
          }`}
        >
          <span
            className={`${styles.line} ${styles.line1} ${
              isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ''
            }`}
          ></span>
          <span
            className={`${styles.line} ${styles.line2} ${
              isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ''
            }`}
          ></span>
          <span
            className={`${styles.line} ${styles.line3} ${
              isHamburgerMenuOpen ? styles.hamburgerMenuOpen : ''
            }`}
          ></span>
        </div>
      </button>
    </>
  )
}
