
import React from 'react'
import CustomerSubHero from '../Components/CustomerSubHero'
import customerImage from '../assets/customer.png'
import ReuseableCardOne from '../Components/shared/ReuseableCardOne'
import VendorImage from '../assets/VendorImage.png'
import ReuseableCard from '../Components/shared/ReuseableCard'
import partnerImage from '../assets/partnerImage.png'
import BushMarket from '../Components/shared/BushMarket'
import CommunityBottomStrip from '../Components/CommunityBottomStrip'


const Vendor = () => {

    const heroData = {
        text: "Welcome to La'ada's hub, where people connect and stories happen. Join our lively community of shoppers, sellers, and friends, and dive into the local culture. Whether you're here to explore, connect, or just chat, you'll feel right at home in our busy market.",

    }

    const RCData = {
        title: 'Vendor',
        text: "Sell your stuff and meet lots of buyers on La'ada's . Use simple tools to grow your business and share what you love. Join us now and be part of our big seller group.",

    }
    const RCOData = {
        title: 'Partner',

        text: "Collaborate, innovate, and grow with La'ada. Whether you're a local organization, tech provider, or industry expert, join forces with us to unlock new opportunities and transform the way we shop and connect.",

    }


    return (
        <div>
            <h2 className='text-6xl mt-20 mb-10'>Want to become a global <span className='text-[#E01A4F]'>
                    vendor?
                </span>
            </h2>
            <CustomerSubHero
                text={heroData.text}
                image={VendorImage}
            />
            <ReuseableCardOne
                heading={RCData.title}
                paragraph={RCData.text}
                imageUrl={customerImage}
            />

            <ReuseableCard
                heading={RCOData.title}
                paragraph={RCOData.text}
                imageUrl={partnerImage}
            />
            <BushMarket />
            <CommunityBottomStrip />
        </div>
    )
}

export default Vendor