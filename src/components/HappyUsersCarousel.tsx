import Carousel, { ResponsiveType } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

interface HappyUserProps {
  id: number
  image: string
  name: string
  location: string
  quote: string
}

const HappyUsersCarousel = ({ responsive, users }: { responsive: ResponsiveType; users: HappyUserProps[] }) => {
  return (
    <Carousel
      centerMode
      focusOnSelect
      slidesToSlide={5}
      swipeable
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      autoPlay
      autoPlaySpeed={6000}
      keyBoardControl
      customTransition='ease-in-out .7'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'>
      {users &&
        users.map(user => (
          <div key={user.id} className='text-center flex flex-col justify-center items-center mx-2 md:mx-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/images/${user.image}`}
              alt={user.image}
              className='w-[160px] md:w-[200px] aspect-square border-8 rounded-full border-orange-400 shadow-xl shadow-gray-300'
            />
            <h3 className='mt-4 font-bold text-lg'>{user.name}</h3>
            <h6 className='text-xs text-gray-500'>{user.location}</h6>
            <q className='mt-4 text-sm text-gray-600'>{user.quote}</q>
          </div>
        ))}
    </Carousel>
  )
}

export default HappyUsersCarousel
