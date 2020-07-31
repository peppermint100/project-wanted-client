import React from 'react'
import styled, { css } from "styled-components"


interface Props {
    usecase?: string
}

const Footer: React.FC<Props> = ({ usecase }) => {
    return (
        <Container usecase={usecase}>

        </Container>
    )
}

interface styledProps {
    usecase?: string
}

const Container = styled.footer<styledProps>`
    width:100%;
    height: 200px;
    box-shadow: .5px 0 10px rgba(0, 0, 0, 0.15);
    position: absolute;
    bottom: 0;
    ${props => props.usecase === "register" ?
        css`
            position: static;
        `
        : null
    }
`

export default Footer