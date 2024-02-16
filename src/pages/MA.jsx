import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import maPhone from '../assets/maPhone.png'
import convenience from '../assets/Convenience.png'
import convenience2 from '../assets/Convenience2.png'
import convenience3 from '../assets/Convenience3.png'
import convenience4 from '../assets/Convenience4.png'
import vendor1 from '../assets/partner2.png'
import LearnButton from '../Components/LearnButton'
import CommunityBottomStrip from '../Components/CommunityBottomStrip'
import MaCarousel from '../Components/carousel/MaCarousel';


const MA = () => {
    useEffect(() => {
        AOS.init({ duration: 2500 })
    }, [])

    const slides = [
        { imageUrl: `${convenience}`, text: "With La'ada Market Assistant;", text2: "Convenience", text3: "is our watch word", },

        { imageUrl: `${convenience2}`, text: 'With La’ada Market Assistant;', text2: "Instant chat", text3: "is activated", },

        { imageUrl: `${convenience3}`, text: 'With La’ada Market Assistant;', text2: "Buy from Places", text3: "you could only wish", },

        { imageUrl: `${convenience4}`, text: "With La’ada Market Assistant; Delivery is", text2: "Secure, fast and easy", text3: "", },

    ];

    return (
        <div>

            <section className='bg-[#FCE8ED] mx-40 flex flex-col items-center mt-32 mb-0 p-5'>
                <h2 className='text-4xl my-10' data-aos='zoom-in'>
                    Your Market Assistant on the go
                </h2>
                <img src={maPhone} alt="market assistance " className=' mb-5 ' data-aos='fade-up' />
                <h3 className='px-14 my-8 text-2xl leading-[2] ' data-aos='fade-up'>With the simplistic interface, your experience to sh We are here to guide you through your shopping experience, answer your questions, and ensure you find exactly what you're looking for. Don't hesitate to reach out we're here to help</h3>
                <button className='w-[103px] h-12 bg-[#E01A4F] text-white rounded' data-aos='fade-up'>Join now</button>
            </section>


            <section className='flex flex-col items-center  mt-40'>

                <h2 className='text-4xl mt-4'><span className='text-[#E01A4F]' data-aos='fade-up'></span> </h2>

                <MaCarousel
                    slides={slides}
                />
            </section>

            <div className='flex ] gap-20 justify-center items-center px-40  z-10 mb-40'>


                <div className='flex items-center mt-20 ' >
                    <img src={vendor1} alt="vendor" className='' />
                </div>

                <div className='w-[433px] text-left leading-[2.2] '>
                    <h3 className='font-semibold mb-5 text-4xl ' data-aos='fade-up'>
                        Become a vendor
                    </h3>
                    <p className='mb-4 leading-[2] text-2xl' data-aos='fade-up'>
                        Lorem ipsum dolor sit amet consectetur. Rhoncus commodo eget lectus metus est sed tincidunt enim. Sit praesent gravida elit id eget. Sed mauris lacinia mattis dui.
                    </p>
                    <Link to={"/vendor/"}>

                        <LearnButton />
                    </Link>

                </div>
            </div>
            <CommunityBottomStrip />
        </div>
    )
}

export default MA