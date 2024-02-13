import React from 'react'
import StoreCards from '../Components/StoreCards'
import marketItem from '../assets/marketItems.png'
import BackArrow from '../Components/BackArrow'
import searchIcon from '../assets/searchIcon.png'
import sortIcon from '../assets/sortIcon.png'

const Stores = () => {

    const MKCard = {
        name: "Musa's store",
    }
    return (

        <div>

            <div className='flex px-20 mb-32 mt-10 '>
                <BackArrow />
            </div>
            {/*   <div className='flex border border-black rounded items-center w-fit'>
                            <img src={searchIcon} alt="" className='py-1 h-7 ml-2 ' />
                            <input type="search" name="market search" id="" placeholder='Search market' className='text-center rounded py-1 w-72 outline-none ' />
                        </div> */}
            <div className='mx-20 my-2 flex justify-between items-center '>
                <h2 className='text-[32px] font-semibold'>
                    La'ada Market Place
                </h2>
                <div className='flex border border-[#6B7B93] rounded items-center justify-between  '>
                    <img src={searchIcon} alt="" className='py-1 h-7 ml-2 ' />

                    <input type="search" name="market search" id="" placeholder='Search market' className='text-left pl-2 rounded py-1 w-[40vw] outline-none ' />

                </div>
            </div>

            <div className='flex justify-between px-20 mb-16'>
                <ul className='flex'>
                    <li>
                        <button className='border p-1 rounded mr-3'>Oron fish market</button>
                    </li>
                    <li>
                        <button className='border p-1 rounded mr-3'>Fish market</button>
                    </li>
                    <li>
                        <button className='border p-1 rounded mr-3'>Fish market</button>
                    </li>
                    <li>
                        <button className='border p-1 rounded mr-3'>Fish market</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button>
                            <div className='flex items-center gap-4  '>
                                <h3>Sort</h3>
                                <img src={sortIcon} alt="" />
                            </div>
                        </button>
                    </li>
                </ul>
            </div>

            <div className='flex flex-wrap justify-center gap-3'>

                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
                <StoreCards
                    name={MKCard.name}
                    image={marketItem}
                />
            </div>
        </div>
    )
}

export default Stores