import { Link } from 'react-router-dom';
import React from 'react'
import {NewsCard,NewsCard1, NewsCard2,NewsCard3, NewsCard4, NewsCard5} from '../Components/NewsCard'
import VendorImage from '../assets/VendorImage.png'
import dropdown from '../assets/dropdown.png'

const News = () => {
  return (
    <div>
      <h2 className=' text-left mx-20 mt-24 mb-10 text-5xl font-bold '>Latest News</h2>
      <div className='flex flex-wrap justify-between  '>

        <Link to={"/news-content/"}>
          <NewsCard />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard1 />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard2 />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard3 />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard4 />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard5 />
        </Link>
      </div>
      <div className='flex justify-between px-40 py-20 bg-[#FEEEED] my-52 '>

        <div className='w-[50%] text-left px-20'>
          <h2 className='font-bold text-5xl mb-10'>Tech Sector Thrives in Nigeria</h2>
          <p className='text-xl leading-[2]'>Nigeria's tech sector is witnessing a surge in growth, defying economic challenges in the country. Startups in the tech space are raising significant funding from venture capitalists..</p>
        </div>
        <div>

          <img src={VendorImage} alt="" className='  w-[500px] ' />
        </div>
      </div>
      <div className='text-left px-28'>
        <button className='flex gap-2 items-center'>
          <img src={dropdown} alt="" />
          <span>More news</span>s
        </button>
      </div>

    </div>
  )
}

export default News