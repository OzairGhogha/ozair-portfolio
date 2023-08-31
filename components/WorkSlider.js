// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Homelab',
          path: '/thumb1.jpg',
          url: 'https://axiomatic-kite-8be.notion.site/Homelab-Server-Build-04c6d5c5f5954576935f9fe31442d753?pvs=4'
        },
        {
          title: 'Docker Monitoring',
          path: '/thumb2.jpg',
          url: 'https://axiomatic-kite-8be.notion.site/Docker-Service-Monitoring-52b07a01bd56432e896640cfeb68bb98?pvs=4'
        },
        {
          title: 'Hack Camp',
          path: '/thumb3.jpg',
          url: 'https://axiomatic-kite-8be.notion.site/University-Hack-Camp-With-Client-Fanatics-9d080b97870a4f5899af9d10b2ebc9ee?pvs=4'
        },
        {
          title: 'AdGuard Home Setup',
          path: '/thumb4.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Home-Network-Ad-Tracker-Blocking-Using-DNS-4e61509f5f614f4a9841a8ce66ca9b29?pvs=4'
        },
        {
          title: 'S3 Backup',
          path: '/thumb5.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Homelab-Backup-Automation-to-S3-97c1aa9f8fb5426a878467cb2a019e09?pvs=4'
        },
        {
          title: 'FYP',
          path: '/thumb6.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Photogrammetrical-Driving-Simulator-073757070a1d4de096ba8f3894a64c96?pvs=4'
        },
        {
          title: 'Packet Tracer',
          path: '/thumb7.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Cisco-Packet-Tracer-Labs-81ae2f5ce08c4f26a3c3261148e62802?pvs=4'
        },
        {
          title: 'PC Build',
          path: '/thumb8.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Gaming-PC-Build-0cc6aac3aed74c93bb44b63dce265076?pvs=4'
        },
        {
          title: 'RPI NAS',
          path: '/thumb9.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Raspberry-Pi-NAS-d7abdcfa634d46798233f988ebd8697d?pvs=4'
        },
        
      ],
    },
    {
      images: [
        {
          title: 'Game Servers',
          path: '/thumb10.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Self-Hosted-Game-Servers-03a05d0e48e641c3af0709ce6422f206?pvs=4'
        },

        {
          title: 'Tailscale',
          path: '/thumb11.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Secure-Remote-Homelab-Access-faafd27bc7a640e8b0660d140655bf1a?pvs=4'
        },
        {
          title: 'Plex',
          path: '/thumb12.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Plex-Media-Server-Stack-Setup-3094a21d5fc441caac43278d2c50ff6f?pvs=4'
        },
        {
          title: '',
          path: '/thumb.jpg',
          url:''
        },
        {
          title: '',
          path: '/thumb.jpg',
          url:''
        },
        {
          title: '',
          path: '/thumb.jpg',
          url:''
        },
        {
          title: '',
          path: '/thumb.jpg',
          url:''
        },
        {
          title: '',
          path: '/thumb.jpg',
          url:''
        },
        {
          title: '',
          path: '/thumb.jpg',
          url:''
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-3 grid-rows-3 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <a
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                    href={image.url}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>VIEW</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            ON NOTION
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
