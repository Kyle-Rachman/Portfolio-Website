import React from 'react'
import ToggleOnScroll from '../../components/ToggleOnScroll'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer'
import styles from './About.module.css'
import SEO from '../../components/SEO'
import profilePicture from '../../assets/profile-formal.jpg'

// TODO: Get testimonials and update testimonial cards

const About = () => {

    return (
        <>
            <SEO
                title='Kyle Rachman | About Me'
                url='https://kylerachman.dev/about'
                image={profilePicture}
                imageAlt="A picture of my smiling face!"
                description="Learn more about me and what I can do for you. I hope that my services can help you succeed as we create a project together!"
            ></SEO>
            <div id={styles.container}>
                <PageHeader
                    heroImage='../src/assets/profile-formal.jpg'
                    heroImageAlt='Formal Profile Picture of Kyle Rachman'
                    altImage='../src/assets/profile-casual.jpg'
                    heroAltImageAlt='Casual Profile Picture of Kyle Rachman'
                    heroTitle={<div className='grid grid-cols-3 grid-rows-3 gap-2 justify-items-start font-bold sm:ml-[10vw] md:ml-[-40px]'>
                                    <p className='col-start-1 row-start-1 col-end-1 row-end-1 max-w-[100%] '>Mathematician<span className='text-accent-blue'>.</span></p>
                                    <p className='col-start-2 row-start-2 col-end-2 row-end-2 max-w-[100%] ml-[2px]'>Developer<span className='text-accent-purple'>.</span></p>
                                    <p className='col-start-3 row-start-3 col-end-3 row-end-3 max-w-[100%] ml-[-40px]'>Climber<span className='text-accent-orange'>.</span></p>
                                </div>}
                    heroPage='About me'
                    heroDescription="My name is Kyle Rachman. I'm a Full Stack developer and software engineer with a passion for making creative and seamless user experiences."
                ></PageHeader>
                <div className='bg-white py-20 px-16 xs:px-20'>
                    <img src="src/assets/sidebar.jpg" alt="Open VS Code Editor" className='hidden md:block float-left h-[80vh] w-[30vw] ml-[-80px] mr-10 object-cover'/>
                    <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                        <div className='expertise text-black'>
                            <p className="text-2.5xl xs:text-3xl mb-4">
                                <strong>My Expertise:</strong>
                            </p>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <div className='flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 gap-8 sm:items-start sm:text-left'>
                                    <div className='max-w-[320px] w-[100%]'>
                                        <p className='text-accent-purple text-2xl font-semibold'>Full Stack Web Development.</p>
                                        <p><strong>Digital presence is at the core of the modern world.</strong> I use MERN, Flask and other cutting-edge tools to create high-functioning, responsive websites for companies.</p>
                                    </div>
                                    <div className='max-w-[320px] w-[100%]'>
                                        <p className='text-accent-purple text-2xl font-semibold'>Frontend UI/UX.</p>
                                        <p><strong>I make a difference by implementing clean and strong design.</strong> Having the right look and feel for an interface adds value to the product, strengthens user experience, and boosts results.</p>
                                    </div>
                                    <div className='max-w-[320px] w-[100%]'>
                                        <p className='text-accent-purple text-2xl font-semibold'>Mathematics.</p>
                                        <p><strong>Visualizing and analyzing complex relationships and interactions comes naturally to me.</strong> I specialize in group and ring theory and linear algebra at a M.S. level.</p>
                                    </div>
                                    <div className='max-w-[320px] w-[100%]'>
                                        <p className='text-accent-purple text-2xl font-semibold'>Education.</p>
                                        <p><strong>Passing on knowledge and strong communication skills are talents of mine.</strong> As a former teacher, I am passionate about helping others develop their skills.</p>
                                    </div>
                                </div>
                            </ToggleOnScroll>
                        </div>
                    </ToggleOnScroll>
                </div>
                <div className='bg-white pb-6 mt-[-1px]'>
                    <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                        <div className='learning text-black'>
                            <p className="text-2.5xl xs:text-3xl text-black mb-4 px-16">
                                <strong>What I'm Working On:</strong>
                            </p>
                            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                                <div className='flex flex-wrap justify-between gap-8 px-[2.6rem] md:px-16'>
                                    <div className='max-w-[240px]'>
                                        <p className='text-accent-purple text-2xl font-semibold'>AWS Certification.</p>
                                    </div>
                                    <div className='max-w-[240px]'>
                                        <p className='text-accent-purple text-2xl font-semibold'>TypeScript.</p>
                                    </div>
                                    <div className='max-w-[240px]'>
                                        <p className='text-accent-purple text-2xl font-semibold'>Solid.js.</p>
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
                                        <p>I am a team player and believe strongly in collaborative effort. Nobody should walk alone.</p>
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
                    </ToggleOnScroll>
                    <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                        <div className="testimonials flex justify-center gap-[5vh] md:gap-[2vw] flex-wrap mx-auto mt-4">
                            <TestimonialCard
                                testifier='Brandon Davis'
                                position='Staff Software Engineer and Tech Lead at Appfolio, Inc.'
                                testimonial={['Aliqua nostrud fugiat dolor ipsum commodo eu occaecat non sit eu eiusmod fugiat. Id id laboris laboris qui aute do aliquip nisi officia.', 'Excepteur aute aliqua fugiat incididunt aliqua sint laborum proident ut dolor qui. Reprehenderit sint sunt dolor anim ad eiusmod irure ea ipsum nostrud dolore. Cupidatat ea minim ullamco aute commodo officia minim sint amet minim tempor elit officia tempor. Id tempor quis cupidatat elit.']}
                                source={['src/assets/brandon-profile.jpg', 'Brandon Davis Profile Picture']}
                            ></TestimonialCard>
                            <TestimonialCard
                                testifier='Rachel Russell'
                                position='Director of Youth Programs at &nbsp; The Pad Climbing SLO'
                                testimonial={['Ullamco irure consectetur est irure cillum fugiat exercitation amet pariatur ex do. Qui mollit minim culpa reprehenderit culpa.']}
                                source={['src/assets/profile-formal.jpg', 'placeholder']}
                            ></TestimonialCard>
                            <TestimonialCard
                                testifier='Eric Dunham'
                                position='Master Teacher at Central Coast New Tech High School'
                                testimonial={['Consectetur sint dolore nostrud pariatur commodo officia sit aliqua. Aute enim eu minim magna fugiat incididunt sunt nostrud mollit eiusmod. Consequat tempor aute elit qui nisi reprehenderit officia incididunt consequat ex cillum. Aliquip nostrud incididunt incididunt eu Lorem in nisi occaecat.']}
                                source={['src/assets/eric-profile.jpg', 'Eric Dunham Profile Picture']}
                            ></TestimonialCard>
                        </div>
                    </ToggleOnScroll>
                </div>
                <div className='py-20 px-16 xs:px-20 mt-[-1px] overflow-x-hidden' style={{background: 'linear-gradient(to right, rgb(var(--accent-blue)) 5%, whitesmoke 15%, whitesmoke 85%, rgb(var(--accent-blue)) 95%)'}}>
                    <ToggleOnScroll firstTimeSlide direction='from-bottom' delay={[0]}>
                        <div className="text-2.5xl xs:text-3xl text-black">
                            <p><strong>Outside the Office:</strong></p>
                            <p className='text-sm font-light mb-10'>Hover over or tap an image!</p>
                        </div>
                    </ToggleOnScroll>
                    <div className='flex flex-col w-[80vw] gap-10 md:gap-2'>
                        <div className={`${styles.outsideImage} group`}>
                            <img src="src/assets/climbing-graduation.jpg" alt="Grad Picture Climbing at Bishop Peak" className='blur-[1px] hover:blur-none group-hover:scale-[1.25] sm:group-hover:scale-[1.75] md:group-hover:scale-[2]'/>
                        </div>
                        <div className={`${styles.outsideImage} group`}>
                            <img src="src/assets/album-cover.jpg" alt="Jumping down a sand dune at Montano de Oro" className='blur-[1px] hover:blur-none group-hover:scale-[1.5] sm:group-hover:scale-[1.75] md:group-hover:scale-[2]'/>
                        </div>
                        <div className={`${styles.outsideImage} group`}>
                            <img src="src/assets/friends-hangout.jpg" alt="Pumpkin painting party with friends" className='blur-[1px] hover:blur-none group-hover:scale-[1.25] sm:group-hover:scale-[1.75] md:group-hover:scale-[2]'/>
                        </div>
                        <div className={`${styles.outsideImage} group`}>
                            <img src="src/assets/local-church-booth.jpg" alt="Local Church booth at the Cal Poly Club Showcase 2023" className='blur-[1px] hover:blur-none group-hover:scale-[1.25] sm:group-hover:scale-[1.75] md:group-hover:scale-[2]'/>
                        </div>
                        <div className={`${styles.outsideImage} group mb-10`}>
                            <img src="src/assets/hiking-woods.jpg" alt="Hiking through Deception Pass in Washington" className='blur-[1px] hover:blur-none group-hover:scale-[1.5] sm:group-hover:scale-[1.75] md:group-hover:scale-[2]'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col py-[48px]'>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default About
