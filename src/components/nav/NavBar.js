import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/History">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Species">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Habbitat">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Conservation">Employees</Link>
            </li>
        </ul>
    )
}