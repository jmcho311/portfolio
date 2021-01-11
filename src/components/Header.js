import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to={ '/' }>JANE CHO</Link>
            </div>
            <div className="links">
                <ul>
                    <li><Link to={ '/about'}>ABOUT</Link></li>
                    <li><Link to={ '/projects' }>PROJECTS</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
