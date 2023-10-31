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
                    <div className='hero flex flex-col md:flex-row content-center items-center text-4xl gap-20 mb-10 py-2 w-[100%] min-h-[90vh]'>
                        <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                            <div className='flex flex-col content-start gap-[40px] mb-[-50px] md:mb-0 md:w-[275px] mx-10 md:ml-20'>
                                <p className='font-bold'>{projectDetails.name}</p>
                                <p className='text-accent-yellow text-xl font-light'>|| {projectDetails.technologies}</p>
                                <p className='text-xl'>{projectDetails.description}</p>
                                <a className='border-2 border-white w-fit px-3 py-1 text-2xl self-center transition-color duration-500 hover:text-black hover:bg-white hover:drop-shadow-accent-blue' href={projectDetails.navlink[0]} target="_blank">{projectDetails.navlink[1]}</a>
                            </div>
                        </ToggleOnScroll>
                        <img src={projectDetails.mainImage[0]} alt={projectDetails.mainImage[1]} className='hidden sm:block h-[80vh] md:h-[60vh]md:ml-6 md:relative md:right-20 rounded-md object-cover'/>
                        <img src={projectDetails.mobileMainImage[0]} alt={projectDetails.mobileMainImage[1]} className='sm:hidden h-[80vh] md:h-[60vh] rounded-md object-cover'/>
                    </div>
                    <div className='bg-white text-black py-20'>
                        <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                            <div className='px-8 md:px-20'>
                                <p className='font-bold text-3xl mb-10'>The situation.</p>
                                <p className='text-xl md:w-[40vw] mb-10'>{projectDetails.briefing}</p>
                            </div>
                        </ToggleOnScroll>
                        <div className='px-3 md:px-4 flex flex-wrap justify-between gap-4 mx-auto'>
                            <ToggleOnScroll firstTimeSlide direction='from-left'>
                                <div className='flex flex-col content-start justify-center w-fit'>
                                    <img src={projectDetails.featureImage1[0]} alt={projectDetails.featureImage1[1]} className='h-[40.65vh] object-cover'/>
                                    <p className='italic mt-4 text-xl w-[300px]'>{projectDetails.featureImage1[2]}</p>
                                </div>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-left'>
                                <div className='flex flex-col content-start justify-center w-fit'>
                                    <img src={projectDetails.featureImage2[0]} alt={projectDetails.featureImage2[1]} className='h-[40.65vh] object-cover'/>
                                    <p className='italic mt-4 text-xl w-[300px]'>{projectDetails.featureImage2[2]}</p>
                                </div>
                            </ToggleOnScroll>
                        </div>
                        <ToggleOnScroll>
                            <div className='w-[100vw] mt-[80px] mb-[80px]'>
                                <div className='flex flex-col content-center justify-center'>
                                    <img src={projectDetails.bigFeatureImage[0]} alt={projectDetails.bigFeatureImage[1]} className='object-cover w-full h-[90vh] object-center'/>
                                    <p className='italic ml-[10vw] mt-4 text-xl w-[80vw]'>{projectDetails.bigFeatureImage[2]}</p>
                                </div>
                            </div>
                        </ToggleOnScroll>
                        <div className='px-8 md:px-20 min-h-[100vh] flex flex-wrap gap-20 justify-between items-center'>
                            <ToggleOnScroll firstTimeSlide direction='from-left'>
                                <img src={projectDetails.solutionImage[0]} alt={projectDetails.solutionImage[1]} className='xs:h-[600px] float-left object-contain xs:object-cover object-center'/>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <div className='flex flex-col items-center md:items-start'>
                                    <div>
                                        <p className='font-bold text-3xl mb-10'>The solution.</p>
                                        <p className='text-xl md:w-[40vw] mb-10'>{projectDetails.solution}</p>
                                    </div>
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