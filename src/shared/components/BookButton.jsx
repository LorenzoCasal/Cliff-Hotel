import { Link } from "react-router";

export default function BookButton({url, clase}) {
    return (
        <Link to={`${url}`} className={`${clase}`}>BOOK NOW</Link>
    )
}