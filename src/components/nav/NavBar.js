import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/history">History</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/waterfowl">WaterFowl</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/habbitat">Habbitat</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/flyways">FlyWays</Link>
            </li>
        </ul>
    )
}