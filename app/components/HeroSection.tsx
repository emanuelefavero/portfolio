import styles from './HeroSection.module.scss'
import Image from 'next/image'
import HeroSocialLinks from './HeroSocialLinks'
import HeroButton from './HeroButton'
import HeroText from './HeroText'

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

          <div className='absolute -right-16 top-10 text-xl font-medium text-slate-700'>
            <div className='mb-6 w-max rounded-full border-b-2 border-slate-300 bg-slate-300 bg-opacity-30 px-7 py-1'>
              <div className='max-w-[6.3rem]'>
                <span className='text-3xl font-bold'>5+</span> Years Experience
              </div>
            </div>
            <div className='w-max rounded-full border-b-2 border-slate-300 bg-slate-300 bg-opacity-30 px-7 py-1'>
              <div className='max-w-[9.3rem]'>
                <span className='text-3xl font-bold'>170+</span> GitHub
                Repositories
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
