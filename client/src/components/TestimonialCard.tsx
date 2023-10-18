import React, { useState } from 'react'

interface Props {
    testifier: string,
    position: string,
    testimonial: Array<string>,
    source?: Array<string>
}

// TODO: Add 3D movement to card

const TestimonialCard = ({testifier, position, testimonial, source}: Props) => {

    return (
        <div className={`border-4 border-accent-blue rounded-3xl w-[350px] h-[500px] bg-background-black px-6 pt-6 pb-2`}>
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
    )
}

export default TestimonialCard
