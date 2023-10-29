import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectInfos from '../../assets/projectinfo.json'
import Error404 from '../404/Error404'
import ToggleOnScroll from '../ToggleOnScroll'
import Footer from '../Footer'
import styles from './SingleProject.module.css'
import SEO from '../SEO'

const SingleProject = () => {
    const { project } = useParams<{project: string}>()
    const projectDetails = ProjectInfos[project as keyof typeof ProjectInfos]
    const navigate = useNavigate()

    // TODO: Make responsive
    // TODO: Update specific project infos

    if (!project || !ProjectInfos.hasOwnProperty(project)) {
        return (
            <Error404 />
        )
    } else {
        return (
            <>
                <SEO
                    title={'Kyle Rachman | ' + projectDetails.name}
                    url={'https://kylerachman.dev/work/' + project}
                    image={projectDetails.mainImage[0]}
                    imageAlt={projectDetails.mainImage[1]}
                    description={"Check out my project: " + projectDetails.name + ", featuring " + projectDetails.technologies}
                ></SEO>
                <div id={styles.container}>
                    <div className='hero flex flex-col md:flex-row items-center text-4xl gap-20 mb-10 px-20 py-2 w-[100%] h-[90vh]'>
                        <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                            <div className='flex flex-col content-start gap-[40px] mb-[-50px] md:mb-0 w-[300px]'>
                                <p className='font-bold'>{projectDetails.name}</p>
                                <p className='text-accent-yellow text-xl font-light'>|| {projectDetails.technologies}</p>
                                <p className='text-xl'>{projectDetails.description}</p>
                                <button className='border-2 border-white w-fit px-3 py-1 text-2xl self-center transition-color duration-500 hover:text-black hover:bg-white hover:drop-shadow-accent-blue' onClick={() => navigate(projectDetails.navlink[0])}>{projectDetails.navlink[1]}</button>
                            </div>
                        </ToggleOnScroll>
                        <img src={projectDetails.mainImage[0]} alt={projectDetails.mainImage[1]} className='h-[50vh] w-[80vw] md:h-[60vh] md:w-[50vw] rounded-md object-contain'/>
                    </div>
                    <div className='bg-white text-black py-20'>
                        <div className='px-20'>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <p className='font-bold text-3xl mb-10'>The situation.</p>
                                <p className='text-xl md:w-[40vw] mb-10'>{projectDetails.briefing}</p>
                            </ToggleOnScroll>
                            <div className='flex flex-wrap justify-center gap-4 w-[70vw]'>
                                <ToggleOnScroll firstTimeSlide direction='from-left'>
                                    <img src={projectDetails.featureImage1[0]} alt={projectDetails.featureImage1[1]} className='h-[40.65vh] object-cover'/>
                                    <p className='italic mt-4 text-xl'>{projectDetails.featureImage1[2]}</p>
                                </ToggleOnScroll>
                                <ToggleOnScroll firstTimeSlide direction='from-left'>
                                    <img src={projectDetails.featureImage2[0]} alt={projectDetails.featureImage2[1]} className='h-[40.65vh] object-cover'/>
                                    <p className='italic mt-4 text-xl'>{projectDetails.featureImage2[2]}</p>
                                </ToggleOnScroll>
                            </div>
                        </div>
                        <ToggleOnScroll>
                            <div className='w-[100vw] mt-[80px] mb-[150px]'>
                                <img src={projectDetails.bigFeatureImage[0]} alt={projectDetails.bigFeatureImage[1]} className='object-cover w-full h-[90vh]'/>
                                <p className='italic ml-[20vw] mt-4 text-xl'>{projectDetails.bigFeatureImage[2]}</p>
                            </div>
                        </ToggleOnScroll>
                        <div className='px-20 h-[100vh] flex flex-wrap gap-20 justify-between items-center'>
                            <ToggleOnScroll firstTimeSlide direction='from-left'>
                                <img src={projectDetails.solutionImage[0]} alt={projectDetails.solutionImage[1]} className='h-[600px] float-left object-cover'/>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <div className='flex flex-col content-start'>
                                    <p className='font-bold text-3xl mb-10'>The solution.</p>
                                    <p className='text-xl md:w-[40vw] mb-10'>{projectDetails.solution}</p>
                                    <button className='border-2 border-black w-fit px-3 py-1 text-2xl transition-color duration-500 hover:text-white hover:bg-black hover:drop-shadow-accent-blue' onClick={() => navigate("/work")}>Back to Work</button>
                                </div>
                            </ToggleOnScroll>
                        </div>
                    </div>
                    <div className='flex flex-col py-[48px]'>
                        <Footer></Footer>
                    </div>
                </div>
            </>
        )
    }
}

export default SingleProject