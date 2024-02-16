import React from 'react'

import { Link } from 'react-router-dom';
import Logo from '../Logo'
import downCaret from '../../assets/downCaret.png'
import searchIcon from '../../assets/searchIcon.png'
import NavComm from './NavComponents/NavComm';
import NavAbout from './NavComponents/NavAbout';
import NavBusiness from './NavComponents/NavBusiness';
import NavNews from './NavComponents/NavNews';




const NavBar = () => {

  return (

    <div className='flex justify-between py-10 items-center px-20 bg-[#EBEBEB]'>
      <Link to="/">
        <Logo />
      </Link>


      <div className='flex items-center gap-8 ' >
        <nav className='flex grow gap-5 items-center '>

          <NavComm />
          
          <NavAbout/>

          <NavBusiness/>

          <NavNews/>

          <div className='flex border bg-white border-black rounded items-center w-fit'>
            <img src={searchIcon} alt="" className='py-1 h-7 ml-2 ' />
            <input type="search" name="market search" id="" placeholder='Search market' className='text-center rounded py-1 w-40 outline-none ' />
          </div>

        </nav>
        <div className='flex gap-6'>
          <button className='border border-[#E01A4F] rounded-[06px] px-6 py-1'>Join NOW</button>
          <button className='bg-[#E01A4F] rounded-[6px] px-6 '>Download</button>
        </div>
      </div>


    </div>
  )
}

export default NavBar