import React, { useEffect } from 'react'
import { Navbar, Footer, CheckAuth } from "./../components"
import styled from 'styled-components'

export default function Home() {

    return (
        <Container>
            <CheckAuth />
            <Navbar />
            <div style={{ paddingBottom: "200px" }}>
                contentfeawkfew
            </div>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: 100vh;
`
