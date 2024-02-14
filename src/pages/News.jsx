import { Link } from 'react-router-dom';
import React from 'react'
import NewsCard from '../Components/NewsCard'
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
          <NewsCard />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard />
        </Link>
        <Link to={"/news-content/"}>
          <NewsCard />
        </Link>
      </div>
      <div className='flex justify-between px-40 py-20 bg-[#FEEEED] my-52 '>

        <div className='w-[50%] text-left px-20'>
          <h2 className='font-bold text-5xl mb-10'>Lorem</h2>
          <p className='text-xl leading-[2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit molestias deleniti quos optio! Maxime, quod quia! Nostrum, quia tempora?</p>
        </div>
        <div>

          <img src={VendorImage} alt="" className='  w-[500px] ' />
        </div>
      </div>
      <div className='text-left px-28'>
        <button className='flex gap-2 items-center'>
          <img src={dropdown} alt="" />
          <span>More news</span>
        </button>
      </div>

    </div>
  )
}

export default News