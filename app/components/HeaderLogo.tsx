'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HeaderLogo() {
  const router = useRouter()

  return (
    <button
      type='button'
      className='flex cursor-pointer items-center justify-center'
      onClick={() => router.push('/')}
    >
      <Image
        className='mr-4 rounded-full border-2 border-slate-100 shadow-sm shadow-slate-400'
        src='/images/logo-400x400.jpeg'
        alt='logo'
        width={44}
        height={44}
      />
      <span className='text-xl font-semibold text-slate-900'>
        Emanuele Favero
      </span>
    </button>
  )
}
