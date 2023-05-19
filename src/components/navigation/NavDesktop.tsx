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
    <nav className='sm:flex hidden'>
      {isLogged ? (
        <div className='flex gap-3 md:gap-5'>
          <Link href='/'>Inicio</Link>
          <Link href='/validate'>Validar</Link>
          <Link href='/profile'>Profile</Link>
          <button type='button' className='' onClick={() => signOut()}>
            Salir
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session?.user?.image ?? '/assets/images/user.svg'}
            width={37}
            height={37}
            alt='User'
            className='rounded-full'
            onClick={() => {}}
          />
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

export default NavDesktop
