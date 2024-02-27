import React from 'react'
import LearnButton from '../LearnButton'
const ReuseableCard = ({heading, paragraph, imageUrl}) => {
  return (
    <div className='flex xl:w-[1169px] md:h-[546px] h-fit gap-11 items-center xl:px-[171px] m-auto shadow-md z-10 hover:scale-110 hover:bg-[#feeeed]  transition-all duration-300 px-10 flex-col my-28 xl:flex-row xl:my-0 py-5 '>
      <div className='flex items-center h-auto'>
        <img src={`${imageUrl}` }alt="" className='w-[664px] rounded-[8px] ' />
      </div>
      <div className='xl:w-[433px] text-left md:leading-[2.2] '>
        <h3 className='font-semibold text-[2.25rem] mb-5'>{heading}</h3>
        <p className='mb-4 text-[1.25rem] leading-[1.5]'>
          {paragraph}
        </p>
        <LearnButton/>
      </div>
    </div>
  )
}

export default ReuseableCard