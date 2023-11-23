import LateralNav from '@/components/Lateral-Nav';
import Code from '@/components/Code';
import { Button, ButtonType } from '@/components/Button';

const Content = () => {
  return (
    <div className='bg-bg flex h-full'>
      <LateralNav />
      <div className='flex flex-col flex-1 p-10'>
        <Code />
        <div>
          <Button
            type={ButtonType.Secondary}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>SALÍ DE ACÁ</span>
          </Button>
          <Button
            type={ButtonType.Primary}
            onClick={() => {
              console.log('test1');
            }}>
            ME INTERESA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
