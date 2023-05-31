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
        id='home'
        className='relative flex w-full items-start justify-between overflow-hidden px-40 pb-24 pt-40 md:px-20 lg:px-28 xl:px-40'
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
