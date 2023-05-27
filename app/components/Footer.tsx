import Link from 'next/link'

export default function Footer() {
  // TODO: Fix flex responsive on small screens

  return (
    <>
      <div className='flex w-full justify-center gap-2 px-40 pb-20 pt-2 font-medium text-slate-700'>
        <span className='select-none tracking-widest'>
          © {new Date().getFullYear()} •{' '}
        </span>
        <Link
          href='https://github.com/emanuelefavero'
          target='_blank'
          className='tracking-widest text-indigo-600 transition-all duration-150 hover:border-b-2 hover:border-indigo-600 hover:text-indigo-700'
        >
          Emanuele Favero
        </Link>
      </div>
    </>
  )
}
