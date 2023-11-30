'use client';
import LateralNav from '@/components/Lateral-Nav';
import Dialog from '@/components/Chip/Dialog';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { sen } from '@/app/fonts';
import { Button, ButtonType } from '@/components/Button';
import Switch from '@/components/Switch';
import { Icon } from '@/components/Icon';
import { IconType } from '../types';
import { Alert, AlertType } from '@/components/Alert';
import TimelineItem from '@/components/TimelineItem';
import { MdMenu } from 'react-icons/md';
import CardCarousel from '@/components/CardCarousel';

const Content = () => {
  return (
    <div className='bg-bg-100 flex h-full'>
      <LateralNav />
      <div className={'flex flex-col md:p-9 p-4 flex-1'}>
        <h1
          className={
            'font-semibold text-primary-100 text-4xl drop-shadow-title-primary'
          }>
          ¿Qué es Axum?
        </h1>
        <br />
        <span className={`${sen.className} text-lg text-primary-300`}>
          Este es un ejemplo de documentación.
        </span>
        <br />
        <div className=''>
          <TimelineItem />
        </div>
        <div className='w-[400px]'>
          <CardCarousel />
        </div>
        <br />
        <br />
        <Dialog />
        <div className='flex flex-wrap justify-center gap-5'>
          <Button
            type={ButtonType.Primary}
            onClick={() => {
              console.log('test1');
            }}>
            ME INTERESA
          </Button>
          <Button
            type={ButtonType.Secondary}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>SALÍ DE ACÁ</span>
          </Button>
          <Button
            type={ButtonType.Danger}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>ELIMINAR</span>
          </Button>
          <Button
            type={ButtonType.Success}
            onClick={() => {
              console.log('test1');
            }}>
            <span className='w-auto'>GUARDAR</span>
          </Button>
          <Button
            type={ButtonType.Link}
            onClick={() => {
              console.log('test1');
            }}>
            <a href='/test' className='w-auto'>
              BOTÓN LINK
            </a>
          </Button>
        </div>
        <br />
        <Switch />
        <div className='flex flex-wrap justify-center gap-5'>
          <Icon icon={MdMenu} type={IconType.FULL} size='30px' />
          <Icon icon={MdMenu} type={IconType.OUTLINE} size='30px' />
          <Icon icon={MdMenu} type={IconType.BORDERLESS} size='30px' />
        </div>
        <br />
        <div className=''>
          <Alert type={AlertType.Primary} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Secondary} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Danger} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
          <br />
          <Alert type={AlertType.Success} onClick={() => console.log('test')}>
            Esto es un ejemplo de alerta.
          </Alert>
        </div>
        <br />
        <div className=''>
          <Badge />
        </div>
      </div>
      <LateralNav transparent={true} />
    </div>
  );
};

export default Content;
