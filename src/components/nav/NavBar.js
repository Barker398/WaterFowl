import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/diet">Diet</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/ducks">Ducks</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/habitat">Habitat</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/flyways">FlyWays</Link>
            </li>
        </ul>
    )
}