import React, { useState } from 'react'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import Footer from '../../components/Footer'
import styles from './Work.module.css'
import { useNavigate } from 'react-router-dom'

// TODO: Replace all images
// TODO: Add other projects
// TODO: Figure out a hero project/summary video

const Work = () => {
    const [hoveredProj, setHoveredProj] = useState('bg-white')
    const navigate = useNavigate()

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
            <div className={`text-white p-20 flex flex-wrap gap-10 pt-24 transition-all duration-[2s] ${styles.projects} ${(hoveredProj != 'bg-white') ? hoveredProj : 'bg-white duration-[0.1s]'}`}>
                <div>
                    <img src="src/assets/bingo-picture.png" alt="Placeholder" className={`peer border-2 border-black rounded-lg object-cover h-[200px] w-[300px] transition-all duration-200 ${(hoveredProj != 'bg-white') ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 hover:brightness-[1.4] hover:cursor-pointer`} onClick={() => navigate('/work/bingo')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/bingo-picture.png)] bg-cover bg-center')} onMouseLeave={() => setHoveredProj('bg-white')}/>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Local Bingo</p>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Click to learn more</p>
                </div>
                <div>
                    <img src="src/assets/vite.svg" alt="Placeholder" className={ `peer border-2 border-black rounded-lg object-cover h-[200px] w-[300px] transition-all duration-200 ${(hoveredProj != 'bg-white') ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 hover:brightness-[1.4] hover:cursor-pointer`} onClick={() => navigate('/work/test')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/vite.svg)] bg-cover bg-center')} onMouseLeave={() => setHoveredProj('bg-white')}/>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Project Title</p>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Click to learn more</p>
                </div>
                <div>
                    <img src="src/assets/vite.svg" alt="Placeholder" className={ `peer border-2 border-black rounded-lg object-cover h-[200px] w-[300px] transition-all duration-200 ${(hoveredProj != 'bg-white') ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 hover:brightness-[1.4] hover:cursor-pointer`} onClick={() => navigate('/work/test')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/vite.svg)] bg-cover bg-center')} onMouseLeave={() => setHoveredProj('bg-white')}/>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Project Title</p>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Click to learn more</p>
                </div>
            </div>
            <div className='flex flex-col py-[48px]'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Work
