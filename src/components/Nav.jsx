import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <nav className = "logo">
                <h3>Gifs Search/Uploader</h3>
                <ul className = "link">
                    <Link to = "/trending">
                        <li className = "trending">Trending</li>
                    </Link>
                    <Link to = "/search">
                        <li className = "search">Search</li>
                    </Link>
                    <Link to = "/upload">
                        <li className = "upload">Upload</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
