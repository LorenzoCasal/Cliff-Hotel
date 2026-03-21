import { useState, useEffect } from "react";
import BookButton from '../../shared/components/BookButton';
import rooms from "./data/rooms.json";

export default function Rooms() {
    const images = [
        "/src/assets/oceansuite.png",
        "/src/assets/aristocratsretreat.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(next, 3000);

        return () => clearInterval(interval);
    }, []);

    return <>
        <main>
            <div className="w-full relative overflow-hidden text-center">

                <article className="shadows h-screen w-full flex flex-col flex-nowrap justify-center items-center absolute text-white z-10">
                    <h1 className="text-[clamp(4rem,8vw,8rem)] font-bold leading-32 max-sm:leading-16">{rooms[currentIndex]?.room}</h1>
                    <p className="text-[clamp(0.8rem,2vw,1.2rem)] font-light w-10/12">{rooms[currentIndex]?.descrip}</p>
                    <BookButton url="/room/" clase="book-button" text="BOOK NOW" />
                </article>

                <div style={{ display: "flex", transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.5s ease", zIndex: "-10" }}>
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            style={{
                                width: "100%",
                                height: "100vh",
                                flexShrink: 0
                            }}
                        />
                    ))}
                </div>


                <span className="absolute bottom-0 left-auto right-1/2">
                    <button onClick={prev}>○</button>
                    <button onClick={next}>○</button>
                </span>

            </div>


        </main>
    </>
}