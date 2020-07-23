import React from 'react'
import { Link } from "react-router-dom";

function BasicNavbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to='/'>Flash Cards</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto"> 
                    <li class="nav-item">
                        
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
