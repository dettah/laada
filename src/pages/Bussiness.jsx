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
        text: 'Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam sed eu accumsan ornare. Morbi dolor donec eget diam in cursus arcu. ',
        text2: 'Vulputate pulvinar vulputate pulvinar vestibulum ut eget libero morbi arcu.',
    }
    const news1 = {
        title: 'Apps on the go',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, vero?'
    }
    const news2 = {
        title: 'The local vendor',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, vero?'
    }
    const news3 = {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, vero?'
    }

    return (
        <div className='mb-40'>
            <div className='w-full  bg-cover flex flex-col px-36 justify-center h-[700px] bg-no-repeat text-left text-white tracking-widest' style={{ backgroundImage: `url(${bussinessHeroBg})` }}>
                <h2 className='  text-[64px] font-bold '>Business</h2>

                <p className='text-[20px] leading-[1.5]  '>Lorem ipsum dolor sit amet consectetur. <br /> Diam curabitur vitae tellus orci vehicula dignissim tristique. <br /> Fusce aenean leo massa tellus elit morbi suspendisse.</p>
            </div>
            <div className=' my-32 '>
                <ProductCard
                    heading={businessCardData.title}
                    text={businessCardData.text}
                    imageUrl={phone6}
                    text2={businessCardData.text2}
                />
            </div>

            <div className='mx-20 mb-40 flex justify-between'>
                <img src={space} alt="" className='rounded' />
                <div className='px-5'>
                    <h3 className='text-[40px] leading-[1.5] mb-5'>Network and partners</h3>
                    <p className='text-[25px] leading-[1.5] mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatem illum?</p>


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