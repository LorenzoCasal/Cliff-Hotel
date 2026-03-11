import { NavLink } from "react-router";
import BookButton from "./BookButton";

import { images } from "../utils/images";

export default function Nav() {
    return (
        <nav className="flex flex-row flex-wrap items-center justify-between w-full bg-black h-auto py-2 text-white opacity-80 fixed z-50">
            <img src={images.logosinfondo} alt="Cliff Hotel's logo" className="w-8 ml-5" />
            <ul className="text-[clamp(0.8rem,1.1vw,2rem)]">
                <li><NavLink to="/">Welcome</NavLink></li>
                <li><NavLink to="/Hotel">Hotel</NavLink></li>
                <li><NavLink to="/Rooms">Rooms</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
                <li><NavLink to="/Tourism">Tourism</NavLink></li>
                <li><NavLink to="/SPA">SPA</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <BookButton clase="book-nav"/>
        </nav>
    )
}