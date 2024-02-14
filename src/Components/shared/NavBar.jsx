import React from 'react'
import Logo from '../Logo'
import downCaret from '../../assets/downCaret.png'
import searchIcon from '../../assets/searchIcon.png'


// import { Link } from 'react-router-dom';



const NavBar = () => {
  return (

    <div className='flex justify-between py-10 items-center px-20 bg-[#EBEBEB] '>
      <Logo />

      <div className='flex items-center gap-8 ' >
        <nav className='flex grow gap-5'>

          <button className='flex gap-2 items-center'>
            <p className='grow'>Community </p>
            <img src={downCaret} alt="community drowpdown" />
          </button>

          <button className='flex gap-2 items-center'>
            <p className='grow'>About us </p>
            <img src={downCaret} alt="community drowpdown" />
          </button>

          <button className='flex gap-2 items-center'>
            <p className='grow'>Business </p>
            <img src={downCaret} alt="community drowpdown" />
          </button>

          <button className='flex gap-2 items-center'>
            <p className='grow'>News </p>
            <img src={downCaret} alt="community drowpdown" />
          </button>

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