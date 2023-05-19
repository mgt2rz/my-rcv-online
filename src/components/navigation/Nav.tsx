'use client'

import { useEffect, useState } from 'react'

import { signIn, signOut, useSession, getProviders, ClientSafeProvider } from 'next-auth/react'
import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'

const Nav = () => {
  const { data: session } = useSession()

  const [providers, setProviders] = useState<Record<any, ClientSafeProvider> | null>(null)

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
    <>
      <NavDesktop session={session} providers={providers} signOut={signOut} signIn={signIn} />

      <NavMobile session={session} providers={providers} signOut={signOut} signIn={signIn} />
    </>
  )
}

export default Nav
