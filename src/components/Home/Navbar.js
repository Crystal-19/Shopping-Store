import React from 'react';
import logo from "../logo.jpeg";

const Navbar = ( {toggleTab} ) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#br">
                    <img className='logo' src={logo} alt='logo' />
                    <p className='LB '>Love Book</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a onClick={() => toggleTab(1)} className="nav-link active" aria-current="page" href="#br">Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => toggleTab(2)} className="nav-link" href="#br">Catalog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
