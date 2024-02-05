import React from 'react'
import NavBar from '../Components/shared/NavBar'
import Footer from '../Components/shared/Footer'
import HeroBg from '../assets/heroBg.png'
import school from '../assets/HeroRhombus/Schools.png'
import print from '../assets/HeroRhombus/Printshop.png'
import store from '../assets/HeroRhombus/Stores.png'
import taxi from '../assets/HeroRhombus/LocalTaxi.png'
import seeAll from '../assets/HeroRhombus/seeAll.png'

const LandingPage = () => {
  return (
    <div>
      <NavBar />

      <div className='w-full h-[744px]bg-cover pt-[200px] h-screen rounded-[10px]' style={{ backgroundImage: `url(${HeroBg})` }}>

        <h1 className='pb-6 text-[56px]'>Find anything</h1>
        <input type="search" name="search" placeholder='Type to find' className='px-6 rounded mb-20 w-[630px] h-[56px]' id="" />


        <div className='flex justify-center'>
          <img src={school} alt="school" />
          <img src={print} alt="print" />
          <img src={store} alt="stores" />
          <img src={taxi} alt="Taxi" />
          <img src={seeAll} alt="see all" />
        </div>




      </div>










      <Footer />
    </div>
  )
}

export default LandingPage