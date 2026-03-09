import { NavLink } from "react-router";

export default function Nav () {
    return (
        <nav className="flex flex-row flex-wrap place-content-center min-w-full bg-black h-auto py-2 text-white opacity-80 fixed z-50">
            <ul className="text-[clamp(0.8rem,1.1vw,2rem)]">
                <li><NavLink to="/">Welcome</NavLink></li>
                <li><NavLink to="/Hotel">Hotel</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
                <li><NavLink to="/Tourism">Tourism</NavLink></li>
                <li><NavLink to="/SPA">SPA</NavLink></li>
                <li><NavLink to="/Book">Book</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}