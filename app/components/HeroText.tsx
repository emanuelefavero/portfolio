import AnimatedText from './AnimatedText'

export default function HeroText() {
  return (
    <>
      <h2 className='text-lg font-semibold uppercase text-slate-500'>
        Hello, I&apos;m Emanuele
      </h2>
      <h1 className='relative -left-1 mb-7 flex max-w-xl flex-col gap-1 text-8xl font-extrabold text-slate-900'>
        <AnimatedText /> Developer
      </h1>
      <p className='mb-8 max-w-md text-xl font-semibold leading-normal text-slate-500'>
        Based in Italy • I&apos;m passionate about coding immersive UX/UI
        experiences for the web
      </p>
    </>
  )
}
