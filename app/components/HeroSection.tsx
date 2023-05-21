import styles from './HeroSection.module.scss'
import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'

export default function HeroSection() {
  return (
    <>
      <section
        className={`${styles.HeroSection} flex w-full items-start justify-between px-40 pb-24 pt-24`}
      >
        <div className='w-1/2'>
          <h2 className='text-lg font-semibold uppercase text-slate-500'>
            Hello, I&apos;m Emanuele
          </h2>
          <h1 className='relative -left-1 mb-7 flex max-w-xl flex-col gap-2 text-8xl font-extrabold text-slate-900'>
            <span className='text-indigo-600'>Frontend</span>Developer
          </h1>
          <p className='mb-8 max-w-md text-xl font-semibold leading-normal text-slate-500'>
            Based in Italy • I&apos;m passionate about coding immersive UX/UI
            experiences for the web
          </p>
          <button
            className='mb-36 rounded-full bg-slate-900 px-6 py-2 text-xl font-bold text-white'
            type='button'
          >
            Let&apos;s Talk
          </button>
          <nav className='flex items-center justify-start'>
            <MdEmail className='mr-5 text-2xl text-slate-700' />
            <BsLinkedin className='mr-5 text-xl text-slate-700' />
            <BsGithub className='mr-5 text-xl text-slate-700' />
            <BsTelegram className='mr-5 text-xl text-slate-700' />
          </nav>
        </div>
        <div className='w-1/2'>
          <h2>Image</h2>
        </div>
      </section>
    </>
  )
}
