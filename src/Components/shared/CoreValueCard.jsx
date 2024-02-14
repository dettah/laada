import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const CoreValueCard = ({title, text, imageUrl}) => {
    useEffect(() => {
        AOS.init({ duration: 2500 })
    }, [])

    return (

        <div className='flex justify-between mx-20 mt-20 mb-40 text-right'>
            <div data-aos='fade-right'>
                <h2 className=' text-6xl mb-10 '>{title}</h2>
                <p className='w-[436px] text-3xl leading-[1.5] '>{text}</p>
            </div>
            <img src={`${imageUrl}`} alt="" className='w-[600px]' data-aos='fade-up'/>
        </div>
    )
}

export default CoreValueCard