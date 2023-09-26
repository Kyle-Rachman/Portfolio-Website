import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const activeStyle = {
    color: 'var(--accent-blue)',
    textShadow: 'var(--accent-blue) 1px 0 10px'
}

const Navbar = () => {
    const navigate = useNavigate();
    let activeUrl:string = window.location.href;
    return (
        <nav>
            <img src="/placeholder-logo-1.png" alt="logo placeholder" id={styles.logo} onClick={() => navigate('/')}/>
            <ul id={styles.links}>
                <li><Link to={'/'} style={activeUrl == 'http://localhost:5173/' ? activeStyle : {}}>Home</Link></li>
                <li><Link to={'/about'} style={activeUrl == 'http://localhost:5173/about' ? activeStyle : {}}>About Me</Link></li>
                <li><Link to={'/work'} style={activeUrl == 'http://localhost:5173/work' ? activeStyle : {}}>My Work</Link></li>
                <li><Link to={'/contact'} style={activeUrl == 'http://localhost:5173/contact' ? activeStyle : {}}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
