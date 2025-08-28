import Link from 'next/link'
import Image from 'next/image'
import prismaLogo from '@/public/images/prisma-logo.svg'
import oddaLogo from '@/public/images/odda-logo.svg'

export default function Footer() {
  return (
    <div className='flex justify-center items-center w-full 2xs:px-10 xs:px-20 sm:px-28 md:px-20 lg:px-28 xl:px-40'>
      <div className='flex flex-wrap gap-3 px-4 pb-20 pt-2 font-medium text-slate-700'>
        {/* Copyright */}
        <div className='select-none tracking-widest'>
          © {new Date().getFullYear()}{' '}
          <span className='hidden sm:inline' role='presentation'>•</span>
        </div>

        {/* GitHub Link */}
        <Link
          href='https://github.com/emanuelefavero'
          target='_blank'
          className='flex flex-wrap text-sm tracking-widest text-indigo-600 transition-all duration-150 hover:border-b-2 hover:border-indigo-600 hover:text-indigo-700 4xs:text-base'
        >
          <span className='mr-1'>Emanuele</span>
          <span>Favero</span>
        </Link>

        {/* Partita IVA */}
        <div className='tracking-widest'>
          <span className='select-none mr-2 hidden sm:inline' role='presentation'>•</span>P.IVA: 02079960494
        </div>

        {/* Talent HUB */}
        <div className='flex flex-wrap'>
          <div className='mr-2 select-none'>
            <span className='mr-2 hidden sm:inline' role='presentation'>•</span>Talent HUB:
          </div>
          <Link
            href='https://www.oddastudio.com/business'
            target='_blank'
            className='inline-block relative -top-[3px] bg-opacity-30 transition-all duration-150 hover:scale-105 active:scale-95'
          >
            <Image
              className='inline'
              src={oddaLogo}
              alt='Odda Studio Logo'
              width={64}
              height={24}
              style={{ width: '64px', height: '24px' }}
            />
          </Link>
        </div>

        {/* Partnered with */}
        <div className='flex flex-wrap'>
          <div className='mr-2 select-none'>
            <span className='mr-2 hidden sm:inline' role='presentation'>•</span>Partnered with:
          </div>
          <Link
            href='https://www.prisma.io/?via=emanuelefavero'
            target='_blank'
            className='inline-block bg-opacity-30 transition-all duration-150 hover:scale-105 active:scale-95'
          >
            <Image
              className='inline'
              src={prismaLogo}
              alt='Prisma Logo'
              width={64}
              height={24}
              style={{ width: '64px', height: '24px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
