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
        className='relative flex w-full flex-col items-start justify-between overflow-hidden px-4 pb-24 pt-40 2xs:px-10 xs:px-20 sm:px-28 md:flex-row md:px-20 lg:px-28 xl:px-40'
      >
        <div className='relative z-30 mb-10 w-full md:mb-4 md:w-1/2'>
          <HeroText />
          <HeroButton />
          <HeroSocialLinks />
        </div>
        <div className='relative hidden w-full 3xs:block md:w-1/2'>
          <HeroImage numberOfRepositories={numberOfRepositories} />
        </div>
      </section>
    </>
  )
}
