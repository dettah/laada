import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const CoreValueCardOne = ({ title, text, imageUrl }) => {

    useEffect(() => {
        AOS.init({ duration: 2500 })
    }, [])

    return (
        <div className='flex justify-between mx-20 my-40 '>
            <img src={`${imageUrl}`} alt="" className='w-[600px]' data-aos='fade-up'/>
            <div className='text-left flex flex-col justify-end ' data-aos='fade-left'>
                <h2 className=' text-6xl mb-10 '>{title}</h2>
                <p className='w-[436px] text-3xl leading-[1.5] '>{text}</p>
            </div>

        </div>
    )
}

export default CoreValueCardOne