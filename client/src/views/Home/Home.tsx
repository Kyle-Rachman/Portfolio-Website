import React, { useEffect, useRef, useState } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link, useNavigate } from 'react-router-dom'
import ToggleOnScroll from '../../components/Navbar/ToggleOnScroll'
import styles from './Home.module.css'

const Home = () => {
    const [activeProject, setActiveProject] = useState(0)
    const numProjects = 3
    const parallaxref = useRef<IParallax>(null)
    const aboutref = useRef<HTMLElement>(null)
    const navigate = useNavigate()
    const scrollToPage = (pageNumber: number) => {
        if (parallaxref?.current) {
            parallaxref.current.scrollTo(pageNumber);
        }
    };

    return (
        <>
            <div id={styles.container}>
                <Parallax pages={3} ref={parallaxref}>
                    <ParallaxLayer onClick={() => scrollToPage(0)}>
                        <section className={styles.hero}>
                            <ParallaxLayer
                                factor={0.5}
                                speed={0.5}
                            >
                                <div className={styles.heroTitle}>
                                    <h1 className=
                                    'bg-clip-text text-transparent bg-gradient-to-b from-accent-blue via-accent-purple to-accent-yellow text-7xl italic'>Kyle Rachman</h1>
                                    <h2 className={`text-3xl text-gray-300 ${styles.subtitle}`}>Web Design and Development</h2>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer
                                factor={0.5}
                                offset={0.5}
                                speed={0.75}
                            >
                                <div className={styles.skills}>
                                    <img src="/logos/HTML5_Badge.svg" alt="HTML logo" className={styles.skill}/>
                                    <img src="/logos/CSS3_logo.svg" alt="CSS logo" className={styles.skill}/>
                                    <img src="/logos/logo-javascript.svg" alt="Javascript logo" className={styles.skill}/>
                                    <img src="/logos/Typescript_logo_2020.svg" alt="Typescript logo" className={styles.skill}/>
                                    <img src="/logos/logo-python.svg" alt="Python logo" className={styles.skill}/>
                                    <img src="/logos/Bootstrap_logo.svg" alt="Bootstrap logo" className={styles.skill}/>
                                    <img src="/logos/Tailwind_CSS_Logo.svg" alt="Tailwind logo" className={styles.skill}/>
                                    <img src="/logos/jquery-logo.svg" alt="jQuery logo" className={styles.skill}/>
                                    <img src="/logos/flask.svg" alt="Flask logo" className={styles.skill}/>
                                    <img src="/logos/mysql-logo.svg" alt="MySQL logo" className={styles.skill}/>
                                    <img src="/logos/mongodb.svg" alt="MongoDB logo" className={styles.skill}/>
                                    <img src="/logos/expressjs-icon.svg" alt="Express.js logo" className={styles.skill}/>
                                    <img src="/logos/React-icon.svg" alt="React logo" className={styles.skill}/>
                                    <img src="/logos/Node.js_logo.svg" alt="Node.js logo" className={styles.skill}/>
                                    <img src="/logos/Amazon_Web_Services_Logo.svg" alt="AWS logo" className={styles.skill}/>
                                    <img src="/logos/postman.svg" alt="Postman logo" className={styles.skill}/>
                                    <img src="/logos/Mathematica_Logo.svg" alt="Mathematica logo" className={styles.skill}/>
                                </div>
                            </ParallaxLayer>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} factor={0.6} onClick={() => scrollToPage(1)}>
                        <section className={styles.about} ref={aboutref}>
                            <ToggleOnScroll firstTimeSlide direction='from-left'>
                                <h2 className= {window.innerWidth > 840 ? 'text-4xl' : 'text-3xl'}>
                                    Hey there! I'm a full stack developer and mathematician based in San Luis Obispo, California. I focus on clean whole-stack web design and UI/UX.
                                </h2>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-right'>
                                <button className='border border-black p-2 text-black transition-color duration-500 hover:text-white hover:bg-black mt-10' onClick={() => navigate('/about')}>More about me</button>
                            </ToggleOnScroll>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.51} onClick={() => scrollToPage(1.51)}>
                        <section className={`pt-10 ${styles.work}`}>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                                    <div className={styles.project}>
                                        <button className='border border-white text-white transition-color duration-500 hover:text-black hover:bg-white rounded-full h-16 w-16 bg-background-black'
                                        onClick={() => setActiveProject(prev => ((((prev-1) % numProjects) + numProjects) % numProjects))}>&lt;</button>
                                        {(activeProject==0) &&<div className={styles.projectCard} id={styles.project1}>
                                            <div className='w-[20vw] bg-background-black border border-white rounded-xl p-2'>
                                                <p className='text-3xl'>Local Bingo</p>
                                                <p>Technologies: React, Express, MongoDB (Mongoose), Node.js, MUI</p>
                                                <br />
                                                <p>Host your own Bingo league for events (work, social, or otherwise) featuring customizable prompts, leaderboards, and user roles.</p>
                                            </div>
                                            <div className={styles.imageContainer}>
                                                <img src="/vite.svg" alt="placeholder" className='border border-white p-2 rounded-lg h-[60vh] w-[40vw] bg-background-black'/>
                                            </div>
                                        </div>}
                                        {(activeProject==1) && <div className={styles.projectCard} id={styles.project2}>
                                            <div className='w-[20vw] bg-background-black border border-white rounded-xl p-2'>
                                                <p className='text-3xl'>Project 2</p>
                                                <p>Project Stack</p>
                                                <br />
                                                <p>Description</p>
                                            </div>
                                            <div className={styles.imageContainer}>
                                                <img src="/wave-haikei (1).svg" alt="placeholder" className='border border-white p-2 rounded-lg h-[60vh] w-[40vw] bg-background-black'/>
                                            </div>
                                        </div>}
                                        {(activeProject==2) && <div className={styles.projectCard} id={styles.project3}>
                                            <div className='w-[20vw] bg-background-black border border-white rounded-xl p-2'>
                                                <p className='text-3xl'>Project 3</p>
                                                <p>Project Stack</p>
                                                <br />
                                                <p>Project Description Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description</p>
                                            </div>
                                            <div className={styles.imageContainer}>
                                                <img src="/wave-haikei (2).svg" alt="placeholder" className='border border-white p-2 rounded-lg h-[60vh] w-[40vw] bg-background-black'/>
                                            </div>
                                        </div>}
                                        <button className='border border-white text-white transition-color duration-500 hover:text-black hover:bg-white rounded-full h-16 w-16 bg-background-black'
                                        onClick={() => setActiveProject(prev => ((((prev+1) % numProjects) + numProjects) % numProjects))}>&gt;</button>
                                    </div>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={100}>
                                <button className='border border-white p-2 text-white transition-color duration-500 hover:text-black hover:bg-white mt-10 bg-background-black' onClick={() => navigate('/work')}>See all projects</button>
                            </ToggleOnScroll>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2.5} onClick={() => scrollToPage(2)}>
                        <hr className='w-[80vw]' style={{margin: 'auto', marginTop: '-20px', marginBottom: '20px'}}/>
                        <section className={styles.contact}>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <h2 className='text-4xl'>Looking for a <span className='text-accent-purple'>developer?</span></h2>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <a className='border border-white p-2 text-white transition-color duration-500 hover:text-black hover:bg-white m-4' href="https://drive.google.com/file/d/1Q98KLwEXkBorhx7KFSl6L0-63JhAwfUd/view" target='_blank' rel="noopener" aria-label='Resume'>My Resume</a>
                                <button className='border border-white p-2 text-white transition-color duration-500 hover:text-black hover:bg-white m-4' onClick={() => navigate('/contact')}>Contact Me</button>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <h2 className='text-3xl mb-2'> Or find me via...</h2>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <div className='links text-lg m-4'>
                                    <a className='text-accent-orange m-4 p-2 border border-accent-orange transition-color duration-500 hover:text-black hover:bg-white hover:border-white' href="https://github.com/Kyle-Rachman" target='_blank' rel="noopener" aria-label='Github'>Github</a>
                                    <a className='text-accent-orange m-4 p-2 border border-accent-orange transition-color duration-500 hover:text-black hover:bg-white hover:border-white' href="https://www.linkedin.com/in/kyle-rachman/" target='_blank' rel="noopener" aria-label='LinkedIn'>LinkedIn</a>
                                    <a className='text-accent-orange m-4 p-2 border border-accent-orange transition-color duration-500 hover:text-black hover:bg-white hover:border-white' href="mailto:kcrachman@gmail.com" target='_blank' rel="noopener" aria-label='Email'>Email</a>
                                </div>
                            </ToggleOnScroll>
                        </section>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    )
}

export default Home
