import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


import ProductCard from '../../Components/ProductCard'
import ProductCardOne from '../../Components/ProductCardOne'
import phone1 from '../../assets/phone1.png'
import phone2 from '../../assets/phone2.png'
import phone3 from '../../assets/phone3.png'
import phone4 from '../../assets/phone4.png'
import phone5 from '../../assets/phone5.png'
import LearnButton from '../../Components/LearnButton'



const Product = () => {


    useEffect(() => {
        AOS.init({ duration: 2500 })
    }, [])

    const prodCardData = {
        title: "Swift Customer's Interface",
        text: 'Explore the convenient experience of connecting with vendors & stores with our friendly customer’s interface.',
        text1: ""
    }

    const prodCardData1 = {
        title: "Market Assistant",
        text: 'Check out our new feature! ',
        text1: "Get market research and shopping done while you relax."
    }


    return (

        <div className='pt-40'>
            <h1 className='text-6xl font-semibold my-10 ' data-aos='fade-up'>
                Services that allows convenience
            </h1>
            <p className='text-[30px] mb-20' >Our platform enables you to expand your interest, connecting you <br /> with relevant people.</p>
            <img src="" alt="Products image" className='w-[1122px] h-[600px] m-auto' />

            {/* Swift customer interface */}

            <div className='my-40'>

                <ProductCard
                    heading={prodCardData.title}
                    text={prodCardData.text}
                    imageUrl={phone1}
                    text1={prodCardData.text1}
                />
            </div>

            <h2 className='text-6xl my-10' data-aos='zoom-in'>Convenience at its peak!</h2>
            <p className='text-2xl leading-[1.5]'>We’re excited to introduce MA, our human assistants that <br /> further support and help customers effortlessly get their <br /> shopping done fast from every market, stores & shops required.</p>


            <div className='mt-24'>

                {/* Market assistance */}

                <ProductCardOne
                    heading={prodCardData1.title}
                    text={prodCardData1.text}
                    imageUrl={phone2}
                    text1={prodCardData1.text1}
                />
            </div>

            <div className='flex justify-between mx-40 my-40 ' data-aos='fade-up'>
                <div className='text-left py-20'>
                    <h2 className=' text-5xl my-5 ' data-aos='zoom-in'>Become a Global Partner</h2>
                    <p className='text-2xl leading-[1.5] mb-7 '>Connect to a large number of <br /> potential customers for growth <br /> and profit.</p>
                    <div className='flex justify-left items-center gap-10 mt-14'>
                        <button className='bg-[#E01A4F] px-6 py-[8px] font-bold text-white'>Join now</button>

                        <Link to={"/partner/"}>
                            <LearnButton />
                        </Link>
                    </div>
                </div>
                <img src={phone3} alt="" className='w-[380px]' />
            </div>

            <p className='text-5xl leading-[1.5] ' data-aos='fade-up'>
                <span className='text-[#E01A4F]'>La'ada</span> builds products that help people connect, grow <br /> their businesses and join community to foster <br /> enclosure.
            </p>
            <div className='w-[920px] h-[624px] my-40 relative m-auto' data-aos='fade-up'>
                <img src={phone5} alt="" className='w-[250px] absolute top-0 left-0 ' />
                <img src={phone4} alt="" className='w-[250px] absolute bottom-0 right-[330px] ' />
                <img src={phone1} alt="" className='w-[250px] absolute right-0 top-0 ' />
                <button className='bg-[#E01A4F] px-6 py-[8px] font-bold text-white absolute bottom-3 right-3 ' data-aos='zoom-in'>Download App</button>
            </div>
        </div>
    )
}

export default Product