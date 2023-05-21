import Link from 'next/link'
import { ClientSafeProvider } from 'next-auth/react'
import { Session } from 'next-auth'

interface Props {
  session: Session | null
  providers: Record<any, ClientSafeProvider> | null
  signOut: () => void
  signIn: (provider: string) => void
}

const NavDesktop = ({ session, providers, signOut, signIn }: Props) => {
  const isLogged = !!session?.user

  return (
    <nav className='sm:flex gap-3 md:gap-5 hidden'>
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
          {/* <img
            src={session?.user?.image ?? '/assets/images/user.svg'}
            width={37}
            height={37}
            alt='User'
            className='rounded-full'
            onClick={() => {}}
          /> */}
        </div>
      ) : (
        <div className='flex flex-col justify-center'>
          {providers &&
            Object.values(providers).map(provider => (
              <button
                type='button'
                key={provider.id}
                className='ml-14 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => signIn(provider.id)}>
                ACCEDER
              </button>
            ))}
        </div>
      )}
    </nav>
  )
}

export default NavDesktop
