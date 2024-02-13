import React from 'react'

const CustomerSubHero = ({text, image}) => {



  return (
    <div className='px-20'>
       <div className='p-10'>
         
       <img src={image} alt="" className='m-auto w-[1000px]' />
       </div>

       <p className='text-3xl leading-[1.5] py-10 px-20 '>{text}</p>

       <button className='w-[103px] h-12 bg-[#E01A4F] text-white rounded'>Join now</button>
    </div>
  )
}

export default CustomerSubHero