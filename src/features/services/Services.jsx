import { Link } from 'react-router';
import { images } from '../../shared/utils/images';

export default function Services() {
    return <>
        <main className='bg-black'>

            <section className='bg-services text-center'>

                <h1 className="text-[clamp(3rem,9vh,10rem)] pt-50">Services</h1>
                <p className="text-[clamp(1rem,1vh,2rem)]">Your comfort is our priority.</p>

                <div className="py-20 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 grid-flow-row gap-5 justify-between">

                    <article className='w-auto pb-5 relative text-white flex flex-col flex-wrap items-center justify-left max-lg:justify-center gap-5 '>
                        <img src={images.spa} alt="SPA picture" className='w-sm border' />
                        <div className='absolute bg-black w-full py-5 bottom-0 border'>
                            <h2 className='text-3xl'>Luxury SPA</h2>
                            <Link to="/SPA" className='hover:text-red-600'>Read more ⟶</Link>
                        </div>
                    </article>
                    <article className='w-auto pb-5 relative text-white flex flex-col flex-wrap items-center justify-left max-lg:justify-center gap-5 '>
                        <img src={images.finedining} alt="Fine Dining picture" className='w-sm border' />
                        <div className='absolute bg-black w-full py-5 bottom-0 border'>
                            <h2 className='text-3xl'>FIne Dining</h2>
                            <Link to="/FineDining" className='hover:text-red-600'>Read more ⟶</Link>
                        </div>
                    </article>
                    <article className='w-auto pb-5 relative text-white flex flex-col flex-wrap items-center justify-left max-lg:justify-center gap-5 '>
                        <img src={images.airport} alt="Airport Transfer picture" className='w-sm border' />
                        <div className='absolute bg-black w-full py-5 bottom-0 border'>
                            <h2 className='text-3xl'>Airport Transfer</h2>
                            <Link to="/AirportTransfer" className='hover:text-red-600'>Read more ⟶</Link>
                        </div>
                    </article>
                    <article className='w-auto pb-5 relative text-white flex flex-col flex-wrap items-center justify-left max-lg:justify-center gap-5 '>
                        <img src={images.fitness} alt="Fitness Center picture" className='w-sm border' />
                        <div className='absolute bg-black w-full py-5 bottom-0 border'>
                            <h2 className='text-3xl'>Fitness Center</h2>
                            <Link to="/FitnessCenter" className='hover:text-red-600'>Read more ⟶</Link>
                        </div>
                    </article>


                </div>

            </section>

            <div className='bg-black w-full py-10 separator z-10'></div>

            <section className='bg-nightservices text-center'>
                <h1 className="text-[clamp(3rem,8vh,10rem)] pt-40">The Night</h1>
                <p className="text-[clamp(1rem,1vh,2rem)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium enim atque.</p>
                <div className="py-20 flex flex-row flex-wrap justify-center items-center gap-5 text-left">
                    <article className='bg-black text-white w-auto pb-5 flex flex-col flex-wrap items-center justify-left max-lg:justify-center gap-5 '>
                        <img src={images.nightclub} alt="Night Club picture" className='w-sm' />
                        <h2 className='text-3xl'>Night Club</h2>
                        <Link to="/NightClub" className='hover:text-red-600'>Read more ⟶</Link>
                    </article>
                    <article className='bg-black text-white w-auto pb-5 flex flex-col flex-wrap items-center justify-left gap-5  '>
                        <img src={images.grandhall} alt="The Grand Hall picture" className='w-sm' />
                        <h2 className='text-3xl'>The Grand Hall</h2>
                        <Link to="/TheGrandHall" className='hover:text-red-600'>Read more ⟶</Link>
                    </article>
                </div>
            </section>

        </main >
    </>
}