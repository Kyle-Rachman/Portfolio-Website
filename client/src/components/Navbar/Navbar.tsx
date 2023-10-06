import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const activeStyle = {
    color: 'rgb(var(--accent-blue))',
    textShadow: 'rgb(var(--accent-blue)) 1px 0 10px'
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    let activeUrl:string = window.location.href

    return (
        <nav>
            <img src="/placeholder-logo-1.png" alt="logo placeholder" id={styles.logo} onClick={() => navigate('/')}/>
            <ul id={styles.links}>
                <li><Link to={'/'} style={activeUrl == 'http://localhost:5173/' ? activeStyle : {}}>Home</Link></li>
                <li><Link to={'/about'} style={activeUrl == 'http://localhost:5173/about' ? activeStyle : {}}>About Me</Link></li>
                <li><Link to={'/work'} style={activeUrl == 'http://localhost:5173/work' ? activeStyle : {}}>My Work</Link></li>
                <li><Link to={'/contact'} style={activeUrl == 'http://localhost:5173/contact' ? activeStyle : {}}>Contact</Link></li>
            </ul>
            <div id={styles.menu}>
                <img src="/menu-icon.png" alt="menu icon" className='w-[100%] object-contain object-right' id={styles.menuIcon} onClick={() => setOpen(prev => !prev)}/>
                {
                    open && <ul id={styles.linkMenu} className='w-[100%]' style={{right: !open ? '0px' : '5vw'}}>
                        <li className='w-[100%]'><Link to={'/'} style={activeUrl == 'http://localhost:5173/' ? activeStyle : {}} onClick={() => setOpen(false)}>Home</Link></li>
                        <li className='w-[100%]'><Link to={'/about'} style={activeUrl == 'http://localhost:5173/about' ? activeStyle : {}} onClick={() => setOpen(false)}>About Me</Link></li>
                        <li className='w-[100%]'><Link to={'/work'} style={activeUrl == 'http://localhost:5173/work' ? activeStyle : {}} onClick={() => setOpen(false)}>My Work</Link></li>
                        <li className='w-[100%]'><Link to={'/contact'} style={activeUrl == 'http://localhost:5173/contact' ? activeStyle : {}} onClick={() => setOpen(false)}>Contact</Link></li>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default Navbar
