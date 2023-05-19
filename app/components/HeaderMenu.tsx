import Link from 'next/link'

export default function HeaderMenu() {
  return (
    <ul className='mr-4 flex items-center justify-center text-xl font-semibold text-slate-700'>
      <li className='mr-6'>
        <Link href='#portfolio'>Portfolio</Link>
      </li>
      <li className='mr-6'>
        <Link href='#skills'>Skills</Link>
      </li>
      <li className='mr-6'>
        <Link href='/emanuele-favero-CV.pdf' target='_blank'>
          Download CV
        </Link>
      </li>
      <li>
        <Link
          href='#contact-me'
          className='relative transform rounded-full border-b border-slate-300 bg-slate-50 px-4 py-2 shadow-sm shadow-slate-400 transition-all duration-100 hover:bg-slate-100 hover:text-slate-600 active:top-[1px] active:shadow-none'
        >
          Contact Me
        </Link>
      </li>
    </ul>
  )
}
