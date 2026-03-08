import { NavLink } from "react-router";

export default function Nav () {
    return (
        <nav className="min-w-full bg-black h-auto py-2 text-white opacity-80 fixed z-100">
            <ul className="flex flex-row gap-5 place-content-center text-[clamp(0.8rem,1vw,1.5rem)]">
                <li><NavLink to="/">Welcome</NavLink></li>
                <li><NavLink to="">Hotel</NavLink></li>
                <li><NavLink to="">Services</NavLink></li>
                <li><NavLink to="">Tourism</NavLink></li>
                <li><NavLink to="">SPA</NavLink></li>
                <li><NavLink to="">Book</NavLink></li>
                <li><NavLink to="">Contact</NavLink></li>
            </ul>
        </nav>
    )
}