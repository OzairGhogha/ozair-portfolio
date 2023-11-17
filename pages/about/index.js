import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPhp,
  FaJava,
  FaWindows,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiMysql,
  SiGnubash,
  SiPowershell,
  SiJson,
  SiKotlin,
  SiSwift,
  SiKalilinux,
  SiUbuntu,
  SiLinuxmint,
  SiUnraid,
  SiUnrealengine,
  SiSteam,
  SiEpicgames,
  SiRiotgames,
  SiCplusplus,
  SiIntel,
  SiAmd,
  SiNvidia,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftazure,
  SiObsstudio,
  SiAdobepremierepro,
  SiBlender,
  SiVmware,
  SiLinux,
  SiKubernetes,
  SiRedis,
  SiPlex,
  SiWireguard,
  SiWireshark,
  SiUptimekuma,
  SiCloudflare,
  SiNginx,
  SiDiscord,
  SiCisco,
  SiTplink,
  SiAdguard,
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    
    title: 'skills',
    info: [

      {
        title: 'Cloud Platforms',
        icons: [
          <SiAmazonaws key="amazonaws" />,
          <SiMicrosoftazure key="microsoftazure" />,
        ],
      },
      {
        title: 'Networking',
        icons: [
          <SiCisco key="cisco" />,
          <SiTplink key="tplink" />,
          <SiDocker key="docker" />,
          <SiVmware key="vmware" />,
          <SiLinux key="linux" />,
          <SiKalilinux key="kalilinux" />,
          <SiUnraid key="unraid" />,
          <FaWindows key="windows" />,
          <SiKubernetes key="kubernetes" />,
          <SiRedis key="redis" />,
          <SiPlex key="plex" />,
          <SiWireguard key="wireguard" />,
          <SiWireshark key="wireshark" />,
          <SiUptimekuma key="uptimekuma" />,
          <SiCloudflare key="cloudflare" />,
          <SiNginx key="nginx" />,
          <SiAdguard key="adguard" />,
        ],
      },
      {
        title: 'PC Building ',
        icons: [
          <SiIntel key="intel" />,
          <SiAmd key="amd" />,
          <SiNvidia key="nvidia" />,
          <FaWindows key="windows" />,
          <SiUbuntu key="ubuntu" />,
          <SiLinuxmint key="linuxmint" />,
          <SiSteam key="steam" />,
          <SiObsstudio key="obsstudio" />,
          <SiEpicgames key="epicgames" />,
          <SiRiotgames key="riotgames" />,
          <SiDiscord key="discord" />,
        ],
      },
      {
        title: 'Programming',
        icons: [
          <FaPhp key="php" />,
          <SiMysql key="mysql" />,
          <FaJava key="java" />,
          <SiGnubash key="gnubash" />,
          <SiPowershell key="powershell" />,
          <SiJson key="json" />,
          <SiKotlin key="kotlin" />,
          <SiSwift key="swift" />,
          <SiUnrealengine key="unrealengine" />,
          <SiCplusplus key="cplusplus" />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextdotjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'Content Creation',
        icons: [
          <SiObsstudio key="obsstudio" />,
          <SiAdobepremierepro key="adobepremierepro" />,
          <SiAdobephotoshop key="adobephotoshop" />,
          <SiBlender key="blender" />,
        ],
      },
      

    ],
  },
  {
    title: 'experience',
    info: [
        {
          title: 'DevOps Engineer at Fera',
          stage: '? -> ?',
        },
        {
          title: 'Software Engineer at Fanatics (Hack Camp)',
          stage: 'Dec 2021 -> Feb 2022',
        },
        {
          title: 'Freelance Computer Systems Engineer',
          stage: 'Jan 2021 -> Aug 2023',
        },
    ]
  },
  {
    title: 'Certifications',
    info: [
      {
        title: 'Cisco Certified Network Associate 200-301',
        stage: 'Achieved 2023',
      },
      {
        title: 'Microsoft AI Skills Challenge in Machine Learning',
        stage: 'Achieved 2023',
      },
      {
        title: 'Microsoft Skills: Azure Kubernetes Service',
        stage: 'Achieved 2023',
      },
    ],
   
  },
  {
    title: 'Education',
    info: [
      {
        title: 'BSc Hons Computer Science at University of Salford',
        stage: 'Grad 2023',
      },

    ],
  },
];

// components
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div> */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            IT <span className='text-accent'>engineering</span> is
            what I do.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Many years ago, I began freelancing as a computer system engineer. Since then, I have designed and implemented networks, custom bespoke systems, and provided IT consultations services to many clients across the UK.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5} /> K+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Pounds saved
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
