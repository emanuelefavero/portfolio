import styles from './HeroSection.module.scss'
import Image from 'next/image'
import HeroSocialLinks from './HeroSocialLinks'
import HeroButton from './HeroButton'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

export default function HeroSection() {
  return (
    <>
      <section
        className={`${styles.HeroSection} flex w-full items-start justify-between px-40 pb-24 pt-24`}
      >
        <div className='relative z-30 w-1/2'>
          <HeroText />
          <HeroButton />
          <HeroSocialLinks />
        </div>
        <div className='relative w-1/2'>
          <HeroImage />
        </div>
      </section>
    </>
  )
}
