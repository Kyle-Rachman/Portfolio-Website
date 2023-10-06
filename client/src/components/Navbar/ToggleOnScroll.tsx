import React, { useEffect, useRef, useState, ReactNode } from 'react'

interface Props {
    children?: ReactNode,
    firstTimeSlide?: boolean,
    direction?: string
}

const ToggleOnScroll = ({ children, firstTimeSlide, direction }: Props) => {
    const [isVisible, setIsVisible] = useState(false)
    const [firstAppear, setFirstAppear] = useState(firstTimeSlide ? true : false)
    let varDirection: string = ''
    let varSign: string = ''
    const ref = useRef(null)

    if (direction == 'from-left') {
        varDirection = 'x'
        varSign = '-'
    } else if (direction == 'from-right') {
        varDirection = 'x'
        varSign = ''
    } else if (direction == 'from-top') {
        varDirection = 'y'
        varSign = '-'
    } else if (direction == 'from-bottom') {
        varDirection = 'y'
        varSign = ''
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

    const classes = `transition-all delay-200 duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"
        } ${firstAppear && direction ? varSign + `translate-${varDirection}-full` : ""}`

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    )
}

export default ToggleOnScroll
