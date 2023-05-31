import FadeTextEffect from './FadeTextEffect'

export default function HeroText() {
  return (
    <>
      <h2 className='mb-1 text-sm font-semibold uppercase text-slate-500 2xs:text-lg'>
        Hello, I&apos;m Emanuele
      </h2>
      <h1 className='relative -left-1 mb-7 flex flex-col gap-1 text-sm font-extrabold text-slate-900 4xs:text-2xl 3xs:text-3xl 2xs:text-5xl xs:text-6xl md:max-w-xl md:text-6xl xl:text-8xl'>
        <span className='text-indigo-600'>
          <FadeTextEffect />
        </span>{' '}
        Developer
      </h1>
      <p className='mb-8 max-w-screen-3xs text-sm font-semibold leading-normal text-slate-500 2xs:text-xl xs:max-w-screen-2xs sm:max-w-md'>
        Based in Italy • I&apos;m passionate about coding immersive UX/UI
        experiences for the web
      </p>
    </>
  )
}
