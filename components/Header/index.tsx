import { HamburgerMenuIcon } from '@/components/Icon';
import Link from 'next/link';

const Header = () => (
  <nav className='flex items-center bg-bg-400 h-[70px] border-bottom border-solid border-b-4 border-accent-500'>
    <Link href='/menu' className='md:flex hidden pl-8'>
      <HamburgerMenuIcon size={16} />
    </Link>
    <span className='pl-8  text-[34px] subpixel-antialiased font-light text-primary-700 shadow-none flex items-center'>
      PROYECTO
      <span className=' text-primary-500  font-black drop-shadow-title'>
        VIVIANA
      </span>
    </span>

    <Link href='/menu' className='md:hidden flex flex-1 justify-end pr-8'>
      <HamburgerMenuIcon size={16} />
    </Link>
  </nav>
);

export default Header;
