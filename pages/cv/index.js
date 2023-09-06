// components

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const CV = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
            
          >
            
            View my <span className='text-accent'>CV.</span>
          </motion.h2>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <motion.p
    variants={fadeIn('right', 0.4)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='text-sm md:text-base max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-6'
  >
    If you are interested in learning more about my skills, qualifications, and achievements, you can view my CV by clicking on the button, it will automatically display in a new tab.
  </motion.p>
</div>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}        
            <div className='flex justify-center items-center'>
            <a
  href='/documents/CV-Redacted.pdf' // path to CV file
  target='_blank' // Open the link in a new tab
  className='btn rounded-full border border-white/50 max-w-[300px] px-16 text-2xl transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
>
  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
    CV
  </span>
  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[28px]' />
</a>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default CV;
