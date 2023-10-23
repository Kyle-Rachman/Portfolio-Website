import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectInfos from '../../assets/projectinfo.json'
import Error404 from '../404/Error404'
import ToggleOnScroll from '../ToggleOnScroll'
import Footer from '../Footer'
import styles from './SingleProject.module.css'

const SingleProject = () => {
    const { project } = useParams<{project: string}>()
    const projectDetails = ProjectInfos[project as keyof typeof ProjectInfos]
    const navigate = useNavigate()

    // TODO: Update Return Home button to something individual to project (Github??)
    // TODO: Make responsive

    if (!project || !ProjectInfos.hasOwnProperty(project)) {
        return (
            <Error404 />
        )
    } else {
        return (
            <div id={styles.container}>
                <div className='hero flex flex-col md:flex-row items-center text-4xl gap-20 mb-10 px-20 py-2 w-[100%] h-[90vh]'>
                    <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                        <div className='flex flex-col content-start gap-[40px] mb-[-50px] md:mb-0 w-[300px]'>
                            <p className='font-bold'>{projectDetails.name}</p>
                            <p className='text-accent-yellow text-xl font-light'>|| {projectDetails.technologies}</p>
                            <p className='text-xl'>{projectDetails.description}</p>
                            <button className='border-2 border-white w-fit px-3 py-1 text-2xl self-center transition-color duration-500 hover:text-black hover:bg-white hover:drop-shadow-accent-blue' onClick={() => navigate('/')}>Return Home</button>
                        </div>
                    </ToggleOnScroll>
                    <img src={projectDetails.mainImage[0]} alt={projectDetails.mainImage[1]} className='h-[50vh] w-[80vw] md:h-[60vh] md:w-[50vw] rounded-md object-contain'/>
                </div>
                <div className='bg-white text-black p-20'>
                    <p className='font-bold text-3xl mb-10'>The briefing.</p>
                    <p className='text-xl md:w-[40vw] mb-10'>{projectDetails.briefing}</p>
                    <div className='flex flex-wrap'>
                        <div>
                            <img src={projectDetails.featureImage1[0]} alt={projectDetails.featureImage1[1]} className='h-[45vh]'/>
                        </div>
                        <div>
                            <img src={projectDetails.featureImage2[0]} alt={projectDetails.featureImage2[1]} className='h-[45vh]'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col py-[48px]'>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default SingleProject