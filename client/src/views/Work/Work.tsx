import React, { useState } from 'react'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer'
import styles from './Work.module.css'
import { useNavigate } from 'react-router-dom'

// TODO: Replace all images
// TODO: Add other projects
// TODO: Figure out a hero project/summary video

const Work = () => {
    const [hoveredProj, setHoveredProj] = useState('bg-white duration-0')
    const navigate = useNavigate()

    const miniCardStyle: string = `peer border-2 border-black rounded-lg object-cover h-[200px] min-w-[280px] w-[300px] transition-all ${(hoveredProj != 'bg-white duration-0') ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 hover:brightness-[1.4] hover:cursor-pointer`

    return (
        <div id={styles.container}>
            <PageHeader
                heroImage='../src/assets/wave-haikei (1).svg'
                altImage='../src/assets/wave-haikei (2).svg'
                heroTitle={<p className='max-w-[100%] font-bold'>What I've been up to.</p>}
                heroPage='Work'
                heroDescription="Here's a sample of my work."
            ></PageHeader>
            <div className={`text-white p-20 flex flex-wrap justify-center gap-10 pt-24 transition-all duration-[2s] ${styles.projects} ${(hoveredProj != 'bg-white') ? hoveredProj : 'bg-white duration-[0.1s]'}`}>
                <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                    <div className='hover:drop-shadow-accent-blue'>
                        <img src="src/assets/bingo-picture.png" alt="Placeholder" className={miniCardStyle} onClick={() => navigate('/work/bingo')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/bingo-picture.png)] bg-cover bg-center duration-200')} onMouseLeave={() => setHoveredProj('bg-white duration-0')}/>
                        <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Local Bingo</p>
                        <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 pb-1 rounded-md'>Click to learn more</p>
                    </div>
                </ToggleOnScroll>
                <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                    <div className='hover:drop-shadow-accent-blue'>
                        <img src="src/assets/vite.svg" alt="Placeholder" className={miniCardStyle} onClick={() => navigate('/work/test')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/vite.svg)] bg-cover bg-center duration-200')} onMouseLeave={() => setHoveredProj('bg-white duration-0')}/>
                        <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Project Title</p>
                        <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 pb-1 rounded-md'>Click to learn more</p>
                    </div>
                </ToggleOnScroll>
                <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                    <div className='hover:drop-shadow-accent-blue'>
                        <img src="src/assets/vite.svg" alt="Placeholder" className={miniCardStyle} onClick={() => navigate('/work/math')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/vite.svg)] bg-cover bg-center duration-200')} onMouseLeave={() => setHoveredProj('bg-white duration-0')}/>
                        <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Mathematics</p>
                        <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 pb-1 rounded-md'>Click to learn more</p>
                    </div>
                </ToggleOnScroll>
            </div>
            <div className='flex flex-col py-[48px]'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Work