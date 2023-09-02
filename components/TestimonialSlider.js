// testimonial slider data
export const testimonialSlider = [
  {
    image: '/t-avt-2.png',
    name: 'Saadan K',
    position: 'Bespoke PC Build Customer',
    message:
      'Upon contacting Ozair for the assembly of my personal computer build, I was instantaneously reassured of my choice through his intimate knowledge of the various architectures and subsystems involved within the project. My initial nerves were settled throughout the whole process as he calmly explained each step, assuring me that everything was going to plan. Once the build was complete he installed all relevant software and ran a myriad of tests to ensure everything was running efficiently. Finally he adjusted the various software to suit my preferences, before explaining everything I needed to know for future upkeep. I rate this service a 10/10 and will be requesting his services in  any future projects.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Mustafaa N',
    position: 'Server Hosting Customer',
    message:
      'Ozairs gaming servers are a true gem, offering flawless performance, a welcoming community, and a diverse range of game options, from Minecraft modpacks to Ark Survival Evolved and Valheim. His dedication to reliability and his commitment to enhancing gameplay through custom modpacks make his servers a top choice for gamers of all levels.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Mohammed G',
    position: '3D Printing Service Customer',
    message:
      'I ordered a milk crate and I am extremely happy with my purchase. The crate is sturdy and does not flex, good quality and was delivered swiftly. I was able to customise the size, enabling me to select the specific measurements of 6x6x6cm which was the perfect size, as I have been using it to store small items and organise various things. The quality of the item has exceeded my expectations so I highly recommend this seller to anyone who wants something 3D printed.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Will C',
    position: '3D Printing Customer',
    message:
      'I have adhd and I drive a lot for work and I think they are (3D Printed fidget toy) great.',
  },

];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-22 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[300px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
