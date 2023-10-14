import React, { useState } from 'react'
import ToggleOnScroll from '../ToggleOnScroll'
import styles from './ProjectCard.module.css'

interface Props {
    title: string,
    technologies: string,
    description: string,
    source: Array<string>
}

// TODO: Fix margin when toggling dropdown

const ProjectCard = ({ title, technologies, description, source }: Props) => {
    const [descriptionActive, setDescriptionActive] = useState(window.innerWidth > 768 ? true : false)

    return (
        <div className={styles.container}>
            <div className='w-[80vw] md:w-[20vw] bg-background-black border border-white rounded-xl px-4 py-2'>
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
            <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                <div className={styles.imageContainer}>
                    <img src={source[0]} alt={source[1]} className='border border-white p-2 rounded-lg h-[50vh] w-[80vw] md:h-[60vh] md:w-[40vw] bg-background-black'/>
                </div>
            </ToggleOnScroll>
        </div>
    )
}

export default ProjectCard
