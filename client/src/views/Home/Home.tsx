import React, { useRef, useState } from 'react'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useNavigate } from 'react-router-dom'
import ToggleOnScroll from '../../components/Navbar/ToggleOnScroll'
import styles from './Home.module.css'

const Home = () => {
    const ref = useRef<IParallax>(null)
    const navigate = useNavigate()

    const scrollToPage = (pageNumber: number) => {
        if (ref?.current) {
            ref.current.scrollTo(pageNumber);
        }
    };

    return (
        <>
            <div id={styles.container}>
                <Parallax pages={4} ref={ref}>
                    <ParallaxLayer onClick={() => scrollToPage(0)}>
                        <section className={styles.hero}>
                            <ParallaxLayer
                                factor={0.5}
                                speed={0.5}
                            >
                                <div className={styles.title}>
                                    <h1 className=
                                    'bg-clip-text text-transparent bg-gradient-to-b from-accent-blue via-accent-purple via-accent-orange to-accent-yellow text-7xl italic'>Kyle Rachman</h1>
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
                    <ParallaxLayer offset={1} factor={0.5} onClick={() => scrollToPage(1)}>
                        <section className={styles.about}>
                            <ToggleOnScroll firstTimeSlide>
                                <h2 className= 'text-4xl'>
                                    Hey there! I'm a full stack developer and mathematician based in San Luis Obispo, California. I focus on clean whole-stack web design and UI/UX.
                                </h2>
                            </ToggleOnScroll>
                            <ToggleOnScroll>
                                <button className='border border-black p-2 text-black transition-color duration-500 hover:text-white hover:bg-black' onClick={() => navigate('/about')}>More about me</button>
                            </ToggleOnScroll>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.65} onClick={() => scrollToPage(1.6)}>
                        <section className={styles.work}>
                            <p>test</p>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} onClick={() => scrollToPage(3)}>
                        <section className={styles.contact}>
                            <p>test</p>
                        </section>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    )
}

export default Home
