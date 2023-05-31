import React from 'react'

const Validation = () => {
  return (
    <div>
      <div className='mt-10 lg:mt-20 bg-[#fff7f2]'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-12 lg:flex lg:items-center lg:justify-between'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/assets/images/hero_validate.webp' alt='Hero2' className='w-full md:w-2/5' />
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 text-center md:text-left'>
            <span className='block'>¿Ya tienes un <b>RCV</b> con nosotros?</span>
            <span className='block text-orange-400'>Verificalo gratís aquí</span>
          </h2>
          <div className='mt-8 lex lg:mt-0 lg:flex-shrink-0 text-center md:text-left'>
            <div className='inline-flex rounded-md shadow'>
              <a
                href='#'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500'>
                VERIFICAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Validation
