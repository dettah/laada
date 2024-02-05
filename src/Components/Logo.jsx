import React from 'react'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div>
        <img
        src={logo}
        alt='laada logo'
        className='w-[139px] h-[48px]' />
    </div>
  )
}

export default Logo