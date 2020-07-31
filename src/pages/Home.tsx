import React, { useEffect } from 'react'
import { Navbar, Footer, CheckAuth, InnerContainer } from "./../components"
import styled from 'styled-components'

export default function Home() {

    return (
        <Container>
            <CheckAuth />
            <Navbar />
            <InnerContainer>
                contentfeawkfew
            </InnerContainer>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: 100vh;
`
