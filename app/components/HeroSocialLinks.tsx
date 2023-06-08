import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'

export default function HeroSocialLinks() {
  return (
    <>
      <div className='flex select-none items-center justify-start'>
        <Link href='mailto:info@emanuelefavero.com' target='_blank'>
          <MdEmail
            className='mr-5 transform text-2xl text-slate-600 transition-all duration-200 hover:rotate-12 hover:scale-125 hover:text-indigo-600 active:scale-110 active:text-indigo-600'
            aria-label='info@emanuelefavero.com'
            title='info@emanuelefavero.com'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/emanuelefavero' target='_blank'>
          <BsLinkedin
            className='mr-5 transform text-2xl text-slate-600 transition-all duration-200 hover:rotate-12 hover:scale-125 hover:text-indigo-600 active:scale-110 active:text-indigo-600'
            aria-label='linkedin.com/in/emanuelefavero'
            title='linkedin.com/in/emanuelefavero'
          />
        </Link>
        <Link href='https://github.com/emanuelefavero' target='_blank'>
          <BsGithub
            className='mr-5 transform text-2xl text-slate-600 transition-all duration-200 hover:rotate-12 hover:scale-125 hover:text-indigo-600 active:scale-110 active:text-indigo-600'
            aria-label='github.com/emanuelefavero'
            title='github.com/emanuelefavero'
          />
        </Link>
        <Link href='https://t.me/emanuelefavero' target='_blank'>
          <BsTelegram
            className='mr-5 transform text-2xl text-slate-600 transition-all duration-200 hover:rotate-12 hover:scale-125 hover:text-indigo-600 active:scale-110 active:text-indigo-600'
            aria-label='t.me/emanuelefavero'
            title='t.me/emanuelefavero'
          />
        </Link>
      </div>
    </>
  )
}
