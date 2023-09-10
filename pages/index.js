import React, { useState, useEffect } from 'react';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Typewriter from 'typewriter-effect'; // Import the Typewriter component

const Home = () => {
  const [jobTitles, setJobTitles] = useState(['Cloud Engineer', 'Programmer', 'Systems Engineer', 'Tech Enthusiast', '3D Printer']);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(''); // Define setCurrentTitle

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    const speed = 50; // Adjust the typing speed here (lower value for faster typing)

    const interval = setInterval(() => {
      if (currentIndex === jobTitles.length) {
        // Start from the beginning if all titles have been shown
        currentIndex = 0;
      }
      
      if (currentIndex >= 0 && currentIndex < jobTitles.length) {
        // Ensure currentIndex is within bounds
        currentText = jobTitles[currentIndex].slice(0, currentText.length + 1);
        setCurrentTitle(currentText);
      }

      if (currentText === jobTitles[currentIndex]) {
        // Delay before erasing
        setTimeout(() => {
          eraseText();
        }, 1000); // Adjust the delay before erasing (in milliseconds)
      }
    }, speed);

    const eraseText = () => {
      if (currentText.length === 0) {
        currentIndex++;
        setTimeout(() => {
          setCurrentTitle('');
        }, 500); // Delay before typing the next title (in milliseconds)
      } else {
        currentText = currentText.slice(0, currentText.length - 1);
        setCurrentTitle(currentText);
      }
    }

    return () => {
      clearInterval(interval);
    }
  }, [jobTitles]);

  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 md:pt-10 xl:text-left h-full container mx-auto'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Hi, I&#39;m Ozair, a  <br /> {' '}
            <span className='text-accent'>
              <Typewriter
                options={{
                  strings: jobTitles,
                  autoStart: true,
                  loop: true,
                  delay: 50, // Adjust the typing speed (in milliseconds)
                }}
              />
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-sm md:text-base max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-6'
          >
            I have 7 years of expertise in designing and implementing networks, custom bespoke systems, and providing IT consultation services. I specialize in networking and cloud technologies, and I hold a Bachelor&#39;s degree with Honors in Computer Science, along with Cisco Networking and Microsoft AI/ML certifications. I&#39;m also pursuing additional certifications in the Microsoft Azure and AWS domains to further enhance my skill set.
          </motion.p>
          <motion.p
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-sm md:text-base max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            I&#39;ve showcased some of my projects here, in fact, you are looking at one right now - this website. It&#39;s built with Next.js, Tailwind CSS, Framer Motion, and React. The site is deployed through a CI/CD Pipeline and hosted on AWS, utilising services like Amplify, Docker, S3, EC2, Lambda, IAM, CloudFront, Route53, and monitored with CloudWatch and Synthetics Canaries. As of September 2023, this project is now being deployed through Vercel for improved caching & latency.
          </motion.p>
              
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
      <div className='w-[950px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
