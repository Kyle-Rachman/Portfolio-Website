import React from 'react'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import Footer from '../../components/Footer'
import styles from './Work.module.css'

const Work = () => {
    return (
        <div id={styles.container}>
            <div className='hero flex flex-col md:flex-row items-center text-4xl gap-20 mb-10 px-20 py-2 w-[100%] h-[90vh]'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                    <div className='flex flex-col content-start gap-[40px] mb-[-50px] md:mb-0'>
                        <p className='max-w-[100%] font-bold'>What I've been up to.</p>
                        <p className='text-accent-yellow text-2xl w-[100%] font-light'>|| Work</p>
                        <p className='text-xl md:text-3xl'>Here are some projects that I've worked on.</p>
                    </div>
                </ToggleOnScroll>
                <img id={styles.desktopimage} src="src/assets/wave-haikei (1).svg" alt="Placeholder" onMouseOver={(e) => {
                    e.currentTarget.src='src/assets/wave-haikei (1).svg'
                    e.currentTarget.classList.remove('filter', 'grayscale', 'opacity-85')
                }} onMouseOut={(e) => {
                        e.currentTarget.src='src/assets/wave-haikei (1).svg'
                        e.currentTarget.classList.add('filter', 'grayscale', 'opacity-85')
                }} className='filter grayscale w-[50vw] rounded-md transition-opacity duration-500 opacity-85'/>
                <img id={styles.mobileimage} src="src/assets/wave-haikei (1).svg" alt="Placeholder" className='w-[80vw] md:w-[50vw] rounded-md'/>
            </div>
            <div className='bg-white h-40'>
                test
            </div>
            <div className='flex flex-col py-[48px]'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Work
