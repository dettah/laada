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
      <div className='w-[40%] m-auto flex justify-center '>
        <form action="" className='flex justify-start flex-col items-start w-full '>
          <label className='mb-2'>Email Address</label>
          <input type="email" placeholder='emmanuel@example.com' className='border outline-none border-[#6B6C6F] py-1 mb-8 px-4 rounded w-full' />

          <label className='mb-2'>Select Product</label>

          {/*  */}

          <select name="languages" id="lang" className='border py-2 border-[#6B6C6F] rounded w-full mb-8 outline-none px-3 '>
            <option value="blank"></option>
            <option value="item1">Advert item one</option>
            <option value="item2">Advert item two</option>
            <option value="item3">Advert item three</option>
            <option value="item4">Advert item four</option>
          </select>

          {/*  */}





          <label className='mb-2'>Message</label>
          {/* <textarea placeholder='Message...' className='border border-[#6B6C6F] rounded' /> */}

          <textarea
            className=" border border-[#6B6C6F] rounded p-2 h-40 mb-4 w-full"
            placeholder="message outline-none "></textarea>

          <button className='bg-[#E01A4F] text-white rounded py-2 font-bold w-full '>Send</button>

        </form>
      </div>

    </div>
  )
}

export default Advertise