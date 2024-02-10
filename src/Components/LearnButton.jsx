import React from 'react'

import arrow from '../assets/arrow.png'

const LearnButton = () => {
  return (
    <div>
      <button className='flex text-[#E01A4F] items-center gap-2 border-none'>Learn more
        <img src={arrow} alt="" />
      </button>
    </div>
  )
}

export default LearnButton