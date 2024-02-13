import React from 'react'
import new1 from '../assets/new1.png'

const NewsCard = () => {
    return (


        <div className=' shadow-md mx-20 my-10 max-w-[500px]'>

            <h3 className='leading-[1.5] text-left my-7 text-3xl  '>Lorem ipsum dolor sit amet consectetur.</h3>
            <img src={new1} alt="" className='' />
            <p className='text-2xl my-5 text-left leading-[1.5]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus ipsam cumque doloribus dignissimos!</p>

            <div className='text-left pl-5'>
                <button className='text-[#E01A4F] text-lg '>read more</button>
            </div>
        </div>

    )
}

export default NewsCard