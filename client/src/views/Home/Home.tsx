import React, { useRef } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useNavigate } from 'react-router-dom'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import ProjectCarousel from '../../components/ProjectCarousel'
import Footer from '../../components/Footer'
import styles from './Home.module.css'

const Home = () => {
    const parallaxref = useRef<IParallax>(null)
    const aboutref = useRef<HTMLElement>(null)
    const navigate = useNavigate()
    const scrollToPage = (pageNumber: number) => {
        if (parallaxref?.current) {
            parallaxref.current.scrollTo(pageNumber);
        }
    };
    
    // TODO: Make skill icons link to specific projects??
    // TODO: To help make it responsive, get the Parallax to be based off both window.innerWidth and window.innerHeight

    return (
        <>
            <div id={styles.container}>
                <Parallax pages={window.innerWidth > 768 ? 3.1 : 3.3} ref={parallaxref}>
                    <ParallaxLayer onClick={() => scrollToPage(0)}>
                        <section className={styles.hero}>
                            <ParallaxLayer
                                factor={0.5}
                                speed={0.5}
                            >
                                <div className={styles.heroTitle}>
                                    <h1 className=
                                    'bg-clip-text text-transparent bg-gradient-to-b from-accent-blue via-accent-purple to-accent-yellow text-5xl sm:text-7xl italic'>Kyle Rachman</h1>
                                    <h2 className={`text-2xl sm:text-3xl text-gray-300 ${styles.subtitle}`}>Web Design and Development</h2>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer
                                factor={0.5}
                                offset={0.5}
                                speed={0.75}
                            >
                                <div className={styles.skills}>
                                    <img src="src/assets/logos/HTML5_Badge.svg" alt="HTML logo" className={styles.skill}/>
                                    <img src="src/assets/logos/CSS3_logo.svg" alt="CSS logo" className={styles.skill}/>
                                    <img src="src/assets/logos/logo-javascript.svg" alt="Javascript logo" className={styles.skill}/>
                                    <img src="src/assets/logos/Typescript_logo_2020.svg" alt="Typescript logo" className={styles.skill}/>
                                    <img src="src/assets/logos/logo-python.svg" alt="Python logo" className={styles.skill}/>
                                    <img src="src/assets/logos/Bootstrap_logo.svg" alt="Bootstrap logo" className={styles.skill}/>
                                    <img src="src/assets/logos/Tailwind_CSS_Logo.svg" alt="Tailwind logo" className={styles.skill}/>
                                    <img src="src/assets/logos/jquery-logo.svg" alt="jQuery logo" className={styles.skill}/>
                                    <img src="src/assets/logos/flask.svg" alt="Flask logo" className={styles.skill}/>
                                    <img src="src/assets/logos/mysql-logo.svg" alt="MySQL logo" className={styles.skill}/>
                                    <img src="src/assets/logos/mongodb.svg" alt="MongoDB logo" className={styles.skill}/>
                                    <img src="src/assets/logos/mongoose.svg" alt="Mongoose logo" className={styles.skill}/>
                                    <img src="src/assets/logos/expressjs-icon.svg" alt="Express.js logo" className={styles.skill}/>
                                    <img src="src/assets/logos/React-icon.svg" alt="React logo" className={styles.skill}/>
                                    <img src="src/assets/logos/Node.js_logo.svg" alt="Node.js logo" className={styles.skill}/>
                                    <img src="src/assets/logos/github-mark.svg" alt="Github logo" className={styles.skill}/>
                                    <img src="src/assets/logos/Amazon_Web_Services_Logo.svg" alt="AWS logo" className={styles.skill}/>
                                    <img src="src/assets/logos/postman.svg" alt="Postman logo" className={styles.skill}/>
                                    <img src="src/assets/logos/Mathematica_Logo.svg" alt="Mathematica logo" className={styles.skill}/>
                                </div>
                            </ParallaxLayer>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} factor={0.6} onClick={() => scrollToPage(1)}>
                        <section className={styles.about} ref={aboutref}>
                            <ToggleOnScroll firstTimeSlide direction='from-left'>
                                <h2 className= 'text-4xl'>
                                    Hey there! I'm a full stack developer and mathematician based in San Luis Obispo, California. I focus on clean whole-stack web design and UI/UX.
                                </h2>
                            </ToggleOnScroll>
                            <ToggleOnScroll firstTimeSlide direction='from-right'>
                                <button className='border border-black p-2 text-black transition-color duration-500 hover:text-white hover:bg-black mt-10 hover:drop-shadow-accent-blue' onClick={() => navigate('/about')}>More about me</button>
                            </ToggleOnScroll>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={window.innerWidth > 768 ? 1.6 : 2} factor={1} onClick={() => scrollToPage(window.innerWidth > 768 ? 1.61 : 1.97)}>
                        <section className={`pt-10 ${styles.work}`}>
                            <ProjectCarousel></ProjectCarousel>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={100}>
                                <button className='border border-white p-2 text-white transition-color duration-500 hover:text-black hover:bg-white mt-4 bg-background-black hover:drop-shadow-accent-blue' onClick={() => navigate('/work')}>See all projects</button>
                            </ToggleOnScroll>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={window.innerWidth > 768 ? 2.65 : 2.3} factor={0.1} onClick={() => scrollToPage(2.25)}>
                        <section className={styles.contact}>
                            <hr className='w-[80vw] mb-[20px] mx-auto mt-[20px] md:mt-[-60px]'/>
                            <Footer></Footer>
                        </section>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    )
}

export default Home
