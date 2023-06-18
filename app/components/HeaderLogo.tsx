import styles from './HeaderLogo.module.scss'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'
import logoImage from '@/public/images/logo-400x400.jpeg'

export default function HeaderLogo() {
  return (
    <ScrollLink
      to='home'
      smooth={true}
      offset={-10}
      className={`${styles.HeaderLogo} flex cursor-pointer items-center justify-center rounded-lg px-2 py-1 text-lg font-bold text-slate-900 3xs:text-xl`}
    >
      <Image
        className='mr-4 hidden select-none rounded-full border-2 border-slate-100 shadow-sm shadow-slate-400 3xs:block'
        src={logoImage}
        alt='logo'
        width={44}
        height={44}
      />
      <span>Emanuele Favero</span>
    </ScrollLink>
  )
}
