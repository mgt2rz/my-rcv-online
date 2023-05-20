import SvgLayerOne from './SvgLayerOne'
import SvgLayerTwo from './SvgLayerTwo'

const Hero = () => {
  return (
    <div className='flex flex-col bg-white text-zinc-800 md:flex-row relative w-full h-[700px] top-0 z-0'>
      <section className='w-full md:w-1/2 m-auto flex flex-col'>
        <div className='mx-20'>
          <h1 className='text-6xl'>
            Ahora
            <p className='font-semibold'>
              Es muy fácil para tí
              <br />
              adquirir tu RCV
            </p>
          </h1>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Arcu ac tortor dignissim convallis.
          </p>
        </div>
      </section>
      <section className='w-full md:w-1/2 relative flex items-center mr-20'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='hero__main_image w-full relative z-20 aspect-video '
          src='/assets/images/herocar.webp'
          alt='hero car image'
        />

        <SvgLayerOne className='absolute top-0 left-0 z-10' />
        {/* <SvgLayerTwo className=' absolute top-0 left-0 z-0' /> */}
      </section>
    </div>
  )
}

export default Hero
