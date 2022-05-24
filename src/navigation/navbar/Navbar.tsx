import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

const links = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/mrp',
        label: 'Mars Rover Photos',
    },
]


export const Navbar: React.FC = () => {

    return (
        <div className="navbar-container">   
            <div className="navbar">
                <div className="navbar__left">
                    <NavLink to="">
                        <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="nasa logo" />
                    </NavLink>
                </div>
                <div className="navbar__right">
                    {links.map(link => (
                        <NavLink 
                            key={link.path}
                            to={link.path} 
                            className={({ isActive }) =>
                                isActive ? "active_link" : undefined
                            } 
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}
