import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <div className='flex w-full items-center justify-between bg-slate-200 px-2 py-3'>
      <HeaderLogo />
      <HeaderMenu />
    </div>
  )
}
