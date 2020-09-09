import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./theme-context";
import "./style.css";

function Nav({toggleTheme}) {
    const theme = useContext(ThemeContext);
    const [state, setState] = useState({open: false});

    const updateScreen = () => {
        const newState = {};

        if (state.open) {
            newState.open = false;
        }
        setState(newState);
    };

    const toggleNav = () => {
        setState({ open: !state.open });
    };

    useEffect(() =>{
        window.addEventListener('resize', updateScreen)
    },[window]);

    return (
        <nav style={theme} className="navbar navbar-expand-lg navbar-dark mb-2">
            <Link className="navbar-brand" to="/">
                Google Books
            </Link>
            <button
                onClick={toggleNav}
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className={`${state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            onClick={toggleNav}
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                            to="/"
                        >
                            Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            onClick={toggleNav}
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            to="/saved"
                        >
                            Saved
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Styles
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <button onClick={toggleTheme} className="dropdown-item btn-secondary" value="base" id="base">Base</button>
                        <button onClick={toggleTheme} className="dropdown-item btn-primary" value="blue" id="blue">Blue</button>
                        <button onClick={toggleTheme} className="dropdown-item btn-danger" value="tan" id="tan">Leather</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
