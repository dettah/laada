import React from 'react'
import heroImage from '../assets/BMHero.png'
import searchIcon from '../assets/searchIcon.png'
import sortIcon from '../assets/sortIcon.png'
import MarketCard from '../Components/MarketCard'
import marketItem from "../assets/marketItems.png"

const Com_BushMarket = () => {
    const MKCard = {
        mkt_nm: "Oron Fish Market",
        shp_nm: "Musa's store",
    }
    return (


        <div>
            <section className='mx-10'>
                <div className=' bg-cover flex flex-col pl-[400px] rounded-[10px] justify-center h-[329px] m-20 bg-no-repeat  tracking-widest' style={{ backgroundImage: `url(${heroImage})` }}>

                    <h2 className='text-5xl font-bold mb-4'>Bush Market Community</h2>
                    <p className='text-[20px]'>From farm to table, Your trusted food network</p>
                </div>
                <div className=' border-b-2 mx-[7.5rem] pb-[180px] border-[#BFBFBF] '>
                    <p className=' text-2xl leading-[2]'>At Bush Market, we're more than just a marketplace , we're your digital neighborhood hub. Join our thriving community to stay in the loop on local insights, market trends, and exciting happenings in your area. Whether you're looking to buy, sell, or simply connect with neighbors, Bush Market has you covered. Sign up now and become part of our vibrant community</p>
                </div>
            </section>
            <section>
                <div className='px-20 flex justify-between mt-60 '>
                    <h2 className='font-semibold text-4xl'>La'ada Market place</h2>
                    <div className='flex gap-10 float-right  '>
                        <div className='flex border border-black rounded items-center w-fit'>
                            <img src={searchIcon} alt="" className='py-1 h-7 ml-2 ' />
                            <input type="search" name="market search" id="" placeholder='Search market' className='text-center rounded py-1 w-72 outline-none ' />
                        </div>
                        <div className='flex items-center gap-4  '>
                            <h3>Sort</h3>
                            <img src={sortIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap gap-16 justify-between  w-full px-20 mt-10'>
                    <MarketCard
                        title={MKCard.mkt_nm}
                        text={MKCard.shp_nm}
                        image={marketItem}
                    />
                    <MarketCard
                        title={MKCard.mkt_nm}
                        text={MKCard.shp_nm}
                        image={marketItem}
                    />
                    <MarketCard
                        title={MKCard.mkt_nm}
                        text={MKCard.shp_nm}
                        image={marketItem}
                    />
                    <MarketCard
                        title={MKCard.mkt_nm}
                        text={MKCard.shp_nm}
                        image={marketItem}
                    />
                    <MarketCard
                        title={MKCard.mkt_nm}
                        text={MKCard.shp_nm}
                        image={marketItem}
                    />
                    <MarketCard
                        title={MKCard.mkt_nm}
                        text={MKCard.shp_nm}
                        image={marketItem}
                    />
                </div>
            </section>

        </div>
    )
}

export default Com_BushMarket