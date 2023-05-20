import Logo from './Logo'
import Nav from './navigation/Nav'

const Header = () => {
  return (
    <header className='flex justify-between w-full p-1 text-zinc-900 py-3 z-10'>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header
