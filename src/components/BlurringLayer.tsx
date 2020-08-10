import React from 'react'
import styled, { css } from "styled-components"

interface Props {
    isShowing: boolean;
    children: any;
}

const BlurringLayer: React.FC<Props> = ({ isShowing, children }) => {
    return (
        <Wrapper isShowing={isShowing}>
            {children}
        </Wrapper>
    )
}
const Wrapper = styled.div<Props>`
    z-index: 20;
    ${props => props.isShowing ? css` background-color: rgba(0, 0, 0, .5) !important;` : null};
`

export default BlurringLayer
