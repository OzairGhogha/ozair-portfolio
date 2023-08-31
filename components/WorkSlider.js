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
          title: 'Cloudflare Tunnel',
          path: '/thumb13.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Home-Server-Web-Self-Hosting-018e93995917468287a025c9443f236d?pvs=4'
        },
        {
          title: 'Windows VM',
          path: '/thumb14.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Self-Hosted-Windows-Virtual-Machines-16b0386b94a94563894ea445ce62202e?pvs=4'
        },
        {
          title: 'Rx-Resume',
          path: '/thumb15.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Self-Hosted-Resume-66371b48159c4dd2ac7cee1c8ff15bfc?pvs=4'
        },
        {
          title: 'Bitwarden',
          path: '/thumb16.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Self-Hosted-Password-Manager-5c194b4eb6f14c1883b0aa57790e2c74?pvs=4'
        },
        {
          title: 'Paperless',
          path: '/thumb17.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Self-Hosted-Document-Management-6fe1baa9be444c48800342bdfbdd7729?pvs=4'
        },
        {
          title: 'Photoprism',
          path: '/thumb18.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Self-Hosted-Photo-Backup-47d9fe1d2f3c4e53b50d3a34f0eb675f?pvs=4'
        },
      ],
      
    },
    {
      images: [
        {
          title: 'Tasmota',
          path: '/thumb19.jpg',
          url:'https://axiomatic-kite-8be.notion.site/IoT-Smart-Power-Management-2b9c0420d4d14ee79f6e96f83e4a1f57?pvs=4'
        },
        {
          title: 'Octoprint Docker',
          path: '/thumb20.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Octoprint-Docker-Setup-0b350b8991a340a7a587bf4b59787d91?pvs=4'
        },
        {
          title: 'Mesh WiFi',
          path: '/thumb21.jpg',
          url:'https://axiomatic-kite-8be.notion.site/Home-Mesh-Wi-Fi-Install-1b7d167062dc44f08d60146f944f6a33?pvs=4'
        },
        {
          title: 'VScode Server',
          path: '/thumb22.jpg',
          url:'https://axiomatic-kite-8be.notion.site/VS-Code-Server-Self-Hosting-957244145a104a0e8438d6edaab29c2a?pvs=4'
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
    }
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
