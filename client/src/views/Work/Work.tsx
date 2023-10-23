import React, { useState } from 'react'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer'
import styles from './Work.module.css'
import { useNavigate } from 'react-router-dom'

// TODO: Replace all images
// TODO: Add other projects
// TODO: Figure out a hero project/summary video
// TODO: Responsive styling

const Work = () => {
    const [hoveredProj, setHoveredProj] = useState('bg-white')
    const navigate = useNavigate()

    return (
        <div id={styles.container}>
            <PageHeader
                heroImage='../src/assets/wave-haikei (1).svg'
                altImage='../src/assets/wave-haikei (2).svg'
                heroTitle={<p className='max-w-[100%] font-bold'>What I've been up to.</p>}
                heroPage='Work'
                heroDescription="Here are some projects that I've worked on."
            ></PageHeader>
            <div className={`text-white p-20 flex flex-wrap gap-10 pt-24 transition-all duration-[2s] ${styles.projects} ${(hoveredProj != 'bg-white') ? hoveredProj : 'bg-white duration-[0.1s]'}`}>
                <div>
                    <img src="src/assets/bingo-picture.png" alt="Placeholder" className={`peer border-2 border-black rounded-lg object-cover h-[200px] w-[300px] transition-all duration-200 ${(hoveredProj != 'bg-white') ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 hover:brightness-[1.4] hover:cursor-pointer`} onClick={() => navigate('/work/bingo')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/bingo-picture.png)] bg-cover bg-center')} onMouseLeave={() => setHoveredProj('bg-white')}/>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Local Bingo</p>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Click to learn more</p>
                </div>
                <div>
                    <img src="src/assets/vite.svg" alt="Placeholder" className={`peer border-2 border-black rounded-lg object-cover h-[200px] w-[300px] transition-all duration-200 ${(hoveredProj != 'bg-white') ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 hover:brightness-[1.4] hover:cursor-pointer`} onClick={() => navigate('/work/test')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/vite.svg)] bg-cover bg-center')} onMouseLeave={() => setHoveredProj('bg-white')}/>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Project Title</p>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-38px] text-center mx-auto w-[50%] font-extralight bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Click to learn more</p>
                </div>
                <div>
                    <img src="src/assets/vite.svg" alt="Placeholder" className={`peer border-2 border-black rounded-lg object-cover h-[200px] w-[300px] transition-all duration-200 ${(hoveredProj != 'bg-white') ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 hover:brightness-[1.4] hover:cursor-pointer`} onClick={() => navigate('/work/test')} onMouseOver={() => setHoveredProj('bg-[url(src/assets/vite.svg)] bg-cover bg-center')} onMouseLeave={() => setHoveredProj('bg-white')}/>
                    <p className='transition-all duration-200 opacity-0 select-none peer-hover:opacity-100 relative top-[-250px] text-center w-[100%] text-3xl bg-slate-800 bg-opacity-95 pb-1 rounded-md'>Mathematics</p>
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
