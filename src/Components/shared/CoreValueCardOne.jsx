import React from 'react'

const CoreValueCardOne = ({title, text, imageUrl}) => {
    return (
        <div className='flex justify-between mx-20 my-40 '>
            <img src={`${imageUrl}`} alt="" className='w-[600px]' />
            <div className='text-left flex flex-col justify-end '>
                <h2 className=' text-6xl mb-10 '>{title}</h2>
                <p className='w-[436px] text-3xl leading-[1.5] '>{text}</p>
            </div>

        </div>
    )
}

export default CoreValueCardOne