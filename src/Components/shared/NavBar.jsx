import React from 'react'
import Logo from '../Logo'
const NavBar = () => {
  return (
    <div className='flex justify-between  py-2 items-center mb-10'>
      <Logo/>

      <div className='flex items-center justify-between w-[60%]' >
        <nav className='flex grow'>
          <a className='grow'>Home</a>
          <a className='grow'>Business</a>
          <a className='grow'>Advertise with us</a>
          <a className='grow'>Blog</a>
        </nav>
        <div className='flex gap-6'>
          <button className='border border-[#E01A4F] rounded-[6px] px-6 py-[8px]'>Join NOW</button>
          <button className='bg-[#E01A4F] rounded-[6px] px-6 py-[8px]'>Download</button>
        </div>
      </div>

    </div>
  )
}

export default NavBar