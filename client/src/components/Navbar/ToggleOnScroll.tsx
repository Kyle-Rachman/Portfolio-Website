import React, { useEffect, useRef, useState, ReactNode } from 'react'

interface Props {
    children?: ReactNode,
    firstTimeSlide?: boolean
}

const ToggleOnScroll = ({ children, firstTimeSlide }: Props) => {
    const [isVisible, setIsVisible] = useState(false)
    const [firstAppear, setFirstAppear] = useState(firstTimeSlide ? true : false)
    const ref = useRef(null)

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
        } ${firstAppear ? " -translate-x-full" : ""}`

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    )
}

export default ToggleOnScroll
