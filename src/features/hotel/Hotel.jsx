export default function Hotel() {
    return <>
        <main className="h-auto flex flex-col justify-center items-center">
            <div className="hotel-header flex flex-col justify-center items-center text-center">
                <h1 className="text-[clamp(3rem,8vh,9rem)] z-10">Our History: Eighty Years Above the Horizon</h1>
                <p className="text-[clamp(1rem,2vh,3rem)] w-1/2 z-10">Since its founding in 1946, the Cliff Hotel has stood as a sentinel of stone and elegance against the vastness of the sea. What began as a post-war dream by a family of architects soon transformed into a landmark of hospitality—a sanctuary for those seeking the quiet strength of the cliffs and the salt-rimmed air.</p>
            </div>
            <div className="text-black w-10/12 max-md:w-full rounded-4xl h-auto p-20 flex flex-col gap-5 items-start">
                <b className="text-xl">The Origins (1946 – 1960)</b>
                <p>The construction of the hotel was a feat of engineering for its time. Perched on the highest point of the northern cliffs, the original design aimed to blend seamlessly with the natural landscape. In its early years, the Cliff Hotel became the premier destination for travelers seeking fresh air and uninterrupted Atlantic views. Its lounges, adorned with fine wood and floor-to-ceiling windows, defined a "sober luxury" aesthetic that we proudly preserve to this day.</p>
                <b className="text-xl">The Golden Era (1960 – 1990)</b>
                <p>During these decades, the hotel witnessed the evolution of modern tourism. We expanded our outdoor terraces and inaugurated our iconic panoramic dining room. It was during these years that the Cliff Hotel solidified its reputation as a venue for major social events and cultural gatherings, always maintaining the discretion and personalized service that define us. Generations of families began to adopt our facilities as their summer home, creating a tradition passed down from parents to children.</p>
                <b className="text-xl">Renewal and Legacy (1990 – Present)</b>
                <p>As we celebrate 80 years, the Cliff Hotel has successfully balanced the nostalgia of its classical architecture with the demands of the 21st century. We have integrated sustainable technologies and renovated our suites to offer maximum comfort without losing the essence of our original materials: local stone, brass, and linen.</p>
                <p>Today, our commitment remains the same as it was on day one: to offer an experience where time seems to stand still, letting the sound of the waves and the quality of our service take center stage.</p>
                <b className="text-xl">Values That Define Us:</b>
                <li className="self-center">Signature Hospitality: A warm, detail-oriented approach that sets us apart from large hotel chains.</li>
                <li className="self-center">Preservation: Rigorous care for the natural environment and the building's architectural heritage.</li>
                <li className="self-center">Serenity: An environment designed for deep rest and disconnection from urban noise.</li>
                <q className="mt-20">Eighty years is more than just a number; it is thousands of sunrises shared with our guests facing the ocean.</q>
            </div>
        </main>
    </>
}