import { useState } from 'react'
import Link from 'next/link'
import { ClientSafeProvider } from 'next-auth/react'
import { Session } from 'next-auth'

interface Props {
  session: Session | null
  providers: Record<any, ClientSafeProvider> | null
  signOut: () => void
  signIn: (provider: string) => void
}

const NavMobile = ({ session, providers, signOut, signIn }: Props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const isLogged = !!session?.user

  return (
    <nav className='sm:hidden flex relative'>
      {isLogged ? (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={session?.user?.image ?? '/assets/images/user.svg'}
              width={37}
              height={37}
              alt='User'
              className='rounded-full'
              
              />
              <button onClick={() => setToggleDropdown(prev => !prev)} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          {toggleDropdown && (
            // <div className='items-center justify-between w-full md:flex md:w-auto md:order-1'>
            //   <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            //   <Link
            //     href='/'
            //     className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page"'
            //     onClick={() => setToggleDropdown(false)}>
            //     Inicio
            //   </Link>
            //   <Link
            //     href='/validate'
            //     className='text font-inter text-gray-700 hover:text-gray-500 font-medium'
            //     onClick={() => setToggleDropdown(false)}>
            //     Validar
            //   </Link>
            //   <Link
            //     href='/profile'
            //     className='text font-inter text-gray-700 hover:text-gray-500 font-medium'
            //     onClick={() => setToggleDropdown(false)}>
            //     Profile
            //   </Link>

            //   <button
            //     type='button'
            //     className='mt-5 w-full bg-black text-white rounded-md'
            //     onClick={() => {
            //       setToggleDropdown(false)
            //       signOut()
            //     }}>
            //     Salir
            //   </button>
            //       </ul>
            // </div>
            <>
            
    <div className="w-full" id="navbar-hamburger">
      <ul className="w-full flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
            </>
          )}
        </div>
      ) : (
        providers &&
            Object.values(providers).map(provider => (
              <button
                type='button'
                key={provider.id}
                className='ml-14 bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded'
                onClick={() => signIn(provider.id)}>
                ACCEDER
              </button>
            ))
      )}
    </nav>
  )
}

export default NavMobile
