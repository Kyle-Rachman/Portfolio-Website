import React, { useState } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import ToggleOnScroll from './ToggleOnScroll'

// UPDATES: To add a new project, simply update numProjects and add an extra ProjectCard with the appropriate name/alt props

const ProjectCarousel = () => {
    const [activeProject, setActiveProject] = useState(0)
    const numProjects = 3
    const swipe = (left: boolean) => {
        if (left) {
            setActiveProject(prev => ((((prev+1) % numProjects) + numProjects) % numProjects))
        } else {
            setActiveProject(prev => ((((prev-1) % numProjects) + numProjects) % numProjects))
        }
    }

    const radioSelectors = []
    for (let i = 0; i < numProjects; i++) {
        radioSelectors.push(<input key={i} type='radio' name='projSlider' value={i} checked={activeProject == i} onChange={() => setActiveProject(i)}></input>)
    }
    

    return (
        <>
            <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <div className='flex justify-center items-center gap-[40px] mt-[-50px] md:mt-0'>
                        <button className='mt-20 border border-white text-white transition-color duration-500 hover:text-black hover:bg-white rounded-full h-16 w-16 bg-background-black hidden md:block'
                        onClick={() => setActiveProject(prev => ((((prev-1) % numProjects) + numProjects) % numProjects))}>&lt;</button>
                        {(activeProject==0) && <ProjectCard
                            project='bingo'
                            alt='Bingo Screen'
                            onSwipe={swipe}
                        />}
                        {(activeProject==1) && <ProjectCard
                            project='test'
                            alt='Placeholder'
                            onSwipe={swipe}
                        />}
                        {(activeProject==2) && <ProjectCard
                            project='math'
                            alt='Placeholder'
                            onSwipe={swipe}
                        />}
                        <button className='mt-20 border border-white text-white transition-color duration-500 hover:text-black hover:bg-white rounded-full h-16 w-16 bg-background-black hidden md:block'
                        onClick={() => setActiveProject(prev => ((((prev+1) % numProjects) + numProjects) % numProjects))}>&gt;</button>
                    </div>
            </ToggleOnScroll>
            <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                <fieldset className="mt-4 flex gap-4 md:hidden">
                    {radioSelectors}
                </fieldset>
            </ToggleOnScroll>
        </>
    )
}

export default ProjectCarousel
