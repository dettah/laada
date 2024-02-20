import React, { useState } from 'react'
import BushMarket from '../Components/shared/BushMarket'
import MarketCard from '../Components/MarketCard'
import searchIcon from '../assets/searchIcon.png'

import { data, marketCategories } from '../../data'
import { Link } from 'react-router-dom'

const Markets = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const results = !searchTerm
        ? data
        : data.filter(market =>
            market.marketName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    
  
    return (
        <div className='pt-8'>
            <div>
                <div className='lg:flex justify-between items-center px-20'>
                    <div><h3 className='font-bold text-xl pb-4 lg:pb-0'>La'ada Market Place</h3></div>

                    <div className='flex border bg-white border-black rounded items-center w-fit'>
                        <img src={searchIcon} alt="" className='py-1 h-7 ml-2 ' />
                        <input type="search" name="market search" id="" value={searchTerm}
                            onChange={handleChange} placeholder='Search market' className='rounded py-1 px-4 w-96 outline-none ' />
                    </div>
                </div>
                <div className='flex flex-wrap gap-2 md:gap-x-6 lg:gap-x-8 items-center px-20 md:py-6'>
                    {marketCategories.map(item => (
                        <Link>
                            <li className='list-none p-2 border border-gray-300 border-opacity-30 text-lg' key={item.id}>{item.name}</li>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='grid gap-y-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 w-full px-20 mt-6'>
                {results.map(item => (
                    <div key={item.id}>
                        <MarketCard title={item.storeName} image={item.marketImage} text={item.marketName} showTitle = {false} showButton={true}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Markets