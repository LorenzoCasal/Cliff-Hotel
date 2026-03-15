import BookButton from '../../../shared/components/BookButton';

export default function AvailabilitySearch({ room }) {
    const date = new Date();

    return <>
        <main className="bg-black">
            <section className='book-screen h-screen flex flex-col justify-center items-center text-white'>
                <header className='text-center'>
                    <h1 className="text-7xl">Availability</h1>
                    <p className='text-xl text-black max-lg:text-amber-300 mb-10'>Book your dream experience.</p>
                </header>
                <form className="availability-form text-md border border-white py-10 px-10 flex flex-row flex-wrap justify-center items-center gap-5">
                    <input type="date" min={date} className='input' />
                    <input type="date" max="01/01/2027" className='input' />
                    <label htmlFor="" className='input'>Rooms:
                        <select name="rooms" id="rooms" className='ml-2'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                    <label htmlFor="" className='input'>Adult(s):
                        <select name="adults" id="adults" className='ml-2'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                    <label htmlFor="" className='input'>Enfant(s):
                        <select name="enfants" id="enfants" className='ml-2'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </label>

                    <span className='divisor'></span>
                    <BookButton type="submit" url="/Availability/Book" clase="button" text="Search" />
                </form>
            </section>
        </main>
    </>
}