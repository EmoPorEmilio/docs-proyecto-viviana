import Image from 'next/image';
import AvatarSRC from './avatar.jpg';

const Avatar = () => {
  return (
    <div className='relative rounded-full border-2 border-accent-200  w-20 h-20 overflow-hidden'>
      <Image alt='avatar' src={AvatarSRC} fill={true} />
    </div>
  );
};

export default Avatar;
