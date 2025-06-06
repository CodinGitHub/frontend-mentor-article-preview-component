import { useContext } from 'react'
import { ShowContext } from '../contexts/ShowContext'

import shareIcon from '../assets/images/icon-share.svg'

export const ShareButton = ({style}) => {

  const {show, setShow} = useContext(ShowContext)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <button onClick={handleClick} className={`bg-Grayish-Blue/30 size-8 grid place-content-center rounded-full cursor-pointer ${style}`}>
      <img src={shareIcon} alt="share icon" />
    </button>
  )
}
