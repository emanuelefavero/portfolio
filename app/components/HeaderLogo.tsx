import styles from './HeaderLogo.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/public/images/logo-400x400.jpeg'

export default function HeaderLogo() {
  return (
    <Link
      href='/'
      className={`${styles.HeaderLogo} flex cursor-pointer items-center justify-center rounded-lg px-2 py-1 text-xl font-bold text-slate-900`}
    >
      <Image
        className='mr-4 select-none rounded-full border-2 border-slate-100 shadow-sm shadow-slate-400'
        src={logoImage}
        alt='logo'
        width={44}
        height={44}
      />
      <span>Emanuele Favero</span>
    </Link>
  )
}
