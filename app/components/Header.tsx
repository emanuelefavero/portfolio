import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex w-full items-center justify-between bg-slate-200 px-3 py-3'>
      <div className='flex items-center justify-center'>
        <Image
          className='mr-4 rounded-full border-2 border-slate-100 shadow-sm shadow-slate-400'
          src='/images/logo-400x400.jpeg'
          alt='logo'
          width={44}
          height={44}
        />
        <span className='text-xl font-semibold'>Emanuele Favero</span>
      </div>
      <ul>Hey</ul>
    </div>
  )
}
