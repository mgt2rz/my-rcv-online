import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <span className=''>
      <Link href='/'>
        <span className='font-bold text-2xl'>RCV</span>
        <span className='font-semibold text-2xl text-orange-500'>ONLINE</span>
      </Link>
    </span>
  )
}

export default Logo
