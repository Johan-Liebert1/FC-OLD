import React from 'react'
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function CardsNavbar({setId}) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand mr-5" to="/">Flash Cards</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        
                        <Link to='/create/new-set' className="nav-link mr-5">
                            <i className="fas fa-folder-plus mr-2"></i>
                            Create a new Set
                        </Link>
                    </li>

                    <li class="nav-item">
                        
                        <Link to={`/${setId}/add`} className="nav-link mr-5">
                            <i class="far fa-plus-square mr-2"></i>
                            Add New Cards To Current Set
                        </Link>
                    </li>
                    <li class="nav-item">
                        
                        <Link to={`/${setId}/cards/delete`} className="nav-link mr-5">
                            <DeleteIcon className='mr-2'/>
                            Delete Cards
                        </Link>
                    </li>
                    <li class="nav-item">
                        
                        <Link to={`/${setId}/cards/edit`} className="nav-link">
                            <EditIcon className='mr-2'/>
                            Edit Cards
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default CardsNavbar
