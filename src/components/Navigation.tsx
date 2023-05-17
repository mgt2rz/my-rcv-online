'use client'

import { useState } from 'react'

import Link from 'next/link'

const Navigation = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const isLogged = false

  return (
    <>
      {/* Desktop */}
      <nav className='sm:flex hidden'>
        {isLogged ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/'>Inicio</Link>
            <Link href='/validate'>Validar</Link>
            <Link href='/profile'>Profile</Link>
            <button type='button' className='' onClick={() => {}}>
              Salir
            </button>
          </div>
        ) : (
          <>
            <button type='button' className='' onClick={() => {}}>
              Acceder
            </button>
          </>
        )}
      </nav>

      {/* Mobile */}
      <nav className='sm:hidden flex relative'>
        {isLogged ? (
          <div className='flex'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src=''
              width={37}
              height={37}
              alt='User'
              className='rounded-full'
              onClick={() => setToggleDropdown(prev => !prev)}
            />
            {toggleDropdown && (
              <div className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end border'>
                <Link
                  href='/'
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                  onClick={() => setToggleDropdown(false)}>
                  Inicio
                </Link>
                <Link
                  href='/validate'
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                  onClick={() => setToggleDropdown(false)}>
                  Validar
                </Link>
                <Link
                  href='/profile'
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                  onClick={() => setToggleDropdown(false)}>
                  Profile
                </Link>
                <button
                  type='button'
                  className='mt-5 w-full bg-black text-white rounded-md'
                  onClick={() => {
                    setToggleDropdown(false)
                  }}>
                  Salir
                </button>
              </div>
            )}
          </div>
        ) : (
          <button type='button' className='' onClick={() => {}}>
            Acceder
          </button>
        )}
      </nav>
    </>
  )
}

export default Navigation
