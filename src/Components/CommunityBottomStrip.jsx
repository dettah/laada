import React from 'react'
import BushMarketImage from '../assets/BushMarketImage.png'
import LearnButton from './LearnButton'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const CommunityBottomStrip = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    // };
    return (

        <div>
            <h2 className='underline underline-offset-8 decoration-2 text-3xl font-semibold text-left pl-20 pt-10 '>Bush market gist</h2>
            <div className="mx-auto max-w-screen-full px-20 py-20 flex justify-between gap-10 ">


                <div className='flex border bg-[#EFF3F3] p-2  rounded-[10px]'>
                    <img src={BushMarketImage} alt="" className='rounded' />

                    <div className='  p-4' >
                        <p className='text-wrap text-left text-xl leading-[1.5] mb-2'>La’ada vendors are part of a <br /> huge trader community who connect <br /> with multiple customers that <br /> are always looking forward to buying from them.</p>

                        <LearnButton />
                    </div>
                </div>


                <div className='flex border bg-[#EFF3F3] p-2 rounded-[10px]'>
                    <img src={BushMarketImage} alt="" className='rounded' />

                    <div className='p-4 ' >
                        <p className='text-wrap text-left text-xl leading-[1.5] mb-2 '>La’ada vendors are part of a <br /> huge trader community who connect <br /> with multiple customers that <br /> are always looking forward to buying from them.</p>

                        <LearnButton />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default CommunityBottomStrip