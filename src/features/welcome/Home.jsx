import { images } from '../../shared/utils/images';
import BookButton from '../../shared/components/BookButton';

export default function Home() {
    return <>
        <main>
            <div className="home">
                <h1 className="text-white">Cliff<br />
                    Hotel</h1>
                <BookButton />
            </div>
        </main>

        <section className="bg-white grid grid-cols-2 grid-rows-2 gap-0 items-center py-52">
            <article className="justify-self-end">
                <h3 className='text-5xl'>Lorem ipsum</h3>
                <p className='w-sm pr-12 text-md mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eligendi quaerat error praesentium dicta dolorem minima eius, doloremque distinctio? Fugiat veniam culpa corrupti.</p>
            </article>
            <img src={images.cooking} alt="" className='w-md justify-self-start' />
            <img src={images.winecellar} alt="" className='w-md justify-self-end' />
            <article className="justify-self-start pl-12">
                <h3 className='text-5xl'>Lorem ipsum</h3>
                <p className='w-sm text-md mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eligendi quaerat error praesentium dicta dolorem minima eius, doloremque distinctio? Fugiat veniam culpa corrupti.</p>
            </article>
        </section>

        <section className='bg-black text-white'>
            <article className='flex flHotelex-row place-content-left items-center gap-30'>
                <img src={images.reception} alt="" className='w-1/3' />
                <div className='w-1/2'>
                    <h2 className='text-8xl mb-10'>Discover our rooms</h2>
                    <p className='w-2xl mb-10 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa corrupti corporis deserunt ut eveniet et minima quae voluptatibus deleniti ratione voluptatem perspiciatis impedit, aperiam labore architecto porro quis provident! Suscipit, ipsam esse. Neque quam, reprehenderit maiores ipsa et perferendis eaque eos unde, numquam nihil tenetur?</p>
                    <p className='w-2xl mb-20 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa corrupti corporis deserunt ut eveniet et minima quae voluptatibus deleniti ratione voluptatem perspiciatis impedit, aperiam labore architecto porro quis provident! Suscipit, ipsam esse. Neque quam, reprehenderit maiores ipsa et perferendis eaque eos unde, numquam nihil tenetur?</p>
                    <BookButton />
                </div>
            </article>
        </section>

        <section className='bg-section pt-44'>
            <div className='images-home-section'>
                <img src={images.garden} alt="" className='w-full block' />
                <h4 className='border-b-red-500 absolute text-8xl'>Natural Garden</h4>
            </div>
            <div className='images-home-section'>
                <img src={images.golfcamp} alt="" className='w-full block' />
                <h4 className='border-b-red-500 absolute text-8xl'>Golf Camp</h4>
            </div>
            <div className='images-home-section'>
                <img src={images.solarium} alt="" className='w-full block' />
                <h4 className='border-b-red-500 absolute text-8xl'>Solarium</h4>
            </div>
        </section>
    </>
}