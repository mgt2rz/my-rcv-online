/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders, ClientSafeProvider } from 'next-auth/react'

import Link from 'next/link'


import Logo from './Logo'

const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [providers, setProviders] = useState<Record<any, ClientSafeProvider> | null>(null)

  const { data: session } = useSession()
  const isLogged = !!session?.user

  useEffect(() => {
    const setUpProviders = async () => {
      try {
        const response = await getProviders()
        setProviders(response)
      } catch (error) {
        console.error(error)
      }
    }

    setUpProviders()
  }, [])

  return (
    <header className='flex w-full text-zinc-900'>
      <nav className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="justify-start">
            <Logo />
          </span>
          <button onClick={() => setToggleDropdown(prev => !prev)} data-collapse-toggle="navbar-hamburger" type="button" className="md:hidden inline-flex items-center p-2 ml-3 text-sm text-orange-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-10 h-10" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
          </button>
          <div className="sm:flex gap-3 md:gap-5 hidden">
            <Link className='font-medium py-2 px-4 hover:rounded hover:bg-gray-100' href='/'>
        Inicio
      </Link>
      <Link className='font-medium py-2 px-4 hhover:rounded hover:bg-gray-100' href='/validate'>
        Validar
      </Link>
      {isLogged ? (
        <div className='flex'>
          <Link className='font-medium py-2 px-4 hover:rounded hover:bg-gray-100' href='/profile'>
            Profile
          </Link>
          <button
            type='button'
            className='ml-14 bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded'
            onClick={() => signOut()}>
            SALIR
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session?.user?.image ?? '/assets/images/user.svg'}
            width={40}
            height={40}
            alt='User'
            className='rounded-full'
            onClick={() => {}}
          />
        </div>
      ) : (
        <div className='flex flex-col justify-center'>
          {providers &&
            Object.values(providers).map(provider => (
              <button
                type='button'
                key={provider.id}
                className='ml-14 bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded'
                onClick={() => signIn(provider.id)}>
                ACCEDER
              </button>
            ))}
        </div>
      )}
          </div>
          {toggleDropdown && (
          <div className="w-full z-40" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a href="#" 
                  onClick={() => setToggleDropdown(false)} 
                  className="bg-orange-100 flex text-xl py-4 pl-8 pr-4 text-gray-900 hover:bg-orange-500 hover:text-white rounded dark:bg-blue-600 font-semibold" aria-current="page"
                >
                  {isLogged ? (
                    <>
                      <img
                        src={session?.user?.image ?? '/assets/images/user.svg'}
                        width={37}
                        height={37}
                        alt='User'
                        className='rounded-full w-12 border-2 border-orange-500' 
                      />
                      <p className="text-left ml-8">
                        <div>
                          {session?.user?.name ?? 'Usuario'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {session?.user?.email ?? 'Correo'}
                        </div>
                      </p>
                    </>
                  ) : (
                    <div className="w-full">
                      { providers && Object.values(providers).map(provider => (
                        <p key={provider.id} className="text-left w-full" onClick={() => signIn(provider.id)}>
                          <div className="text-bold">
                            Iniciar sesión
                          </div>
                        </p>
                      ))}
                    </div>
                  )}
                </a>
              </li>
              <li>
                <a href="#" 
                  onClick={() => setToggleDropdown(false)} 
                  className="block text-xl py-4 pl-8 pr-4 text-gray-900 hover:bg-orange-500 hover:text-white rounded dark:bg-blue-600" aria-current="page"
                >
                  Inicio
                </a>
              </li>   
               <li>
                <a href="#" 
                  onClick={() => setToggleDropdown(false)} 
                  className="block text-xl py-4 pl-8 pr-4 text-gray-900 hover:bg-orange-500 hover:text-white rounded dark:bg-blue-600" aria-current="page"
                >
                  Dashboard
                </a>
              </li>           
              <li>
                <a href="#" 
                  onClick={() => setToggleDropdown(false)} 
                  className="block text-xl py-4 pl-8 pr-4 text-gray-900 hover:bg-orange-500 hover:text-white rounded dark:bg-blue-600 font-semibold" aria-current="page"
                >
                  Comprar
                </a>
              </li>
              <li>
                <a href="#" 
                  onClick={() => setToggleDropdown(false)} 
                  className="block text-xl py-4 pl-8 pr-4 text-gray-900 hover:bg-orange-500 hover:text-white rounded dark:bg-blue-600 font-semibold" aria-current="page"
                >
                  Validar
                </a>
              </li>
              <li>
                <a href="#" 
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }} 
                  className="block text-xl py-4 pl-8 pr-4 text-gray-900 bg-orange-200 hover:bg-gray-800 hover:text-white rounded dark:bg-blue-600 font-bold" aria-current="page"
                >
                  Salir
                </a>
              </li>
            </ul>
          </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
