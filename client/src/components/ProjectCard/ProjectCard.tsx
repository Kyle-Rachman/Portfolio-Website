import React, { useState } from 'react'
import ToggleOnScroll from '../ToggleOnScroll'
import styles from './ProjectCard.module.css'

interface Props {
    title: string,
    technologies: string,
    description: string,
    source: Array<string>,
    onSwipe: Function
}

const ProjectCard = ({ title, technologies, description, source, swiped, onSwipe }: Props) => {
    const [descriptionActive, setDescriptionActive] = useState(window.innerWidth > 768 ? true : false)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    
    function handleTouchStart(e: any) {
        setTouchEnd(0)
        setTouchStart(e.targetTouches[0].clientX)
    }
    
    function handleTouchMove(e: any) {
        setTouchEnd(e.targetTouches[0].clientX)
    }
    
    function handleTouchEnd() {
        if (touchEnd) {
            if ((touchStart! - touchEnd! > 50) && !descriptionActive) {
                onSwipe(true)
            }
        
            if ((touchStart! - touchEnd! < -50) && !descriptionActive) {
                onSwipe(false)
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className='w-[80vw] md:w-[20vw] md:h-[60vh] bg-background-black border border-white rounded-xl px-4 py-2 absolute md:static overflow-scroll'>
                <p className='text-3xl flex justify-between items-center' onClick={() => setDescriptionActive(prev => !prev)}>
                    {title}
                    <button className={`md:hidden scale-x-[120%] ${descriptionActive && 'animate-flip'}`}>&or;</button>
                </p>
                {descriptionActive && <div className="details">
                    <br />
                    <p>Technologies: {technologies}</p>
                    <br />
                    <p>{description}</p>
                </div>}
            </div>
            <div className={styles.imageContainer} onTouchStart={(e) => handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)} onTouchEnd={handleTouchEnd}>
                <img src={source[0]} alt={source[1]} className='border border-white p-2 rounded-lg h-[50vh] w-[80vw] md:h-[60vh] md:w-[40vw] bg-background-black mt-20'/>
            </div>
        </div>
    )
}

export default ProjectCard
