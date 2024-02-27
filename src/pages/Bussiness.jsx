import React from 'react'
import bussinessHeroBg from '../assets/bussinessHeroBg.png'
import phone6 from '../assets/phone6.png'
import ProductCard from '../Components/ProductCard'
import space from '../assets/space.png'
import group from '../assets/group.png'
import LatestNewsCard from '../Components/shared/LatestNewsCard'
import newsImage1 from '../assets/new1.png'
import newsImage2 from '../assets/new2.png'
import newsImage3 from '../assets/new3.png'
import { Link } from 'react-router-dom';


const Bussiness = () => {

    const businessCardData = {
        title: 'Advertise with Us',
        text: 'Business like yours utilize our key data insights and community to their advantage within the competitive business landscapes.',
        text2: 'Take a step futher by joining over 100 businesses gaining success through us today!',
    }
    const news1 = {
        title: 'Accessing Green Finance',
        text: 'The World has set some funds to finance projects that are targeted...'
    }
    const news2 = {
        title: 'Sugar price in Nigeria hits 5-year high',
        text: 'The average price of Nigeria has surged to its highest value..'
    }
    const news3 = {
        title: 'Safety storage for farmers',
        text: 'Nigeria must fix its structural defeciencies limiting productiviy..'
    }

    return (
        <div className='mb-40'>
            <div className='w-full  bg-cover flex flex-col px-36 justify-center h-[700px] bg-no-repeat text-left text-white tracking-widest' style={{ backgroundImage: `url(${bussinessHeroBg})` }}>
                <h2 className='  text-[64px] font-bold '>Business</h2>

                <p className='text-[20px] leading-[1.5]  '>We deliver nothing short of growth and excellence <br /> when it comes to business. Building trust has been<br />paramount to partnership and growth.</p>
            </div>
            <div className=' my-32 '>

                <Link to={"/advert/"}>
                    <ProductCard
                        heading={businessCardData.title}
                        text={businessCardData.text}
                        imageUrl={phone6}
                        text2={businessCardData.text2}
                    />
                </Link>

            </div>

            <div className='mx-20 mb-40 flex justify-between'>
                <img src={space} alt="" className='rounded' />
                <div className='px-5'>
                    <h3 className='text-[40px] leading-[1.5] mb-5'>Network and partners</h3>
                    <p className='text-[25px] leading-[1.5] mb-5'>Follow our key partners and learn more on what is going on right away.</p>


                    <Link to={"/network/"}>
                        <button href="" className='text-[#E01A4F]'>Learn more</button>
                    </Link>
                </div>

                <img src={group} alt="" className='rounded' />
            </div>

            <h3 className='mb-10 decoration-2 text-3xl font-semibold text-left mx-20 underline decoration-[#E01A4F] underline-offset-8'>Latest News</h3>
            <div className='flex justify-between mx-20'>
                <LatestNewsCard
                    heading={news1.title}
                    text={news1.text}
                    image={newsImage1}
                />
                <LatestNewsCard
                    heading={news2.title}
                    text={news2.text}
                    image={newsImage2}
                />
                <LatestNewsCard
                    heading={news3.title}
                    text={news3.text}
                    image={newsImage3}
                />
            </div>
        </div>
    )
}

export default Bussiness