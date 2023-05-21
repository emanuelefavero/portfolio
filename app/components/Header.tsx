import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <div
      // TODO:Move this id to the hero section if you change the header to be fixed
      id='home'
      className='flex w-full items-center justify-between bg-slate-200 px-2 py-3'
    >
      <HeaderLogo />
      <HeaderMenu />
    </div>
  )
}
