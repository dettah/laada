import React from 'react'
import heroImage from '../assets/BMHero.png'
import searchIcon from '../assets/searchIcon.png'
import sortIcon from '../assets/sortIcon.png'
import MarketCard from '../Components/MarketCard'
import marketItem from "../assets/marketItems.png"
import LearnButton from '../Components/LearnButton'
import { data, marketsPreview } from '../../data'
import { Link } from 'react-router-dom'

const Com_BushMarket = () => {
    const MKCard = {
        mkt_nm: "Oron Fish Market",
        shp_nm: "Musa's store",
    }
    return (


        <div>
            <section className='md:mx-10 mx-5 overflow-x-hidden rounded'>
                <div className=' bg-cover flex flex-col lg:pl-[350px] xl:pl-[400px] rounded-[10px] justify-center md:h-[329px] w-full lg:m-20 md:mb-16 mb-16 bg-no-repeat h-[6rem]  tracking-widest' style={{ backgroundImage: `url(${heroImage})` }}>

                    <h2 className='lg:text-4xl xl:text-5xl hidden lg:block font-bold mb-4'>Bush Market Community</h2>
                    <p className='lg:pl-[150px] text-[20px] hidden lg:block font-semibold  '>From farm to table, Your trusted food network</p>
                </div>
                
                <div className=' mb-5 text-center '>
                    <h2 className='lg:text-5xl   font-bold block lg:hidden mb-4 '>Bush Market <br className='lg:block hidden ' /> Community</h2>
                    <p className='lg:pl-[150px]  text-4xl block lg:text-[20px] lg:hidden font-semibold '>From farm to table, Your trusted food network</p>
                </div>

                <div className=' border-b-2 md:mx-[7.5rem] pb-[180px] border-[#BFBFBF] mx-5 '>
                    <p className=' pt-6 text-2xl leading-[2.5]'>At Bush Market, we're more than just a marketplace , we're your digital neighborhood hub. Join our thriving community to stay in the loop on local insights, market trends, and exciting happenings in your area. Whether you're looking to buy, sell, or simply connect with neighbors, Bush Market has you covered. Sign up now and become part of our vibrant community</p>
                </div>
            </section>
            <section>
                <div className='px-20 flex justify-between mt-60 '>
                    <h2 className='font-semibold text-4xl'>La'ada Market place</h2>
                    {/* <div className='flex gap-10 float-right  '>
                        <div className='flex border border-black rounded items-center w-fit'>
                            <img src={searchIcon} alt="" className='py-1 h-7 ml-2 ' />
                            <input type="search" name="market search" id="" placeholder='Search market' className='text-center rounded py-1 w-72 outline-none ' />
                        </div>
                        <div className='flex items-center gap-4  '>
                            <h3>Sort</h3>
                            <img src={sortIcon} alt="" />
                        </div>
                    </div> */}
                </div>


                <div className='grid gap-y-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 w-full px-20 mt-6'>
                    {marketsPreview.map(item => (
                        <div key={item.id}>

                            <MarketCard title={item.storeName} image={item.marketImage} text={item.marketName} showTitle={false} />
                        </div>
                    ))}
                </div>
                <Link to={'/markets'}>
                    <div className='flex justify-end w-full px-20 mt-6'>
                        <LearnButton />
                    </div>
                </Link>
            </section>

        </div>
    )
}

export default Com_BushMarket