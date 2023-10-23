import React, { ReactNode } from 'react'
import ToggleOnScroll from '../ToggleOnScroll'
import styles from './PageHeader.module.css'

interface Props {
    heroImage: string,
    altImage: string,
    heroTitle: ReactNode,
    heroPage: string,
    heroDescription: string,
}

// TODO: Make responsive

const PageHeader = ({heroImage, altImage, heroTitle, heroPage, heroDescription}: Props) => {
    return (
        <div className='flex flex-col md:flex-row items-center text-4xl gap-20 mb-10 px-20 py-2 w-[100%] h-[90vh]'>
            <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                <div className='flex flex-col content-start gap-[40px] mb-[-50px] md:mb-0'>
                    {heroTitle}
                    <p className='text-accent-yellow text-2xl w-[100%] font-light'>|| {heroPage}</p>
                    <p className='text-xl md:text-3xl'>{heroDescription}</p>
                </div>
            </ToggleOnScroll>
            <img id={styles.desktopimage} src={heroImage} alt="Placeholder" onMouseOver={(e) => {
                e.currentTarget.src=altImage
                e.currentTarget.classList.remove('filter', 'grayscale', 'opacity-85')
            }} onMouseOut={(e) => {
                    e.currentTarget.src=heroImage
                    e.currentTarget.classList.add('filter', 'grayscale', 'opacity-85')
            }} className='filter grayscale w-[50vw] rounded-md transition-opacity duration-500 opacity-85'/>
            <img id={styles.mobileimage} src={heroImage} alt="Placeholder" className='w-[80vw] md:w-[50vw] rounded-md'/>
        </div>
    )
}

export default PageHeader
