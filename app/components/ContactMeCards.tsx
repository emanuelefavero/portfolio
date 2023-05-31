import Link from 'next/link'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

// NOTE: I avoided creating a separate component for each card because it would require a more complex code for handling custom colors (and color hover, active states) in tailwind

export default function ContactMeCards() {
  return (
    <>
      <div className='mb-20 flex w-full max-w-screen-xl flex-row flex-wrap items-start justify-start gap-8'>
        {/* GMAIL CARD */}
        <Link
          className='flex w-[22.18rem] items-center justify-center rounded-2xl border-t-2 border-indigo-50/10 bg-[#DE4033]/20 py-2 text-indigo-50 shadow-md shadow-black/30 transition-all duration-150 hover:scale-[1.015] hover:bg-[#DE4033]/25 active:scale-[0.985] active:bg-[#DE4033]/20 active:text-indigo-400'
          href='mailto:info@emanuelefavero.com'
          target='_blank'
        >
          <SiGmail
            className='mr-5 select-none text-4xl'
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

        {/* LINKEDIN CARD */}
        <Link
          className='flex w-[22.18rem] items-center justify-start rounded-2xl border-t-2 border-indigo-50/10 bg-[#0B65C2]/20 px-5 py-2 text-indigo-50 shadow-md shadow-black/30 transition-all duration-150 hover:scale-[1.015] hover:bg-[#0B65C2]/25 active:scale-[0.985] active:bg-[#0B65C2]/20 active:text-indigo-400'
          href='https://linkedin.com/in/emanuelefavero'
          target='_blank'
        >
          <BsLinkedin
            className='mr-5 select-none text-4xl'
            aria-label='Linkedin'
            title='Linkedin'
          />
          <div>
            <h5 className='mb-1 font-medium uppercase text-[#a5b0d4]/80'>
              Linkedin
            </h5>
            <p className='text-xl font-semibold'>in/emanuelefavero</p>
          </div>
        </Link>

        {/* GITHUB CARD */}
        <Link
          className='flex w-[22.18rem] items-center justify-start rounded-2xl border-t-2 border-indigo-50/10 bg-[#000]/20 px-5 py-2 text-indigo-50 shadow-md shadow-black/30 transition-all duration-150 hover:scale-[1.015] hover:bg-[#000]/25 active:scale-[0.985] active:bg-[#000]/20 active:text-indigo-400'
          href='https://github.com/emanuelefavero'
          target='_blank'
        >
          <BsGithub
            className='mr-5 select-none text-4xl'
            aria-label='GitHub'
            title='GitHub'
          />
          <div>
            <h5 className='mb-1 font-medium uppercase text-[#a5b0d4]/80'>
              GitHub
            </h5>
            <p className='text-xl font-semibold'>emanuelefavero</p>
          </div>
        </Link>

        {/* TELEGRAM CARD */}
        <Link
          className='flex w-[22.18rem] items-center justify-start rounded-2xl border-t-2 border-indigo-50/10 bg-[#2098D1]/20 px-5 py-2 text-indigo-50 shadow-md shadow-black/30 transition-all duration-150 hover:scale-[1.015] hover:bg-[#2098D1]/25 active:scale-[0.985] active:bg-[#2098D1]/20 active:text-indigo-400'
          href='https://t.me/emanuelefavero'
          target='_blank'
        >
          <BsTelegram
            className='mr-5 select-none text-4xl'
            aria-label='Telegram'
            title='Telegram'
          />
          <div>
            <h5 className='mb-1 font-medium uppercase text-[#a5b0d4]/80'>
              Telegram
            </h5>
            <p className='text-xl font-semibold'>t.me/emanuelefavero</p>
          </div>
        </Link>

        {/* TWITTER CARD */}
        <Link
          className='flex w-[22.18rem] items-center justify-start rounded-2xl border-t-2 border-indigo-50/10 bg-[#1B93E3]/20 px-5 py-2 text-indigo-50 shadow-md shadow-black/30 transition-all duration-150 hover:scale-[1.015] hover:bg-[#1B93E3]/25 active:scale-[0.985] active:bg-[#1B93E3]/20 active:text-indigo-400'
          href='https://twitter.com/emanuele_dev'
          target='_blank'
        >
          <BsTwitter
            className='mr-5 select-none text-4xl'
            aria-label='Twitter'
            title='Twitter'
          />
          <div>
            <h5 className='mb-1 font-medium uppercase text-[#a5b0d4]/80'>
              Twitter
            </h5>
            <p className='text-xl font-semibold'>emanuele_dev</p>
          </div>
        </Link>
      </div>
    </>
  )
}
