import styles from './HeroSection.module.scss'
import HeroSocialLinks from './HeroSocialLinks'
import HeroButton from './HeroButton'
import HeroText from './HeroText'

export default function HeroSection() {
  return (
    <>
      <section
        className={`${styles.HeroSection} flex w-full items-start justify-between px-40 pb-24 pt-24`}
      >
        <div className='w-1/2'>
          <HeroText />
          <HeroButton />
          <HeroSocialLinks />
        </div>
        <div className='w-1/2'>
          <h2>Image</h2>
        </div>
      </section>
    </>
  )
}
