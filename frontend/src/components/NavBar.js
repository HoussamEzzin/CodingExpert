import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="nav nav-pills">
            <a href="/tutorials" className="navbar-brand">
                CodingExpert
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/tutorials"} className="nav-link">
                        Tutorials
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                        Add
                    </Link>
                </li>

            </div>
        </nav>
    )

}

export default NavBar;