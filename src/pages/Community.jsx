import React from 'react'
import community from '../assets/community.png'
import ReuseableCard from '../Components/shared/ReuseableCard'
import ReuseableCardOne from '../Components/shared/ReuseableCardOne'
import customerPic from '../assets/customer.png'
import vendorImage from '../assets/VendorImage.png'
import partnerImage from '../assets/partnerImage.png'
import BushMarket from '../Components/shared/BushMarket'
import CommunityBottomStrip from '../Components/CommunityBottomStrip'
import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



const Community = () => {

   
    const dataCustomer = {
        headText: 'Who are you?',

        paraText: 'Explore a treasure trove of goodies from nearby sellers. Find everything from handcrafted goods to tasty treats in our special customer section. Begin your adventure now to uncover the charm of local markets.',
    }
    const dataVendor = {
        headText: 'Vendor',

        paraText: "Sell your stuff and meet lots of buyers on La'ada's . Use simple tools to grow your business and share what you love. Join us now and be part of our big seller group.",
    }

    const dataPartner = {
        headText: 'Partner',

        paraText: "Collaborate, innovate, and grow with La'ada. Whether you're a local organization, tech provider, or industry expert, join forces with us to unlock new opportunities and transform the way we shop and connect.",
    }


    return (
        <div>
            <div className='m-20 mt-0'>
                <div className='w-full  bg-cover flex flex-col px-36 justify-center h-[480px] bg-no-repeat text-left text-white tracking-widest' style={{ backgroundImage: `url(${community})` }}>
                    <h2 className='  text-[64px] font-bold '>Communities</h2>

                    <p className='text-[20px]'>Welcome to a new way to <br /> shop, connect and <br /> experience digital age <br /> with La’ada.</p>
                </div>
            </div>
            <div>
                <h3 className='text-4xl font-bold mb-7 leading-[1.5] '>Stay connected to people & places who share similar <br /> interest as you, enjoy unlimited real-time market <br /> information </h3>
                <div>
                    <button className='text-[#e01a4f] rounded-[6px] px-6 py-[8px] font-bold'>
                        Explore</button>
                    <button className='bg-[#E01A4F] rounded-[6px] px-6 py-[8px] font-bold text-white'>
                        Join now</button>
                </div>
            </div>

            <Link to={"/customer/"}>
                <ReuseableCard
                    heading={dataCustomer.headText}
                    imageUrl={customerPic}
                    paragraph={dataCustomer.paraText}
                />
            </Link>

            <Link to={"/vendor/"}>
                <ReuseableCardOne
                    heading={dataVendor.headText}
                    imageUrl={vendorImage}
                    paragraph={dataVendor.paraText}
                />
            </Link>
            <Link to={"/partner/"}>

                <ReuseableCard
                    heading={dataPartner.headText}
                    imageUrl={partnerImage}
                    paragraph={dataPartner.paraText}
                />
            </Link>

            <BushMarket />
            <CommunityBottomStrip />


        </div>
    )
}

export default Community