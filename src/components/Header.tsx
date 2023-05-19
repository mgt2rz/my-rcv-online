import Logo from './Logo'
import Nav from './navigation/Nav'

const Header = () => {
  return (
    <header className='flex justify-between w-full p-1 mb-16 pt-3 border'>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header
