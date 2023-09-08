// components
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const CV = () => {
  const cvFileName = 'CV-Redacted.pdf'; // CV file name

  const openCV = () => {
    // Function to open the CV in a new tab
    window.open(`/documents/${cvFileName}`, '_blank');
  };

  const downloadCV = () => {
    // Function to download the CV
    const anchor = document.createElement('a');
    anchor.href = `/documents/${cvFileName}`;
    anchor.download = cvFileName;
    anchor.click();
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-8 md:py-32 text-center xl:text-left flex flex-col md:flex-row items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-4 md:mb-12'
          >
            Check out my <span className='text-accent'>CV.</span>
          </motion.h2>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-sm md:text-base max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 md:mb-10 xl:mb-10'
            >
              If you are interested in gaining a deeper understanding of my skills, qualifications, and achievements, please feel free to click on one of the buttons below to view or download my CV.
            </motion.p>
          </div>

          {/* Buttons */}
          <div className='flex flex-col md:flex-row justify-center items-center'>
            {/* View CV Button */}
            <button
              onClick={openCV}
              className='btn rounded-full border border-white/50 px-6 md:px-16 text-xl md:text-2xl transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mb-4 md:mb-0 mr-0 md:mr-4'
              style={{ width: '100%', maxWidth: '320px' }}
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                View CV
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[20px] md:text-[28px]' />
            </button>

            {/* Download CV Button */}
            <button
              onClick={downloadCV}
              className='btn rounded-full border border-white/50 px-6 md:px-16 text-xl md:text-2xl transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              style={{ width: '100%', maxWidth: '320px' }}
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Download CV
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[20px] md:text-[28px]' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
