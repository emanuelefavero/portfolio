import animations from '@/app/styles/animations.module.scss'

import HeroSocialLinks from './HeroSocialLinks'
import HeroButton from './HeroButton'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

interface Props {
  numberOfRepositories: number
}

export default function HeroSection({ numberOfRepositories }: Props) {
  return (
    <>
      <section
        className={`${animations.fadeIn} relative flex w-full items-start justify-between px-40 pb-24 pt-24`}
      >
        <div className='relative z-30 w-1/2'>
          <HeroText />
          <HeroButton />
          <HeroSocialLinks />
        </div>
        <div className='relative w-1/2'>
          <HeroImage numberOfRepositories={numberOfRepositories} />
        </div>
      </section>
    </>
  )
}
