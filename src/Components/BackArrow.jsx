import React from 'react'
import backArrow from '../assets/backArrow.png'

const BackArrow = () => {
    return (
        <div className='flex justify-center items-center font-bold gap-3'>
            <img src={backArrow} alt="" className='w-6 h-3' />
            <span>
                Back
            </span>
        </div>
    )
}

export default BackArrow