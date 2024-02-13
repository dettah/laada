import React from 'react'
import Logo from '../Logo'

// import { Link } from 'react-router-dom';



const NavBar = () => {
  return (

    <div className='flex justify-between py-10 items-center px-20 bg-[#EBEBEB] '>
      <Logo />

      <div className='flex items-center justify-between w-[60%]' >
        <nav className='flex grow'>

          <p className='grow'>Community</p>

          <p className='grow'>About Us</p>
          <p className='grow'>Business</p>
          <p className='grow'>News</p>
        </nav>
        <div className='flex gap-6'>
          <button className='border border-[#E01A4F] rounded-[6px] px-6 py-[8px]'>Join NOW</button>
          <button className='bg-[#E01A4F] rounded-[6px] px-6 py-[8px]'>Download</button>
        </div>
      </div>
{/* 
      <Link to="/">
        <Logo />
      </Link>
      <div className='flex items-center justify-between w-[60%]' >
        <nav className='flex grow'>

          <Link to="/community">
            <p className='grow'>Community</p>
          </Link>

          <Link to="about">
            <p className='grow'>About Us</p>
          </Link>

          <Link to="/business">
            <p className='grow'>Business</p>
          </Link>

          <Link to="/news">
            <p className='grow'>News</p>
          </Link>
        </nav>
        <div className='flex gap-6'>
          <button className='border border-[#E01A4F] rounded-[6px] px-6 py-[8px]'>Join NOW</button>
          <button className='bg-[#E01A4F] rounded-[6px] px-6 py-[8px]'>Download</button>
        </div>
      </div> */}



    </div>
  )
}

export default NavBar