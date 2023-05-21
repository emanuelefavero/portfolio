import styles from './HeaderMenu.module.scss'
import Link from 'next/link'

export default function HeaderMenu() {
  return (
    <ul className='mr-4 flex select-none items-center justify-center text-xl font-semibold text-slate-700'>
      <li className='mr-6'>
        <Link
          href='#projects'
          // TIP: We added rounded-sm to style the accessibility focus outline
          className={`${styles.linkHoverLineAnimation} relative rounded-sm active:text-slate-600`}
        >
          Projects
        </Link>
      </li>
      <li className='mr-6'>
        <Link
          href='#skills'
          className={`${styles.linkHoverLineAnimation} relative rounded-sm active:text-slate-600`}
        >
          Skills
        </Link>
      </li>
      <li className='mr-6'>
        <Link
          href='/emanuele-favero-CV.pdf'
          target='_blank'
          className={`${styles.linkHoverLineAnimation} relative rounded-sm active:text-slate-600`}
        >
          Download CV
        </Link>
      </li>
      <li>
        <Link
          href='#contact-me'
          className='relative transform rounded-full border-b border-slate-300 bg-slate-50 px-4 py-2 shadow-sm shadow-slate-400 transition-all duration-100 hover:bg-slate-100 hover:text-slate-600 active:top-[1px] active:shadow-none'
        >
          <span
            className='bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent
          '
          >
            Contact Me
          </span>
        </Link>
      </li>
    </ul>
  )
}
