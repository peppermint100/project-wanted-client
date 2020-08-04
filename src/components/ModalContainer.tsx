import React, { useRef, useState, useEffect } from 'react'
import styled from "styled-components"

interface Props {
    children: any
    isShowing: boolean
    hide: () => void
}

const ModalContainer: React.FC<Props> = ({ children, hide, isShowing }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: any) => {
        const { current } = containerRef
        if (current !== null && isShowing && !current.contains(e.target)) {
            console.log('ok!')
            hide()
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleClick)

        return () => {
            window.removeEventListener("click", handleClick)
        }
    }, [isShowing])


    return (
        <>
            {isShowing ?
                <Container ref={containerRef}>
                    {children}
                </Container>
                : null
            }
        </>
    )
}


const Container = styled.div``

export default ModalContainer