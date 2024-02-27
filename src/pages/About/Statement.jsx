import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import CoreValueCard from '../../Components/shared/CoreValueCard'
import CoreValueCardOne from '../../Components/shared/CoreValueCardOne'
import balloon from '../../assets/balloon.png'
import newsImage1 from '../../assets/new1.png'
import newsImage2 from '../../assets/new2.png'
import newsImage3 from '../../assets/new3.png'
import resilience from '../../assets/resilience.png'
import consistent from '../../assets/consistent.png'
import LatestNewsCard from '../../Components/shared/LatestNewsCard'
import LearnButton from '../../Components/LearnButton'
import circleBox from '../../assets/circleBox.png'

const Statement = () => {
    useEffect(() => {
        AOS.init({ duration: 2500 })
    }, [])


    const trustWorthy = {
        headText: 'Trustworthy',

        paraText: 'We accomplish incredibly by showing how trustworthy we can be. We work to stay committed to you.',
    }
    
    const transparency = {
        headText: 'Transparency',

        paraText: 'There are no hidden pathways when we are involved. Our system is to collaborate with everyone to build transparent processes and solutions.',
    }

    const dataConsistency = {
        headText: 'Consistency',

        paraText: "Sell your stuff and meet lots of buyers on La'ada's . Use simple tools to grow your business and share what you love.",
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

        <div>
            <section className=''>

                <h3 className=' text-3xl font-semibold my-20'>OUR MISSION</h3>
                <div className=' px-20 flex gap-36'>

                {/* <div className='px-20 flex gap-36'> */}
                    <img src={balloon} alt="" className='w-[642px]' />
                    <div className='text-justify '>
                        <h3 className=' text-3xl mb-16 '>
                          We create happiness for people by building market solutions for people who buy and sell goods.
                        </h3>
                        <p className=' text-2xl  '>
                            We are changing the shape of local markets purchase through the solutions we develop,
                            thus translating meaningful impact around local market hubs in Africa.
                        </p>
                    </div>
                </div>
            </section>

            <h2 className='text-3xl mt-40 font-semibold '>CORE VALUES</h2>

            <CoreValueCard
                title={trustWorthy.headText}
                text={trustWorthy.paraText}
                imageUrl={resilience}
            />

            <CoreValueCardOne
                title={dataConsistency.headText}
                text={dataConsistency.paraText}
                imageUrl={consistent}
            />
            <CoreValueCard
                title={transparency.headText}
                text={transparency.paraText}
                imageUrl={resilience}
            />

            <div>
                <img src={circleBox} alt="" />
            </div>
            <section className='m-20 flex' data-aos='fade-up'>
                <div className=' h-[300px] w-[600px] bg-[#FCE8ED] py-7 px-14 text-left '>
                    <h3 className=' font-semibold text-2xl'>Privacy and Security</h3>
                    <p className='my-5 '>We feature experience that gives you the choice to choose how your data is used.</p>
                    <LearnButton />
                </div>
                <div>

                </div>
            </section>
            
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

export default Statement