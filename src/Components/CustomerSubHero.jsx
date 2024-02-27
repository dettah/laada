import React from 'react'
import { Link } from 'react-router-dom';

const CustomerSubHero = ({ text, image }) => {



  return (
    <div className='sm:px-20 px-5'>
      <div className='p-10'>

        <img src={image} alt="" className='m-auto w-[1000px]' />
      </div>

      <p className='text-3xl leading-[1.5] py-10 sm:px-20 '>{text}</p>

      <div className='flex justify-center '>
        <Link to={"/reg-form/"}>

          <button className='w-[103px] h-12 bg-[#E01A4F] text-white rounded'>Join now</button>
        </Link>
      </div>
    </div>
  )
}

export default CustomerSubHero