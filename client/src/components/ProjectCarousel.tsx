import React, { useState } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import ToggleOnScroll from './ToggleOnScroll'

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

    return (
        <>
            <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <div className='flex justify-center items-center gap-[40px] mt-[-50px] md:mt-0'>
                        <button className='border border-white text-white transition-color duration-500 hover:text-black hover:bg-white rounded-full h-16 w-16 bg-background-black hidden md:block'
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
                            project='test2'
                            alt='Placeholder'
                            onSwipe={swipe}
                        />}
                        <button className='border border-white text-white transition-color duration-500 hover:text-black hover:bg-white rounded-full h-16 w-16 bg-background-black hidden md:block'
                        onClick={() => setActiveProject(prev => ((((prev+1) % numProjects) + numProjects) % numProjects))}>&gt;</button>
                    </div>
            </ToggleOnScroll>
            <fieldset className="mt-4 flex gap-4 md:hidden">
                <input type='radio' name='projSlider' value={0} checked={activeProject == 0} onChange={() => setActiveProject(0)}></input>
                <input type='radio' name='projSlider' value={1} checked={activeProject == 1} onChange={() => setActiveProject(1)}></input>
                <input type='radio' name='projSlider' value={2} checked={activeProject == 2} onChange={() => setActiveProject(2)}></input>
            </fieldset>
        </>
    )
}

export default ProjectCarousel
