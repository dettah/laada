import React from 'react'
import BushMarketImage from '../assets/BushMarketImage.png'
import LearnButton from './LearnButton'

const CommunityBottomStrip = () => {
   
    return (

        <div>
            <h2 className='underline underline-offset-8 decoration-2 text-3xl font-semibold text-left pl-20 pt-10 '>Bush market gist</h2>
            <div className="mx-auto max-w-screen-full md:px-20 px-5 py-20 flex justify-between gap-10 ">


                <div className='flex md:flex-row flex-col border  bg-[#EFF3F3] p-2  rounded-[10px]'>
                    <img src={BushMarketImage} alt="" className='rounded w-[40vw]' />

                    <div className='  md:p-4 p-2' >
                        <p className='text-wrap text-left md:text-xl leading-[1.5] mb-2'>La’ada vendors are part of a <br /> huge trader community who connect <br /> with multiple customers that <br /> are always looking forward to buying from them.</p>

                        <LearnButton />
                    </div>
                </div>


                <div className='flex md:flex-row flex-col border  bg-[#EFF3F3] p-2  rounded-[10px]'>
                    <img src={BushMarketImage} alt="" className='rounded w-[40vw]' />

                    <div className='  md:p-4 p-2' >
                        <p className='text-wrap text-left md:text-xl leading-[1.5] mb-2'>La’ada vendors are part of a <br /> huge trader community who connect <br /> with multiple customers that <br /> are always looking forward to buying from them.</p>

                        <LearnButton />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default CommunityBottomStrip