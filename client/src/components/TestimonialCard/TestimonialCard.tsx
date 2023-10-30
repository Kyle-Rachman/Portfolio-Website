import React, { useState } from 'react'
import styles from './TestimonialCard.module.css'

interface Props {
    testifier: string,
    position: string,
    testimonial: Array<string>,
    source?: Array<string>
}

const TestimonialCard = ({testifier, position, testimonial, source}: Props) => {

    const gridinfo: Array<Array<number>> = [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]]
    return (
        <div className={`h-[590px] xs:h-[520px] w-[300px] xs:w-[350px] grid ${styles.wrapper}`}>
            <div className={`h-[590px] xs:h-[520px] w-[300px] xs:w-[350px] border-[3px] border-accent-blue rounded-3xl bg-background-black px-6 pt-6 pb-2 drop-shadow-accent-blue`}>
                <p className='text-3xl mb-[-10px]'>"</p>
                {testimonial.map((paragraph, index) => (
                    <p key={index} className={index == testimonial.length-1 ? '' : 'mb-4'}>{paragraph}</p>
                    ))}
                <p className='text-3xl'>"</p>
                <div className='mt-2 flex justify-between items-center gap-4'>
                    {source && <div className='imgWrapper'>
                        <img src={source[0]} alt={source[1]} className='h-[5vh] w-[5vh] rounded-full object-cover border border-white' />
                    </div>}
                    <div className='flex-1'>
                        <p className='text-[1.75rem]'>{testifier}</p>
                        <p>{position}</p>
                    </div>
                </div>
            </div>
            <div className={`grid grid-rows-[10] grid-cols-[10] h-[590px] xs:h-[520px] w-[300px] xs:w-[350px] relative inset-0 top-[-100%] ${styles.mousePositionTracker}`}>
                {
                    gridinfo.map((arr, idx1) => (
                        arr.map((val, idx2) => (
                            <div key={10*(idx1+1) + val} className={`row-start-${idx1+1} row-span-1 col-start-${val} col-span-1`}></div>
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default TestimonialCard
