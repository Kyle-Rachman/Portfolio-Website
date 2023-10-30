import React, { ReactNode } from 'react'
import ToggleOnScroll from '../ToggleOnScroll'
import styles from './PageHeader.module.css'

interface Props {
    heroImage: string,
    altImage: string,
    mobileHeroImage: string,
    heroImageAlt: string,
    heroAltImageAlt: string,
    mobileHeroImageAlt: string,
    heroTitle: ReactNode,
    heroPage: string,
    heroDescription: string,
}

const PageHeader = ({heroImage, altImage, mobileHeroImage, heroImageAlt, heroAltImageAlt, mobileHeroImageAlt, heroTitle, heroPage, heroDescription}: Props) => {
    return (
        <div className='flex flex-col md:flex-row items-center content-center text-4xl gap-20 mb-10 py-2 w-[100%] min-h-[90vh] overflow-x-hidden'>
            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                <div className='flex flex-col content-start gap-[40px] mx-10 md:ml-20 mb-[-50px] md:mb-0 md:w-[275px]'>
                    {heroTitle}
                    <p className='text-accent-yellow text-2xl w-[100%] font-light'>|| {heroPage}</p>
                    <p className='text-xl md:text-3xl'>{heroDescription}</p>
                </div>
            </ToggleOnScroll>
            <img id={styles.desktopimage} src={heroImage} alt={heroImageAlt} onMouseOver={(e) => {
                e.currentTarget.src=altImage
                e.currentTarget.alt=heroAltImageAlt
                e.currentTarget.classList.remove('filter', 'grayscale', 'opacity-85')
            }} onMouseOut={(e) => {
                    e.currentTarget.src=heroImage
                    e.currentTarget.alt=heroImageAlt
                    e.currentTarget.classList.add('filter', 'grayscale', 'opacity-85')
            }} className='filter grayscale md:ml-6 min-h-[450px] h-[450px] md:relative md:right-20 rounded-md transition-opacity duration-500 opacity-85'/>
            <img id={styles.mobileImage} src={heroImage} alt={heroImageAlt} className='hidden sm:block md:ml-6 min-h-[450px] h-[450px] md:relative md:right-20 rounded-md object-cover'/>
            <img src={mobileHeroImage} alt={mobileHeroImageAlt} className={`sm:hidden md:ml-6 min-h-[450px] h-[450px] md:relative md:right-20 rounded-md object-cover`}/>
        </div>
    )
}

export default PageHeader
