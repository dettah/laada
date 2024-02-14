import React from 'react'
import LearnButton from '../LearnButton'

const ReuseableCardOne = ({heading, paragraph, imageUrl}) => {
    return (
        <div className='flex w-[1169px] h-[546px] gap-11 items-center px-[171px] m-auto shadow-md z-10'>

            <div className='w-[433px] text-left leading-[2.2] '>
                <h3 className='font-semibold mb-5 text-4xl'>{heading}</h3>
                <p className='mb-4 leading-[1.5] text-xl'>
                    {paragraph}
                </p>
                <LearnButton />
            </div>
            <div className='flex items-center h-auto'>
                <img src={imageUrl} alt="" className='w-[664px] rounded-[8px]' />
            </div>
        </div>
    )
}

export default ReuseableCardOne