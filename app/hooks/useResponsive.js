'use client'
import { useState, useEffect, useCallback } from "react"

const useResponsive = (sizeScreen) =>{
    const [isMobile, setIsMobile] = useState(false)

    const handleScreenSize = useCallback(e =>{
        setIsMobile(!e.matches)
    },[])

    useEffect(()=>{
        const screen = window.matchMedia(`(min-width: ${sizeScreen}px)`)
        handleScreenSize(screen)
        screen.addEventListener("change", handleScreenSize)

        return () => {
            screen.removeEventListener("change", handleScreenSize)
        }
    },[isMobile])

    return isMobile
}

export default useResponsive
