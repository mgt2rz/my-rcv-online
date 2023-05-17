import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='flex justify-between w-full mb-16 pt-3'>
      <Logo />
      <Navigation session='' />
    </header>
  )
}

export default Header
