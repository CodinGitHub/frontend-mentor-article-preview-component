import profileImg from '../assets/images/avatar-michelle.jpg'
import { ShareButton } from './ShareButton'

export const CardFooter = () => {
  return (
    <div className='flex justify-between items-center mt-12'>
      <div className='flex gap-4'>
        <img className='size-10 rounded-full' src={profileImg} alt="Profile Image" />
        <div>
          <p className='font-bold'>Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
      </div>
      <ShareButton />
    </div>
  )
}
