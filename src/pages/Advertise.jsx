import React from 'react'
import advert from '../assets/advert.png'
import arrow from '../assets/arrow.png'


const Advertise = () => {
  return (
    <div>
      <div className=''>
        <div className='mx-20'>
        <img src={advert} alt="" />
        </div>
        <h2 className='font-semibold mt-20  text-[40px] '>Advertise with Us</h2>

        <p className='text-[30px] mx-60 my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, voluptatem, nam, exercitationem delectus architecto voluptatum lit sit fugiat perferendis neque, officia asperiores illum odit voluptatum nostrum tenetur nihil.</p>

        <button className='flex text-[#E01A4F] items-center gap-2 border-none m-auto mb-40'>Contact Us
          <img src={arrow} alt="" className='' />
        </button>

      </div>
      <div className='w-[40%] m-auto'>
          <form action="" className='flex flex-col'>
            <label>Email Address</label>
            <input type="email" placeholder='emmanuel@example.com' className='border border-[#6B6C6F] py-1 px-4 rounded'/>

            <label>Select Product</label>
            <input type="dropdown" className='border py-1  border-[#6B6C6F] rounded' />

            <label>Message</label>
            <input type="textfield" placeholder='Message...' className='border border-[#6B6C6F] rounded' />

            <button>Send</button>
            
          </form>
        </div>
      
    </div>
  )
}

export default Advertise