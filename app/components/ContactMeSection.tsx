import Image from 'next/image'
import Link from 'next/link'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

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
        <div className='mb-20 flex w-full max-w-screen-xl flex-row flex-wrap items-start justify-start gap-8 px-20'>
          {/* GMAIL CARD */}
          <Link
            className='flex w-[22.18rem] items-center justify-center rounded-2xl border-t-2 border-indigo-50/10 bg-[#DE4033]/20 px-5 py-2 text-indigo-50 shadow-md shadow-black/30 transition-all duration-150 hover:scale-[1.015] hover:bg-[#DE4033]/25 active:scale-[0.985] active:bg-[#DE4033]/20 active:text-indigo-400'
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

        {/* QR CODES */}
        <div className='mb-5 flex w-full select-none flex-wrap justify-end gap-5'>
          <div className='rounded-xl border-b border-[#242b87] bg-[#1d226f] shadow-sm shadow-[#0d0f35]'>
            <Image
              src='/images/qr-codes/qr-code-github.webp'
              alt='GitHub QR Code'
              width={80}
              height={80}
              className='mb-[2px] rounded-xl border-b-2 border-indigo-500'
            />
            <div className='px-[2px] pb-[2px] text-center text-sm font-medium uppercase'>
              Scan Me
            </div>
          </div>
          <div className='rounded-xl border-b border-[#242b87] bg-[#1d226f] shadow-sm shadow-[#0d0f35]'>
            <Image
              src='/images/qr-codes/qr-code-linkedin.webp'
              alt='Linkedin QR Code'
              width={80}
              height={80}
              className='mb-[2px] rounded-xl border-b-2 border-indigo-500'
            />
            <div className='px-[2px] pb-[2px] text-center text-sm font-medium uppercase'>
              Scan Me
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
