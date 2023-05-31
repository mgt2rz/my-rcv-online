'use client'

import HappyUsersCarousel from './HappyUsersCarousel'

import { responsive } from '@/data/carouselResponsive'
import { users } from '@/data/happyusers'

const HappyUsers = () => {
  return (
    <div className='text-gray-700 min-h-fit p-0 md:p-8 mt-20 md:mt-8 md:mt-20 lg:mt-32'>
      <header className='text-center'>
        <h2 className='text-4xl font-semibold mb-4'>Usuarios felices</h2>
        <p className='text-base'>
          El testimonio de nuestros usuarios satisfechos te contagiará de alegría.
          <br />
          <span className='font-medium'>¡No esperes más para vivir la experiencia que mereces!</span>
        </p>
      </header>
      <div className='mt-20'>
        <HappyUsersCarousel responsive={responsive} users={users} />
      </div>
    </div>
  )
}

export default HappyUsers
