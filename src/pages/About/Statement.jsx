import React from 'react'
import NavBar from '../../Components/shared/NavBar'
import Footer from '../../Components/shared/Footer'
import CoreValueCard from '../../Components/shared/CoreValueCard'
import CoreValueCardOne from '../../Components/shared/CoreValueCardOne'
import balloon from '../../assets/balloon.png'
import newsImage1 from '../../assets/new1.png'
import newsImage2 from '../../assets/new2.png'
import newsImage3 from '../../assets/new3.png'
import resilience from '../../assets/resilience.png'
import consistent from '../../assets/consistent.png'
import furniture from '../../assets/furniture.png'
import LatestNewsCard from '../../Components/shared/LatestNewsCard'
import LearnButton from '../../Components/LearnButton'
import circleBox from '../../assets/circleBox.png'

const Statement = () => {

    const dataResilience = {
        headText: 'Resilience',

        paraText: 'Explore a treasure trove of goodies from nearby sellers. Find everything from handcrafted goods to tasty treats in our special customer section.',
    }

    const dataConsistency = {
        headText: 'Consistency',

        paraText: "Sell your stuff and meet lots of buyers on La'ada's . Use simple tools to grow your business and share what you love.",
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
        <div>
            <section className=''>

                <h3 className=' text-3xl font-semibold my-20'>OUR MISSION</h3>
                <div className='px-20 flex gap-36'>
                    <img src={balloon} alt="" className='w-[642px]' />
                    <div className='text-justify '>
                        <h3 className=' text-4xl mb-16 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor a amet cupiditate repudiandae quae enim nesciunt? Reprehenderit, ab?
                        </h3>
                        <p className=' text-2xl  '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, vero?
                        </p>
                    </div>
                </div>
            </section>

            <h2 className='text-3xl mt-40 font-semibold '>CORE VALUES</h2>

            <CoreValueCard
                title={dataResilience.headText}
                text={dataResilience.paraText}
                imageUrl={resilience}
            />

            <CoreValueCardOne
                title={dataConsistency.headText}
                text={dataConsistency.paraText}
                imageUrl={consistent}
            />
            <CoreValueCard
                title={dataResilience.headText}
                text={dataResilience.paraText}
                imageUrl={resilience}
            />

            <div>
                <img src={circleBox} alt="" />
            </div>
            <section className='m-20 flex'>
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