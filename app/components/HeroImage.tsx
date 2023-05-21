import Image from 'next/image'
import HeroInfo from './HeroInfo'

interface Props {
  numberOfRepositories: number
}

export default function HeroImage({ numberOfRepositories }: Props) {
  return (
    <>
      <Image
        className='absolute -bottom-20 left-1/2 -translate-x-1/2 scale-150 transform select-none opacity-25'
        src='/images/hero-blob.svg'
        alt='Hero Blob'
        width={1000}
        height={1000}
      />

      <Image
        className='relative -bottom-4 -left-2 select-none'
        src='/images/hero-image.png'
        alt='Emanuele Favero'
        width={1000}
        height={1000}
      />

      <HeroInfo numberOfRepositories={numberOfRepositories} />
    </>
  )
}
