'use client'

import styles from './HeaderLogo.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HeaderLogo() {
  const router = useRouter()

  return (
    <button
      type='button'
      className={`${styles.HeaderLogo} flex cursor-pointer items-center justify-center rounded-lg px-2 py-1 text-xl font-bold text-slate-900`}
      onClick={() => router.push('/')}
    >
      <Image
        className='mr-4 select-none rounded-full border-2 border-slate-100 shadow-sm shadow-slate-400'
        src='/images/logo-400x400.jpeg'
        alt='logo'
        width={44}
        height={44}
      />
      <span>Emanuele Favero</span>
    </button>
  )
}
