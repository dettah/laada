import React from 'react'

import arrow from '../assets/arrow.png'

const LearnButton = () => {
  return (
    <div>
      <button className='flex text-[#E01A4F] items-center gap-2 border-none hover:scale-110 transition-transform duration-300 ease-in-out'>Learn more
        <img src={arrow} alt="" />
      </button>
    </div>
  )
}

export default LearnButton