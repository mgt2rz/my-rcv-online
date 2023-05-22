'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const HappyUsers = () => {
  return (
    <div className='text-gray-700 min-h-fit p-8 mt-8 md:mt-20 lg:mt-32'>
      <header className='text-center'>
        <h2 className='text-4xl font-semibold mb-4'>Usuarios felices</h2>
        <p className='text-base'>
          El testimonio de nuestros usuarios satisfechos te contagiará de alegría.
          <br />
          <span className='font-medium'>¡No esperes más para vivir la experiencia que mereces!</span>
        </p>
      </header>
      <div className='mt-20'>
        <Carousel
          centerMode
          focusOnSelect
          slidesToSlide={5}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr // means to render carousel on server-side.
          infinite
          autoPlay
          autoPlaySpeed={4000}
          keyBoardControl
          customTransition='ease-in-out .7'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'>
          <div className='text-center flex flex-col justify-center items-center mx-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/images/happyuser01.webp'
              alt='happy_user_01'
              className='w-[200px] h-[200px] border-8 rounded-full border-orange-400 shadow-xl shadow-gray-300'
            />
            <h3 className='mt-4 font-bold text-lg'>María Fernández</h3>
            <h6 className='text-xs text-gray-500'>Caracas, Venezuela</h6>
            <q className='mt-4 text-sm text-gray-600'>
              Adquirir un RCV ha sido una excelente decisión. Como conductora responsable, valoro la tranquilidad que me
              brinda saber que estoy protegida en caso de cualquier incidente con mi vehículo.
            </q>
          </div>

          <div className='text-center flex flex-col justify-center items-center mx-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/images/happy_user_02.webp'
              alt='happy_user_01'
              className='w-[200px] h-[200px] border-8 rounded-full border-orange-400 shadow-xl shadow-gray-300'
            />
            <h3 className='mt-4 font-bold text-lg'>Eduardo Rojas</h3>
            <h6 className='text-xs text-gray-500'>Valencia, Venezuela</h6>
            <q className='mt-4 text-sm text-gray-600'>
              Comprar un RCV para mi moto ha sido una de las mejores inversiones que he realizado. Fue un proceso rápido
              y sencillo.
            </q>
          </div>

          <div className='text-center flex flex-col justify-center items-center mx-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/images/happy_user_03.webp'
              alt='happy_user_01'
              className='w-[200px] h-[200px] border-8 rounded-full border-orange-400 shadow-xl shadow-gray-300'
            />
            <h3 className='mt-4 font-bold text-lg'>Pedro González</h3>
            <h6 className='text-xs text-gray-500'>Barquisimeto, Venezuela</h6>
            <q className='mt-4 text-sm text-gray-600'>
              Como conductor de un autobús de transporte público, la seguridad de mis pasajeros es mi máxima prioridad.
              Adquirir un RCV ha sido fundamental para garantizar que, en caso de algún incidente, cuento con la
              protección necesaria para cubrir cualquier daño a terceros.
            </q>
          </div>
          <div className='text-center flex flex-col justify-center items-center mx-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/images/happy_user_04.webp'
              alt='happy_user_04'
              className='w-[200px] h-[200px] border-8 rounded-full border-orange-400 shadow-xl shadow-gray-300'
            />
            <h3 className='mt-4 font-bold text-lg'>Luisa Martínez</h3>
            <h6 className='text-xs text-gray-500'>Maracaibo, Venezuela</h6>
            <q className='mt-4 text-sm text-gray-600'>
              Como propietaria de un camión de carga, necesitaba asegurar mi responsabilidad ante posibles daños
              ocasionados a terceros. El RCV me ha brindado la tranquilidad que buscaba.
            </q>
          </div>
          <div className='text-center flex flex-col justify-center items-center mx-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/images/happy_user_05.webp'
              alt='happy_user_05'
              className='w-[200px] h-[200px] border-8 rounded-full border-orange-400 shadow-xl shadow-gray-300'
            />
            <h3 className='mt-4 font-bold text-lg'>Alejandro Pérez</h3>
            <h6 className='text-xs text-gray-500'>Maracay, Venezuela</h6>
            <q className='mt-4 text-sm text-gray-600'>
              Adquirir un RCV ha sido una excelente decisión. Como conductor responsable, valoro la tranquilidad que me
              brinda saber que estoy protegida en caso de cualquier incidente con mi vehículo.
            </q>
          </div>
          <div className='text-center flex flex-col justify-center items-center mx-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/images/happy_user_06.webp'
              alt='happy_user_06'
              className='w-[200px] h-[200px] border-8 rounded-full border-orange-400 shadow-xl shadow-gray-300'
            />
            <h3 className='mt-4 font-bold text-lg'>Javier Gomez</h3>
            <h6 className='text-xs text-gray-500'>Puerto Ordaz, Venezuela</h6>
            <q className='mt-4 text-sm text-gray-600'>
              Estoy muy feliz con mi RCV y lo recomendaría a todos los conductores que buscan asegurar su
              responsabilidad y su tranquilidad.
            </q>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default HappyUsers
