// links
import Link from 'next/link';

// icons
import {
  RiLinkedinFill,
  RiGithubFill

} from 'react-icons/ri';

const Socials = () => {
  const iconSize = 30; // Adjust the size as needed
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/ozair-ghogha/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill size={iconSize} />
      </Link>
      <Link href={'https://github.com/OzairGhogha/'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill size={iconSize} />
      </Link>

    </div>
  );
};

export default Socials;
