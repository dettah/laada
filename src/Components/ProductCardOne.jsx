import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LearnButton from './LearnButton'



const ProductCardOne = ({ heading, text, imageUrl, text1 }) => {

    useEffect(() => {
        AOS.init({ duration: 2500 })
    }, [])

    return (
        <div className='flex w-[1169px] h-[546px] gap-20 items-center px-[171px] m-auto shadow-md z-10' data-aos='fade-up'>
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