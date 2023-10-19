import React from 'react'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import TestimonialCard from '../../components/TestimonialCard'
import Footer from '../../components/Footer'
import styles from './About.module.css'
import { transform } from '@babel/core'

// TODO: Update sidebar picture

const About = () => {

    return (
        <div id={styles.container}>
            <div className='hero flex items-center text-4xl gap-20 mb-10'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                    <div className={styles.heroinfodesktop}>
                        <div className='grid grid-cols-3 grid-rows-3 gap-2 justify-items-center w-[100%] font-bold'>
                            <p className='col-start-1 row-start-1 col-end-1 row-end-1 max-w-[100%]'>Developer</p>
                            <p className='col-start-2 row-start-2 col-end-2 row-end-2 max-w-[100%] ml-[-175px]'>Mathematician</p>
                            <p className='col-start-3 row-start-3 col-end-3 row-end-3 max-w-[100%] ml-[-175px]'>Climber</p>
                        </div>
                        <p className='text-accent-yellow text-2xl w-[100%] font-light'>|| About me</p>
                        <p className='text-3xl'>My name is Kyle Rachman.
                        <br />
                        I'm a Full Stack web developer with a passion for making creative and seamless user experiences.</p>
                    </div>
                </ToggleOnScroll>
                <img id={styles.desktopimage} src="/profile-formal.jpg" alt="Profile Picture" onMouseOver={(e) => {
                    e.currentTarget.src='/profile-casual.jpg'
                    e.currentTarget.classList.remove('filter', 'grayscale', 'opacity-85')
                }} onMouseOut={(e) => {
                        e.currentTarget.src='/profile-formal.jpg'
                        e.currentTarget.classList.add('filter', 'grayscale', 'opacity-85')
                }} className='filter grayscale w-[50vw] rounded-md transition-opacity duration-500 opacity-85'/>
                <img id={styles.mobileimage} src="/profile-formal.jpg" alt="Profile Picture" className='w-[50vw] rounded-md'/>
            </div>
            <div className='bg-white py-20 px-16 xs:px-20'>
                <img src="/profile-casual.jpg" alt="placeholder" className='hidden md:block float-left h-[80vh] w-[30vw] ml-[-80px] mr-10 object-cover'/>
                <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <div className='expertise text-black'>
                        <p className="text-2.5xl xs:text-3xl mb-4">
                            <strong>My Expertise:</strong>
                        </p>
                        <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                            <div className='flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 gap-8 sm:items-start sm:text-left'>
                                <div className='max-w-[320px] w-[100%]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Full Stack Web Development.</p>
                                    <p>(MERN and Flask). Ipsum sint in id quis laboris laborum. Ut aliqua mollit in id enim consectetur elit minim adipisicing consectetur ut eu.</p>
                                </div>
                                <div className='max-w-[320px] w-[100%]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Frontend UI/UX.</p>
                                    <p>Laboris irure adipisicing irure pariatur do proident. Culpa laborum ea velit ad tempor Lorem do eiusmod culpa nostrud eu veniam.</p>
                                </div>
                                <div className='max-w-[320px] w-[100%]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Mathematics.</p>
                                    <p>(Group Theory and Linear Algebra). Dolor commodo commodo fugiat cillum proident eu laboris eiusmod nisi dolore sunt.</p>
                                </div>
                                <div className='max-w-[320px] w-[100%]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Education.</p>
                                    <p>(Former teacher). Consequat incididunt magna ex ex consequat dolor tempor et incididunt dolor consequat duis.</p>
                                </div>
                            </div>
                        </ToggleOnScroll>
                    </div>
                </ToggleOnScroll>
            </div>
            <div className='bg-white p-6 mt-[-1px]'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <div className='learning text-black'>
                        <p className="text-2.5xl xs:text-3xl text-black mb-4">
                            <strong>What I'm Working On:</strong>
                        </p>
                        <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                            <div className='flex flex-wrap justify-between gap-8'>
                                <div className='max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>AWS Certification.</p>
                                </div>
                                <div className='max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>TypeScript.</p>
                                </div>
                                <div className='max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Tailwind.</p>
                                </div>
                            </div>
                        </ToggleOnScroll>
                    </div>
                </ToggleOnScroll>
            </div>
            <div className='bg-white py-20 px-16 xs:px-20 pb-4 mt-[-1px]'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <div className='whoIAm text-black'>
                        <p className="text-2.5xl xs:text-3xl mb-4">
                            <strong>Who I Am:</strong>
                        </p>
                        <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                            <div className='flex flex-col md:grid md:grid-rows-2 md:grid-cols-3 gap-8'>
                                <div className='xs:max-w-[70vw] md:max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Dedicated.</p>
                                    <p>I go above and beyond to complete projects with excellence. I give 110%.</p>
                                </div>
                                <div className='xs:max-w-[70vw] md:max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Organized.</p>
                                    <p>I thoroughly plan and document steps to save both of us time and resources.</p>
                                </div>
                                <div className='xs:max-w-[70vw] md:max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Precise.</p>
                                    <p>As a mathematician, I believe in paying attention to even the smallest details.</p>
                                </div>
                                <div className='xs:max-w-[70vw] md:max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Responsible.</p>
                                    <p>I follow through with commitments I make, never leaving people hanging.</p>
                                </div>
                                <div className='xs:max-w-[70vw] md:max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Team-oriented.</p>
                                    <p>I am a team player and believe strongly in collaborative effort. Nobody walks alone.</p>
                                </div>
                                <div className='xs:max-w-[70vw] md:max-w-[240px]'>
                                    <p className='text-accent-purple text-2xl font-semibold'>Joyful.</p>
                                    <p>I always have a smile on my face. I bring a positive environment with me wherever I go.</p>
                                </div>
                            </div>
                        </ToggleOnScroll>
                    </div>
                </ToggleOnScroll>
            </div>
            <div className='bg-white py-20 px-16 xs:px-20 mt-[-1px]'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <p className="text-2.5xl xs:text-3xl text-black">
                        <strong>Testimonials:</strong>
                    </p>
                    <div className="testimonials flex justify-between gap-[2vw] flex-wrap mx-auto mt-4">
                        <TestimonialCard
                            testifier='Brandon Davis'
                            position='test position'
                            testimonial={['Aliqua nostrud fugiat dolor ipsum commodo eu occaecat non sit eu eiusmod fugiat. Id id laboris laboris qui aute do aliquip nisi officia.', 'Excepteur aute aliqua fugiat incididunt aliqua sint laborum proident ut dolor qui. Reprehenderit sint sunt dolor anim ad eiusmod irure ea ipsum nostrud dolore. Cupidatat ea minim ullamco aute commodo officia minim sint amet minim tempor elit officia tempor. Id tempor quis cupidatat elit.']}
                            source={['/vite.svg', 'placeholder']}
                        ></TestimonialCard>
                        <TestimonialCard
                            testifier='firstname lastname'
                            position='test position'
                            testimonial={['Ullamco irure consectetur est irure cillum fugiat exercitation amet pariatur ex do. Qui mollit minim culpa reprehenderit culpa.']}
                            source={['/profile-formal.jpg', 'placeholder']}
                        ></TestimonialCard>
                        <TestimonialCard
                            testifier='funny name'
                            position='test position'
                            testimonial={['Consectetur sint dolore nostrud pariatur commodo officia sit aliqua. Aute enim eu minim magna fugiat incididunt sunt nostrud mollit eiusmod. Consequat tempor aute elit qui nisi reprehenderit officia incididunt consequat ex cillum. Aliquip nostrud incididunt incididunt eu Lorem in nisi occaecat.']}
                            source={['/profile-casual.jpg', 'placeholder']}
                        ></TestimonialCard>
                    </div>
                </ToggleOnScroll>
            </div>
            <div className='bg-gray-300 py-20 px-16 xs:px-20 mt-[-1px]'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                    <p className="text-2.5xl xs:text-3xl text-black">
                        <strong>Outside the Office:</strong>
                    </p>
                </ToggleOnScroll>
                <div className='flex flex-col w-[80vw]'>
                    <div className={styles.outsideImage}>
                        <img src="/profile-formal.jpg" alt="Profile Picture"/>
                    </div>
                    <div className={styles.outsideImage}>
                        <img src="/profile-formal.jpg" alt="Profile Picture"/>
                    </div>
                    <div className={styles.outsideImage}>
                        <img src="/profile-formal.jpg" alt="Profile Picture"/>
                    </div>
                    <div className={styles.outsideImage}>
                        <img src="/profile-formal.jpg" alt="Profile Picture"/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col py-[48px]'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default About
