import HamburgerMenuButton from './HamburgerMenuButton'
import HeaderMenuItems from './HeaderMenuItems'

export default function HeaderMenu() {
  return (
    <nav className='flex gap-2'>
      {/* PUT HAMBURGER MENU BUTTON HERE */}
      <HamburgerMenuButton />

      {/* PUT HAMBURGER MENU HERE */}

      {/* Header Menu */}
      <ul className='mr-4 hidden select-none items-center justify-center text-lg font-semibold text-slate-700 md:flex lg:text-xl'>
        <HeaderMenuItems />
      </ul>
    </nav>
  )
}
