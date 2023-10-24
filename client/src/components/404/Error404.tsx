import React from 'react'
import ProjectInfos from '../../assets/projectinfo.json'
import ToggleOnScroll from '../ToggleOnScroll'
import styles from './Error404.module.css'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
    const navigate = useNavigate()

    return (
        <div id={styles.container}>
            <div className='hero flex flex-col md:flex-row items-center text-4xl gap-20 mb-10 py-2 w-[100%] h-[90vh]'>
                <ToggleOnScroll firstTimeSlide direction='from-bottom'>
                    <div className='flex flex-col content-start mx-10 md:ml-20 gap-[40px] mb-[-50px] md:mb-0 md:w-[200px]'>
                        <p className='max-w-[100%] font-bold'>Page not found... sorry!</p>
                        <p className='text-accent-yellow text-2xl w-[100%] font-light'>|| 404</p>
                        <p className='text-2xl'>You probably shouldn't be here... here there be dragons. Let's get you back where it's safe.</p>
                        <button className='border-2 border-white w-fit px-3 py-1 text-2xl self-center transition-color duration-500 hover:text-black hover:bg-white hover:drop-shadow-accent-blue' onClick={() => navigate('/')}>Return Home</button>
                    </div>
                </ToggleOnScroll>
                <img src="../src/assets/dragon.png" alt="Here Be Dragons" className='min-h-[500px] md:relative md:right-20 rounded-md object-cover'/>
            </div>
        </div>
    )
}

export default Error404