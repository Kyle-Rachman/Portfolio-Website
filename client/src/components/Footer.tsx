import React from 'react'
import ToggleOnScroll from './ToggleOnScroll'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                <h2 className='text-2xl sm:text-4xl'>Looking for a <span className='text-accent-purple'>developer?</span></h2>
            </ToggleOnScroll>
            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                <a className='border border-white p-2 text-white transition-color duration-500 hover:text-black hover:bg-white m-4' href="https://drive.google.com/file/d/1Q98KLwEXkBorhx7KFSl6L0-63JhAwfUd/view" target='_blank' rel="noopener" aria-label='Resume'>My Resume</a>
                <button className='border border-white p-2 text-white transition-color duration-500 hover:text-black hover:bg-white m-4' onClick={() => navigate('/contact')}>Contact Me</button>
            </ToggleOnScroll>
            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                <h2 className='text-2xl sm:text-3xl mb-2'> Or find me via...</h2>
            </ToggleOnScroll>
            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                <div className='text-lg m-4 mx-auto'>
                    <a className='text-accent-orange m-4 p-2 border border-accent-orange transition-color duration-500 hover:text-black hover:bg-white hover:border-white' href="https://github.com/Kyle-Rachman" target='_blank' rel="noopener" aria-label='Github'>Github</a>
                    <a className='text-accent-orange m-4 p-2 border border-accent-orange transition-color duration-500 hover:text-black hover:bg-white hover:border-white' href="https://www.linkedin.com/in/kyle-rachman/" target='_blank' rel="noopener" aria-label='LinkedIn'>LinkedIn</a>
                    <a className='text-accent-orange m-4 p-2 border border-accent-orange transition-color duration-500 hover:text-black hover:bg-white hover:border-white' href="mailto:kcrachman@gmail.com" target='_blank' rel="noopener" aria-label='Email'>Email</a>
                </div>
            </ToggleOnScroll>
        </>
    )
}

export default Footer
