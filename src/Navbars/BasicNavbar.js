import React from 'react'
import { Link } from "react-router-dom";

function BasicNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/'>Flash Cards</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto"> 
                    <li className="nav-item">
                        
                        <Link to='/create/new-set' className="nav-link">
                            <i className="fas fa-folder-plus mr-2"></i>
                            Create a new Set
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default BasicNavbar
