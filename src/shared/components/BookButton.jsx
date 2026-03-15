import { Link } from "react-router";

export default function BookButton({url, clase, text}) {
    return (
        <Link to={`${url}`} className={`${clase}`}>{text}</Link>
    )
}