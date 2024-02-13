import React from 'react'
import heroImage from '../assets/BMHero.png'

const Com_BushMarket = () => {
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
                
            </section>
        </div>
    )
}

export default Com_BushMarket