'use client'
import { useState, useEffect, useCallback } from "react"

const useResponsive = (sizeScreen) =>{
    const [isMobile, setIsMobile] = useState(!window.matchMedia(`(min-width: ${sizeScreen}px)`).matches)

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
    },[sizeScreen])

    return isMobile
}

export default useResponsive
