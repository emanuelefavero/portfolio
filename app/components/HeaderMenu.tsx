import HamburgerMenu from './HamburgerMenu'
import HeaderMenuItems from './HeaderMenuItems'

export default function HeaderMenu() {
  return (
    <nav className='flex gap-2'>
      {/* HAMBURGER MENU */}
      <div className='block md:hidden'>
        <HamburgerMenu />
      </div>

      {/* HEADER MENU */}
      <ul className='mr-4 hidden select-none items-center justify-center text-lg font-semibold text-slate-700 md:flex lg:text-xl'>
        <HeaderMenuItems />
      </ul>
    </nav>
  )
}
