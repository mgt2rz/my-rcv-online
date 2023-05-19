import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <span className='text text-gray-500'>mi</span>
      <span className='font-semibold text-2xl'>RCV</span>
    </Link>
  )
}

export default Logo
