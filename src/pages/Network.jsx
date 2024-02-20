import React from 'react'
import arrow from '../assets/arrow.png'
import starry from '../assets/starry.png'
import LatestNewsCard from '../Components/shared/LatestNewsCard'
import newsImage1 from '../assets/new1.png'
import newsImage2 from '../assets/new2.png'
import newsImage3 from '../assets/new3.png'

const Network = () => {
  const news1 = {
    title: 'Accessing Green Finance',
    text: 'The World has set some funds to finance projects that are targeted...'
}
const news2 = {
    title: 'Sugar price in Nigeria hits 5-year high',
    text: 'The average price of Nigeria has surged to its highest value..'
}
const news3 = {
    title: 'Safety storage for farmers',
    text: 'Nigeria must fix its structural defeciencies limiting productiviy..'
}
  return (
    <div>
      <div className=''>
        <div className='mx-20'>
          <img src={starry} alt="" className='rounded' />
        </div>
        <h2 className='font-semibold mt-20  text-[40px] '>The Networking that works</h2>

        <p className='text-[30px] mx-60 my-5'>As a multi-faceted brand, driving the right partnership to elevate our business growth has been key to our success.</p>

        <button className='flex text-[#E01A4F] items-center gap-2 border-none m-auto mb-40'>Join now
          <img src={arrow} alt="" className='' />
        </button>

      </div>
      <div className='mb-10'>
        <h3 className='text-[40px] mb-10'>Partners that trust us</h3>
        <div className='flex flex-wrap gap-4 justify-center mb-10'>
          <div className=' rounded-[8px] min-w-[300px] min-h-[162px] font-bold text-3xl bg-[#6B7B93]' ></div>
          <div className=' rounded-[8px] min-w-[300px] min-h-[162px] font-bold text-3xl bg-[#6B7B93]' ></div>
          <div className=' rounded-[8px] min-w-[300px] min-h-[162px] font-bold text-3xl bg-[#6B7B93]' ></div>
          <div className=' rounded-[8px] min-w-[300px] min-h-[162px] font-bold text-3xl bg-[#6B7B93]' ></div>
          <div className=' rounded-[8px] min-w-[300px] min-h-[162px] font-bold text-3xl bg-[#6B7B93]' ></div>
          <div className=' rounded-[8px] min-w-[300px] min-h-[162px] font-bold text-3xl bg-[#6B7B93]' ></div>
          <div className=' rounded-[8px] min-w-[300px] min-h-[162px] font-bold text-3xl bg-[#6B7B93]' ></div>
          <div className=' rounded-[8px] min-w-[300px] min-h-[162px] font-bold text-3xl bg-[#6B7B93]' ></div>
        </div>
        <div>
          <p className='text-[30px] mx-60 my-5'>Our commitment towards building a high impact community, constantly providing enhancesive solutions, support and resources has edged us to limelight. We share in the problems, and testimonies, so does our partners. </p>

          <button className='flex text-[#E01A4F] items-center gap-2 border-none m-auto mb-40'>Join now
            <img src={arrow} alt="" className='' />
          </button>
        </div>
        <div>
        <h3 className='mb-10 decoration-2 text-3xl font-semibold text-left mx-20 underline decoration-[#E01A4F] underline-offset-8'>Latest News</h3>
          <div className='flex justify-between mx-20'>
            <LatestNewsCard
              heading={news1.title}
              text={news1.text}
              image={newsImage1}
            />
            <LatestNewsCard
              heading={news2.title}
              text={news2.text}
              image={newsImage2}
            />
            <LatestNewsCard
              heading={news3.title}
              text={news3.text}
              image={newsImage3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Network