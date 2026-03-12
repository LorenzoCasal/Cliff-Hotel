import { images } from '../../shared/utils/images';
import BookButton from '../../shared/components/BookButton';

export default function Home() {
    return <>
        <main>
            <div className="home">
                <h1 className="text-white">Cliff<br />
                    Hotel</h1>
                <BookButton url="/Book" clase="book-button"/>
            </div>
        </main>

        <section className="bg-white grid grid-cols-2 max-md:grid-cols-1 items-center content-center h-screen max-md:h-auto py-10">
            <article className="w-sm max-sm:w-auto max-sm:pl-6 max-md:py-10 justify-self-end">
                <h3 className='text-5xl'>Culinary Excellence</h3>
                <p className='text-md font-thin pr-12 mt-4'>Delight your senses with our world-class offering. Signature dishes created with fresh ingredients in a sophisticated and vibrant atmosphere.</p>
            </article>
            <img src={images.cooking} alt="Image of the hotel kitchen" className='w-96 justify-self-start max-md:justify-self-center' />
            <img src={images.winecellar} alt="Image of the hotel's wine cellar" className='w-96 justify-self-end max-md:justify-self-center' />
            <article className="w-sm max-sm:w-auto max-md:py-10 justify-self-start pl-12 max-sm:pl-6 max-md:pl-0">
                <h3 className='text-5xl'>Wine Cellar</h3>
                <p className='text-md font-thin mt-4'>Explore an exclusive selection of national and international labels in our private wine cellar. A space designed for wine lovers, where history and flavor age in perfect harmony.</p>
            </article>
        </section>

        <section className='bg-black text-white'>
            <article className='flex flex-row flex-nowrap place-content-left items-center gap-30 min-h-auto max-md:h-screen max-xl:flex-col max-xl:place-content-center'>
                <img src={images.reception} alt="" className='w-1/3 max-md:hidden max-xl:w-full' />
                <aside className='w-1/3 py-10 relative max-md:w-10/12 max-md:py-0'>
                    <h2 className='text-[clamp(4rem,4vw,5rem)] leading-15 mb-5'>Discover our rooms</h2>
                    <p className='mb-10 text-xl max-2xl:text-base'>Explore our selection of premium rooms and suites. With high-end amenities and a design focused on functionality and comfort, we offer the ideal space to disconnect from the world. Immerse yourself in the exclusivity of Cliff Hotel and discover why we are the preferred destination for those seeking quality and distinction.</p>
                    <p className='mb-40 text-xl max-2xl:text-base'>Each suite has been meticulously appointed to exceed your expectations. From premium textures to cutting-edge technology, we've created the perfect environment where luxury and privacy meet in perfect harmony.</p>
                    <BookButton url="/Rooms" clase="book-button" />
                </aside>
            </article>
        </section>

        <section className='bg-black text-white text-[clamp(2rem,5vw,10rem)]'>
            <div className='images-home-section text-center'>
                <img src={images.garden} alt="" className='w-full block' />
                <h4 className='border-b-red-500 absolute'>Natural Garden</h4>
            </div>
            <div className='images-home-section text-center'>
                <img src={images.golfcamp} alt="" className='w-full block' />
                <h4 className='border-b-red-500 absolute'>Golf Camp</h4>
            </div>
            <div className='images-home-section text-center'>
                <img src={images.solarium} alt="" className='w-full block' />
                <h4 className='border-b-red-500 absolute'>Solarium</h4>
            </div>
        </section>
    </>
}