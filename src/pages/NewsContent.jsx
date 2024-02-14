import React from 'react'
import { Link } from 'react-router-dom';
import BackArrow from '../Components/BackArrow'
import rect from '../assets/rect.png'
const NewsContent = () => {
    return (
        <div className='px-10'>
            <Link to={"/news/"}>
                <div className=' w-fit flex mt-16 mb-10'>
                    <BackArrow />
                </div>
            </Link>
            <section className='flex gap-10'>

                <section className='min-w-[70%]'>

                    <h3 className='text-left text-2xl mb-4'>Partners</h3>
                    <h2 className='text-left my-3 text-4xl'>Lorem ipsum dolor sit amet.</h2>

                    <p className='text-left pr-40 leading-[2] '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque quia facilis, nobis sapiente necessitatibus eligendi voluptatum praesentium illo sequi placeat quidem! Voluptatibus, consequuntur esse accusantium provident similique iste quasi nam maiores aperiam iusto commodi quos ducimus ratione ullam sit? Officia optio ex sed doloremque itaque at! <br /> Voluptate nemo aliquid vitae veritatis eligendi obcaecati quis minus provident alias deleniti architecto nobis corrupti, facilis, explicabo rerum quo, modi hic adipisci sequi libero ipsam id quidem? Quisquam tenetur non nam necessitatibus enim sequi suscipit beatae itaque. br
                        Suscipit at similique illo nesciunt provident facilis architecto veniam, distinctio, eaque porro voluptatem obcaecati ducimus neque?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae laborum fugiat inventore? Ea fugiat ut exercitationem doloribus expedita suscipit aspernatur est eveniet aliquid nam consequatur, odit deserunt dolores id sequi molestias laudantium vel corrupti, nihil maiores modi adipisci reprehenderit magni commodi. Libero consectetur nesciunt molestias repudiandae sequi aperiam obcaecati omnis necessitatibus dignissimos nostrum vitae eaque hic ipsa fugiat asperiores doloribus totam porro deleniti, expedita nihil tenetur perferendis. <br /> Distinctio, exercitationem quibusdam nihil consectetur sed deserunt ut laudantium animi incidunt aperiam, qui repudiandae doloribus, dolor pariatur atque dolores. Fuga nobis fugiat a incidunt! Doloremque voluptatem necessitatibus maiores, praesentium error hic dolores sit harum nesciunt nisi minima, adipisci voluptatibus, excepturi officia expedita et voluptates eligendi porro nostrum cupiditate? <br /> Aperiam voluptatibus quo obcaecati ex necessitatibus voluptates numquam doloremque nostrum? Quaerat praesentium minima ullam ea adipisci dolore corrupti ipsam voluptas similique, aspernatur accusantium assumenda vel delectus atque consequuntur cupiditate totam iusto numquam exercitationem libero in corporis voluptatum perspiciatis! <br /> Tempore ex officiis, magnam tenetur exercitationem totam unde perspiciatis omnis amet praesentium sed animi cumque assumenda, reprehenderit molestias? Exercitationem fuga omnis aut expedita facilis saepe minus quae iusto necessitatibus est non esse repellat error quaerat soluta fugit nulla, sequi quam explicabo? Non consectetur maxime saepe soluta quidem.

                    </p>

                    <div className='text-left mt-20 font-semibold'>
                        <h4 className='font-'>Catergory: Facebook, Policy</h4>
                        <h4>Tags: HortiNigeria, Greenport, Horticulture, Nigeria, Production</h4>
                    </div>
                    <div className='text-left'>
                        <h3 className='text-2xl mt-10 mb-5 ' >RELATED NEWS</h3>
                        <p>lorem</p>
                        <div>
                            <h3>Balanced diet beyond Nigerian's reach as prices skyrocket</h3>
                            <p>Olumide Omotayo . February 10, 2024</p>


                        </div>
                    </div>
                </section>



                <aside className='flex flex-col items-start'>
                    <div className='flex flex-col items-start gap-10 '>

                        <div className='flex flex-col items-start gap-3 '>
                            <h3>Topics</h3>
                            <p>Agriculture</p>
                            <p>Production</p>
                            <p>Cosmetics</p>
                            <p>Prices of goods</p>
                            <p>Logistics</p>
                        </div>
                        <div className='text-left '>

                            <h3 className='font-semibold '>Featured news</h3>
                            <h2 className='text-2xl py-4'>Lorem ipsum dolor sit amet consectetur.</h2>
                            <img src={rect} alt="" />
                        </div>
                        <div className=''>

                        </div>
                        <p className='text-left' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor repudiandae fugiat quam dolorum cum dolorem, corporis eaque sequi dicta inventore aut assumenda eius unde delectus reiciendis doloribus sapiente dignissimos?</p>
                    </div>


                </aside>
            </section>



        </div>
    )
}

export default NewsContent