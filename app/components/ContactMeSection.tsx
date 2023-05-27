import { SiGmail } from 'react-icons/si'
import Link from 'next/link'

export default function ContactMeSection() {
  return (
    <>
      <section
        id='contact-me'
        className='dark relative -top-28 flex w-full flex-col items-start justify-start border-y-4 border-indigo-800 px-40 pb-44 pt-32 text-indigo-50'
      >
        <h3 className='mb-8 text-2xl font-bold text-indigo-500'>Contact Me</h3>
        <h2 className='mb-36 text-4xl font-extrabold text-indigo-50'>
          Get in Touch
        </h2>

        {/* CONTACT ME CARDS */}
        <div className='flex w-full flex-row items-start justify-start'>
          {/* TODO: Separate the following to dynamic component called ContactMeCard: Props = icon, href, color, title, displayedLink */}
          <Link
            className='flex items-center justify-center rounded-2xl border-t-2 border-indigo-50/10 bg-[#DE4033]/20 px-5 py-2 text-indigo-50 shadow-md shadow-black/30 transition-all duration-150 hover:scale-[1.015] hover:bg-[#DE4033]/25 active:scale-[0.985] active:bg-[#DE4033]/20 active:text-indigo-400'
            href='mailto:info@emanuelefavero.com'
            target='_blank'
          >
            <SiGmail
              className='mr-5 select-none text-5xl'
              aria-label='Gmail'
              title='Gmail'
            />
            <div>
              <h5 className='mb-1 font-medium uppercase text-[#a5b0d4]/80'>
                Email
              </h5>
              <p className='text-xl font-semibold'>info@emanuelefavero.com</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
