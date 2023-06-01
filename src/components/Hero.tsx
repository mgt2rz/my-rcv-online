'use client'
import Link from 'next/link'
// import SvgLayerOne from './SvgLayerOne'

const Hero = () => {
  return (
    <div className='flex flex-col bg-white text-zinc-800 md:flex-row relative w-full h-fit md:h-[700px] lg:h-[800px] top-0 z-0 text-center md:text-left'>
      <section className='w-full md:w-1/3 m-auto flex flex-col md:ml-10 z-20 mt-10'>
        <div className='ml-2 sm:ml-8'>
          <h1 className='font-extralight text-4xl sm:text-6xl md:mt-24'>
            Ahora
            <p className='font-normal'>
              es muy fácil para tí adquirir tu <span className='font-semibold'>RCV</span>
            </p>
          </h1>
          <p className='mt-6 mx-8 md:mx-0'>
            La forma más fácil de adquirir tu <span className='font-semibold'>RCV</span>, con la mejor asesoría y al mejor precio del mercado.{` `}
            <span className='font-semibold'>¡No esperes más!</span>
          </p>

          <div className='mt-16'>
            <Link
              href='/profile'
              className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded relative overflow-hidden group hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400  hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300'>
              Comprar
            </Link>
          </div>
        </div>
      </section>
      <section className='w-full md:w-2/3 relative flex items-center z-10'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className='w-full relative z-20' src='/assets/images/hero_img.webp' alt='hero car image' />
      </section>
    </div>
  )
}

export default Hero
