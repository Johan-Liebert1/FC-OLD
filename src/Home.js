import React from 'react'
import { Link } from "react-router-dom";

function Home({data}) {
    const data_keys = Object.keys(data)
    // const links = data_keys.map(key => <Link to={`${/key}`}>{key}</Link>)

    return (
        <div>
            {data_keys.map(key => 
                <li key={key}>
                    <Link to={`/${key}/cards`}>{key}</Link>
                </li>
            )
            }
        </div>
    )
}

export default Home
