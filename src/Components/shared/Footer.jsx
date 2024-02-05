import React from 'react'
import Logo from '../Logo'
import PlayStore from '../../assets/AppStore.png'
import AppStore from '../../assets/PlayStore.png'
import X from '../../assets/X.png'
import FB from '../../assets/FB.png'
import Instagram from '../../assets/Instagram.png'
import LinkedIn from '../../assets/LinkedIn.png'
const Footer = () => {
    return (
        <>
            <div className='bg-[#0C0C0C] bg-opacity-90 h-[358px] px-20 pt-[60px] '>


                <div className=' flex justify-between '>

                    <div className='flex items-end' >
                        <Logo />
                    </div>
                    <div className='flex justify-center gap-20 grow'>
                        <ul className='text-left text-white'>
                            <li>Business</li>
                            <li>About</li>
                            <li>Feature</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>

                        <ul className='text-white text-left'>
                            <li>Blog</li>
                            <li>Newsletter</li>
                            <li>Privacy Policies</li>
                            <li>Works</li>
                        </ul>

                        <ul className='text-white text-left'>
                            <li>Blog</li>
                            <li>Newsletter</li>
                            <li>Privacy Policies</li>
                            <li>Works</li>
                        </ul>
                    </div>
                    <div >
                        <img src={AppStore} alt="App Store" className='mb-4' />
                        <img src={PlayStore} alt="Play Store" />
                    </div>
                </div>


                <hr className="w-full  mx-auto my-4 bg-white" />

                <div className='w-full flex justify-between pt-6'>
                    <p className=' text-gray-400  '>© Copyright 2023, All Rights Reserved by La’ada</p>

                    <div className='flex items-end gap-4'>
                        <img src={X} alt="" />
                        <img src={FB} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={LinkedIn} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer