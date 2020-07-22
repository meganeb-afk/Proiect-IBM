import React from 'react';
//import for Fa icons
import { FaBars } from 'react-icons/fa';
//Import for Link router
import { Link } from 'react-router-dom';

function NavbarProfesor() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            <Link className="navbar-brand ml-5" to="home"><img className="logo-img" alt="" />Profesor</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span style={{ color: '#fff' }}><FaBars /></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto  text-uppercase ">
                    <li className="nav-item active">
                        <Link className="nav-link text-white ml-5" to="home">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-5" to="cerere">Cerere programare Examen</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-5" to="../">Log Out</Link>
                    </li>

                </ul>

            </div>
        </nav>
    )
}
export default NavbarProfesor;