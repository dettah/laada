import React from 'react'
import LearnButton from '../LearnButton'
const ReuseableCard = ({heading, paragraph, imageUrl}) => {
  return (
    <div className='flex w-[1169px] h-[546px] gap-11 items-center px-[171px] m-auto shadow-md z-10 hover:scale-110 transition-all duration-300'>
      <div className='flex items-center h-auto'>
        <img src={`${imageUrl}` }alt="" className='w-[664px] rounded-[8px]' />
      </div>
      <div className='w-[433px] text-left leading-[2.2] '>
        <h3 className='font-semibold text-4xl mb-5'>{heading}</h3>
        <p className='mb-4 text-xl leading-[1.5]'>
          {paragraph}
        </p>
        <LearnButton/>
      </div>
    </div>
  )
}

export default ReuseableCard