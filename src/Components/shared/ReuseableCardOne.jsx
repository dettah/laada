import React from 'react'
import LearnButton from '../LearnButton'

const ReuseableCardOne = ({heading, paragraph, imageUrl}) => {
    return (
        <div className='flex xl:w-[1169px] h-[546px] gap-11 items-center xl:px-[171px] m-auto shadow-md z-10 hover:scale-110 hover:bg-[#feeeed]  transition-all duration-300 px-10 flex-col-reverse my-28 xl:flex-row xl:my-0'>

            <div className='xl:w-[433px] text-left leading-[2.2] '>
                <h3 className='font-semibold mb-5 text-[2.25rem]'>{heading}</h3>
                <p className='mb-4 leading-[1.5] text-[1.25rem]'>
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