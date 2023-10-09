import React, { useEffect, useRef, useState, ReactNode } from 'react'

interface Props {
    children?: ReactNode,
    firstTimeSlide?: boolean,
    direction?: string,
    delay?: number | Array<number>
}

const ToggleOnScroll = ({ children, firstTimeSlide, direction, delay }: Props) => {
    const [isVisible, setIsVisible] = useState(false)
    const [firstAppear, setFirstAppear] = useState(firstTimeSlide ? true : false)
    let translateInstructions: string = ''
    const ref = useRef(null)

    if (direction == 'from-left') {
        translateInstructions = `-translate-x-full`
    } else if (direction == 'from-right') {
        translateInstructions = `translate-x-full`
    } else if (direction == 'from-top') {
        translateInstructions = `-translate-y-full`
    } else if (direction == 'from-bottom') {
        translateInstructions = `translate-y-full`
    }

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                setFirstAppear(false)
            } else {
                setIsVisible(false)
            }
        })
        scrollObserver.observe(ref.current!)
        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current)
            }
        };
    }, [])

    const classes = `transition-all delay-${delay} duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"
        } ${firstAppear && direction ? translateInstructions : ""}`

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    )
}

export default ToggleOnScroll
