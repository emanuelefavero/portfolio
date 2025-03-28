import Link from 'next/link'
import Image from 'next/image'
import prismaLogo from '@/public/images/prisma-logo.svg'

export default function Footer() {
  // TODO: Fix flex responsive on small screens

  return (
    <>
      <div className='flex w-full flex-col justify-center gap-2 px-4 pb-20 pt-2 font-medium text-slate-700 2xs:px-10 xs:px-20 sm:flex-row sm:px-28 md:px-20 lg:px-28 xl:px-40'>
        <span className='select-none tracking-widest'>
          © {new Date().getFullYear()}{' '}
          <span className='hidden sm:inline'>•</span>
        </span>
        <Link
          href='https://github.com/emanuelefavero'
          target='_blank'
          className='flex flex-col text-sm tracking-widest text-indigo-600 transition-all duration-150 hover:border-b-2 hover:border-indigo-600 hover:text-indigo-700 4xs:text-base 3xs:flex-row'
        >
          <span className='mr-1'>Emanuele</span>
          <span>Favero</span>
        </Link>

        <span>
          <span className='mr-2 select-none'>
            <span className='mr-2 hidden sm:inline'>•</span>Partnered with:
          </span>
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
        </span>
      </div>
    </>
  )
}
