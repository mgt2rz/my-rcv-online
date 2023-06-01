import React from 'react'

const CallToAction = () => {
  return (
    <div>
      <div className='mt-10 lg:mt-20 bg-[#fff7f2]'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-12 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-center md:text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block'>¿Tienes alguna duda?</span>
            <span className='block text-orange-400'>Contáctanos</span>
          </h2>
          <div className='text-center mt-8 lex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500'>
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default CallToAction
