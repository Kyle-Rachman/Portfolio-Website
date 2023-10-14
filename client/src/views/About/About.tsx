import React, { useState } from 'react'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import styles from './About.module.css'

const About = () => {

    return (
        <div id={styles.container}>
            <div className='hero flex items-center text-4xl gap-20 mb-10 px-20'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                    <div className={styles.heroinfodesktop}>
                        <div className='grid grid-cols-3 grid-rows-3 gap-2 justify-items-center w-[100%] font-bold'>
                            <p className='col-start-1 row-start-1 col-end-1 row-end-1 max-w-[100%]'>Developer</p>
                            <p className='col-start-2 row-start-2 col-end-2 row-end-2 max-w-[100%] ml-[-175px]'>Mathematician</p>
                            <p className='col-start-3 row-start-3 col-end-3 row-end-3 max-w-[100%] ml-[-175px]'>Climber</p>
                        </div>
                        <p className='text-accent-yellow text-2xl w-[100%] font-light'>|| About me</p>
                        <p className='text-3xl'>My name is Kyle Rachman.
                        <br />
                        I'm a Full Stack web developer with a passion for making creative and seamless user experiences.</p>
                    </div>
                </ToggleOnScroll>
                <img id={styles.desktopimage} src="/profile-formal.jpg" alt="Profile Picture" onMouseOver={(e) => {
                    e.currentTarget.src='/profile-casual.jpg'
                    e.currentTarget.classList.remove('filter', 'grayscale', 'opacity-85')
                }} onMouseOut={(e) => {
                        e.currentTarget.src='/profile-formal.jpg'
                        e.currentTarget.classList.add('filter', 'grayscale', 'opacity-85')
                }} className='filter grayscale w-[50vw] rounded-md transition-opacity duration-500 opacity-85'/>
                <img id={styles.mobileimage} src="/profile-formal.jpg" alt="Profile Picture" className='w-[50vw] rounded-md'/>
            </div>
            <div className='bg-white p-20'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <p className="text-3xl text-black">
                        <strong>My Expertise</strong>
                    </p>
                </ToggleOnScroll>
            </div>
            <div className='bg-white p-20'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <p className="text-3xl text-black">
                        <strong>What I'm Learning</strong>
                    </p>
                </ToggleOnScroll>
            </div>
            <div className='bg-white p-20'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <p className="text-3xl text-black">
                        <strong>Testimonials</strong>
                    </p>
                </ToggleOnScroll>
            </div>
        </div>
    )
}

export default About
