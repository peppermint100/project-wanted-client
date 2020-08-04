import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Footer, CheckAuth, Jumbotron, InnerContainer, CustomButton, StartButton, Posts } from "./../components"
import styled from 'styled-components'
import Colors from '../styles/colors'


export default function Home() {
    const buttonRef = useRef<HTMLElement>(null)
    const [postsShowing, setPostsShowing] = useState<boolean>(true)

    const showPosts = () => {
        setPostsShowing(postsShowing => { return !postsShowing })
    }
    const buttonOptions = {
        width: "300px",
        height: "50px",
        content: "시작하기",
        backgroundColor: `${Colors.grape}`,
        fontSize: "24px",
        border: `2px solid ${Colors.grape}`,
        color: `#fff`,
        onClick: () => { showPosts() }
    }

    useEffect(() => {
        const { current } = buttonRef
        if (current !== null) {
            current.style.transition = "opacity .7s ease-in"
            current.style.opacity = "1"
        }
        if (current !== null && postsShowing) {
            current.style.opacity = "0"
            current.style.pointerEvents = "none"
        }
    })


    return (
        <Container>
            <CheckAuth />
            <Navbar />
            <InnerContainer>
                <JumboSection>
                    <Jumbotron />
                </JumboSection>
                <ButtonSection ref={buttonRef}>
                    <CustomButton  {...buttonOptions} />
                </ButtonSection>
                {postsShowing ? <Posts /> : null}
            </InnerContainer>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: 100vh;
`

const JumboSection = styled.main`
    width: 65%;
    margin: 0 auto;
    @media (max-width: 1100px){
        width: 80%;
    }
`

const ButtonSection = styled.section`
    display:flex;
    justify-content: center;
    margin: 40px;
    opacity: 0;
    button{
    }
`