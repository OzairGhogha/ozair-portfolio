// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';


// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 md:pt-10 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Hi, I’m Ozair, <br /> a{' '}
            <span className='text-accent'>Cloud Engineer</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-sm md:text-base max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-6'
          >
             I have 7 years of expertise in designing and implementing networks, custom bespoke systems, and providing IT consultation services. I specialise in networking and cloud technologies, and I hold a Bachelor’s degree with Honours in Computer Science, along with Cisco Networking and Microsoft AI/ML certifications. I’m also pursuing additional certifications in the Microsoft Azure and AWS domains to further enhance my skill set. 
          </motion.p>
          {/* Add another paragraph */}
<motion.p
  variants={fadeIn('down', 0.5)} // You can customize animation for this paragraph
  initial='hidden'
  animate='show'
  exit='hidden'
  className='text-sm md:text-base max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
>
I’ve showcased some of my projects here, in fact, you are looking at one right now - this website. I’ts built with Next.js, Tailwind CSS, Framer Motion, and React. The site is deployed through a CI/CD Pipeline and hosted on AWS, utilising services like Amplify, S3, EC2, Lambda, CloudFront, Route53, and monitored with CloudWatch and Synthetics Canaries. As of September 2023, this project is now being deployed through Vercel for improved caching & latency. 
</motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden md:hidden relative hidden md:flex'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[950px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        {/* <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full max-w-[512px] max-h-[768px] absolute -bottom-0 lg:bottom-0 lg:right-[8%]'
        >
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
