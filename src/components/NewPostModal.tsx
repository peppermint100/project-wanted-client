import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ModalContainer } from "."

interface Props {
    isShowing: boolean
    hide: () => void
}

interface calculateCurrentPositionType {
    top: number;
    left: number;
}

const NewPostModal: React.FC<Props> = ({ isShowing, hide }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    const calculateCurrentPosition = () => {
        const top = window.scrollY + window.innerHeight / 2
        const left = window.scrollX + window.innerWidth / 2
        return { top, left }
    }

    const currentPosition = calculateCurrentPosition()

    useEffect(() => {
        const { current } = modalRef
        if (current !== null && !isShowing) {
            current.style.transition = "opacity .5s ease-in-out"
            current.style.opacity = "0"
        }
        if (current !== null && isShowing) {
            current.style.transition = "all .3s ease-in-out"
            // current.style.transform = "scale(1, 1)"
            current.style.opacity = "1"
        }
    }, [isShowing])

    return (
        <ModalContainer isShowing={isShowing} hide={hide}>
            {/* {isShowing ? <Container ref={modalRef} top={currentPosition.top} left={currentPosition.left} > new Post creating...</Container> : null} */}

            <Container ref={modalRef} top={currentPosition.top} left={currentPosition.left} > new Post creating...</Container>
        </ModalContainer>
    )

}

interface ModalStyledProps {
    top: number;
    left: number;
}

const Container = styled.div<ModalStyledProps>`
    width: 800px;
    height: 800px;
    position: absolute;
    top: ${props => props.top}px;
    left:  ${props => props.left}px;
    background-color: #000;
    color: #fff;
    z-index: 10;
    transform: translate(-400px, -400px);
    opacity: 0;
    // transform: scale(0, 0);

    @media (max-width: 980px){
        width: 500px;
        height: 500px;
        top: ${props => props.top}px;
        left:  ${props => props.left}px;
        transform: translate(-250px, -250px);
    }
`

export default NewPostModal