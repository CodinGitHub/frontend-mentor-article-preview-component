import { useContext } from 'react';

import { ShowContext } from '../contexts/ShowContext';

import { CardFooter } from './CardFooter';
import { Tooltip } from './ShareIcons';
import cardImg from '../assets/images/drawers.jpg';

export function Card() {

  const {show} = useContext(ShowContext);

  return (
    <div className='bg-Light-Grayish-Blue shadow-2xl w-[327px] rounded-[10px] overflow-hidden relative sm:w-[608px] sm:flex sm:overflow-visible md:w-[730px]'>
      
      <img className='h-[170px] w-full object-cover sm:object-none sm:h-full sm:w-[232px] sm:rounded-tl-[10px] sm:rounded-bl-[10px] md:object-cover md:w-[285px]' src={cardImg} alt="card image" /> 

      <div className='px-[30px] pt-8 pb-[18px] text-Very-Dark-Grayish-Blue sm:px-[46px]'>
        <p className='text-xl font-bold mb-6'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</p>
        <p className='font-medium'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        <CardFooter />
        {show && <Tooltip />} 
      </div>

    </div>
  )
}

