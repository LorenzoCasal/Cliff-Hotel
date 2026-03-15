import { NavLink, Link } from "react-router";
import BookButton from "./BookButton";
import { images } from "../utils/images";
import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex flex-row flex-wrap items-center justify-between w-full bg-black py-2 h-auto text-white opacity-80 fixed z-50">
            <Link to="/"><img src={images.logosinfondo} alt="Cliff Hotel's logo" className="w-8 ml-5" /></Link>
            <button className="md:hidden mr-5" onClick={() => setOpen(!open)}>☰</button>
            <ul className={`text-[clamp(1rem,1.1vw,2rem)] absolute top-12 left-0 w-full bg-black flex flex-col items-center max-md:gap-6 max-md:py-6 md:static md:flex md:flex-row md:bg-transparent md:w-auto ${open ? "flex" : "hidden"}`}>
                <li><NavLink to="/">Welcome</NavLink></li>
                <li><NavLink to="/Hotel">Hotel</NavLink></li>
                <li><NavLink to="/Rooms">Rooms</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
                <li><NavLink to="/Tourism">Tourism</NavLink></li>
                <li><NavLink to="/SPA">SPA</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <BookButton url="/Availability" clase="book-nav mr-5 max-md:hidden" text="BOOK NOW"/>
        </nav>
    )
}