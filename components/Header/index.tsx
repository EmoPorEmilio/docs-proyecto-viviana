import HamburgerMenuIcon from '@/app/icons/Icon';

const Header = () => (
  <nav className='flex items-center bg-bg-400 h-[70px] border-bottom border-solid border-b-4 border-accent-500'>
    <HamburgerMenuIcon size={16} />
    <h1 className='text-primary-100 text-[34px] subpixel-antialiased font-medium drop-shadow-title'>
      Tutorial Axum
    </h1>
  </nav>
);

export default Header;
