import React from 'react'
import LearnButton from './LearnButton'



const ProductCardOne = ({ heading, text, imageUrl, text1 }) => {
    return (
        <div className='flex w-[1169px] h-[546px] gap-20 items-center px-[171px] m-auto shadow-md z-10'>
            <div className='flex items-center h-auto'>
                <img src={`${imageUrl}`} alt="" className='w-[300px] rounded-[8px]' />
            </div>
            <div className='w-[433px] text-left leading-[2.2] '>
                <h3 className='font-semibold text-2xl mb-5'>{heading}</h3>
                <p className='mb-4'>
                    {text}
                </p>
                <p>
                    {
                        text1
                    }
                </p>
                <LearnButton />
            </div>
        </div>
    )
}

export default ProductCardOne