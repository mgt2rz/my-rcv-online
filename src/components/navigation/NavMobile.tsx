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
        <div className='flex'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session?.user?.image ?? '/assets/images/user.svg'}
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
                className='text font-inter text-gray-700 hover:text-gray-500 font-medium'
                onClick={() => setToggleDropdown(false)}>
                Inicio
              </Link>
              <Link
                href='/validate'
                className='text font-inter text-gray-700 hover:text-gray-500 font-medium'
                onClick={() => setToggleDropdown(false)}>
                Validar
              </Link>
              <Link
                href='/profile'
                className='text font-inter text-gray-700 hover:text-gray-500 font-medium'
                onClick={() => setToggleDropdown(false)}>
                Profile
              </Link>

              <button
                type='button'
                className='mt-5 w-full bg-black text-white rounded-md'
                onClick={() => {
                  setToggleDropdown(false)
                  signOut()
                }}>
                Salir
              </button>
            </div>
          )}
        </div>
      ) : (
        providers &&
        Object.values(providers).map(provider => (
          <button type='button' key={provider.id} className='' onClick={() => signIn(provider.id)}>
            Acceder
          </button>
        ))
      )}
    </nav>
  )
}

export default NavMobile
