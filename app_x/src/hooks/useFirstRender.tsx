import { useEffect, useRef } from "react"

export const useFirstRender = () => {

    const renderRef = useRef(false)

    useEffect(() => {
        renderRef.current = true
    }, [])

    return renderRef.current
}