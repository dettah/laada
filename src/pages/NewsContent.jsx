import React from 'react'
import { Link } from 'react-router-dom';
import BackArrow from '../Components/BackArrow'

const NewsContent = () => {
    return (
        <div className='px-10'>
            <Link to={"/news/"}>
                <div className='flex mt-16 mb-10'>
                    <BackArrow />
                </div>
            </Link>
            <section className='flex'>

                <section className='min-w-[60%]'>

                    <h3 className='text-left text-2xl'>Partners</h3>
                    <h2 className='text-left text-4xl'>Lorem ipsum dolor sit amet.</h2>

                    <p className='text-left'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque quia facilis, nobis sapiente necessitatibus eligendi voluptatum praesentium illo sequi placeat quidem! Voluptatibus, consequuntur esse accusantium provident similique iste quasi nam maiores aperiam iusto commodi quos ducimus ratione ullam sit? Officia optio ex sed doloremque itaque at! <br /> Voluptate nemo aliquid vitae veritatis eligendi obcaecati quis minus provident alias deleniti architecto nobis corrupti, facilis, explicabo rerum quo, modi hic adipisci sequi libero ipsam id quidem? Quisquam tenetur non nam necessitatibus enim sequi suscipit beatae itaque. br
                        Suscipit at similique illo nesciunt provident facilis architecto veniam, distinctio, eaque porro voluptatem obcaecati ducimus neque?
                    </p>

                    <div>
                        <h4>Catergory: Facebook, Policy</h4>
                        <h4>Tags: HortiNigeria, Greenport, Horticulture, Nigeria, Production</h4>
                    </div>
                    <div>
                        <h3>RELLATED NEWS</h3>
                        <div></div>
                    </div>
                </section>



                <aside>
                    <div>

                        <h3>Topics</h3>
                        <p>Agriculture</p>
                        <p>Production</p>
                        <p>Cosmetics</p>
                        <p>Prices of goods</p>
                        <p>Logistics</p>
                    </div>
                    <div>
                        <h3>Featured news</h3>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <div className=''>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor repudiandae fugiat quam dolorum cum dolorem, corporis eaque sequi dicta inventore aut assumenda eius unde delectus reiciendis doloribus sapiente dignissimos?</p>
                    </div>


                </aside>
            </section>



        </div>
    )
}

export default NewsContent