import React, { useEffect, useState } from 'react'
import { ArrowUpward } from '@mui/icons-material'
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () =>
            window.scrollY > 250 ? setIsVisible(true) : setIsVisible(false)

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return isVisible ? (
        <div className='scroll-top'>
            <a href='#top'>
                <ArrowUpward fontSize='large' />
            </a>
        </div>
    ) : null
}

export default ScrollToTop
