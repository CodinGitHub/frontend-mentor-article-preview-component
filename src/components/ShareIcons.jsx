import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinteresIcon from '../assets/images/icon-pinterest.svg';

import { ShareButton } from './ShareButton';

export const Tooltip = () => {
  return (
    <div className='flex items-center justify-between px-8 bg-Very-Dark-Grayish-Blue absolute bottom-0 shadow-2xl left-0 h-[76px] w-full sm:w-[250px] sm:rounded-[10px] sm:bottom-[80px] sm:left-auto sm:h-[55px] sm:right-[-70px] sm:before:content-[""] sm:before:absolute sm:before:bottom-[-26px] sm:before:left-[106px] sm:before:border-[14px] sm:before:border-transparent sm:before:border-t-Very-Dark-Grayish-Blue'>

      <div className='flex'>
        <p className='text-Light-Grayish-Blue mr-6 uppercase'>share</p>
        <div className='flex gap-4'>
          <img src={facebookIcon} alt="facebook Icon" />
          <img src={twitterIcon} alt="twitter Icon" />
          <img src={pinteresIcon} alt="pinteres Icon" />
        </div>
      </div>

      <ShareButton style='sm:hidden'  />
    </div>
  )
}
