import React from "react";
import "/workspace/landingPage/src/styles/NavBar.css"

const Navbar = (props) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="n_bar">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link text-white fw-bold" href="/home">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white-50" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link text-white-50" href="/contact">Services</a></li>
                        <li className="nav-item"><a className="nav-link text-white-50" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>  
        </nav>
    );
}

export default Navbar;