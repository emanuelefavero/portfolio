import Image from 'next/image'
import HeroInfo from './HeroInfo'
import heroImage from '@/public/images/hero-image.png'
import heroBlob from '@/public/images/hero-blob.svg'

interface Props {
  numberOfRepositories: number
}

export default function HeroImage({ numberOfRepositories }: Props) {
  return (
    <>
      {/* Hero Blob */}
      <Image
        className='absolute -bottom-20 left-1/2 -translate-x-1/2 scale-150 transform select-none opacity-25'
        src={heroBlob}
        alt='Hero Blob'
        width={1000}
        height={1000}
      />
      {/* Hero Image */}
      <Image
        className='relative -bottom-4 -left-2 select-none'
        src={heroImage}
        alt='Emanuele Favero'
        width={1000}
        height={1000}
      />
      <HeroInfo numberOfRepositories={numberOfRepositories} />
    </>
  )
}
