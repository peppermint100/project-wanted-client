import React from 'react'
import { Navbar, InnerContainer, Footer, CheckAuth } from "."
import styled from "styled-components"

interface Props {
    children: any
}

const DefaultContainer: React.FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            <CheckAuth />
            <Navbar />
            <InnerContainer>
                {children}
            </InnerContainer>
            <Footer />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position:relative;
    min-height: 100vh;
`

export default DefaultContainer