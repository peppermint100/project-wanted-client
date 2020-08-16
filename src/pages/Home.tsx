import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Footer, CheckAuth, Jumbotron, InnerContainer, CustomButton, Posts, BlurringLayer, HelperText, ToApplicationManagerButton } from "./../components"
import styled, { css } from 'styled-components'
import Colors from '../styles/colors'
import { useSelector } from "react-redux"
import { RootReducerType } from '../redux/reducers/rootReducers'
import { useLocation } from "react-router-dom"

interface LocationProps {
    message: string;
}

export default function Home() {
    const isShowing = useSelector((state: RootReducerType) => state.modalReducer)
    const buttonRef = useRef<HTMLElement>(null)
    const [postsShowing, setPostsShowing] = useState<boolean>(true)

    const location = useLocation<LocationProps>()

    const showPosts = () => {
        setPostsShowing(postsShowing => !postsShowing)
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

    useEffect(() => {
        if (location.state && location.state.message) {
            window.alert(location.state.message)
            window.history.replaceState(null, "/")
        }
    })


    return (
        <Container isShowing={isShowing}>
            <BlurringLayer isShowing={isShowing}>
                <CheckAuth />
                <Navbar />
                <ToApplicationManagerButton isShowing={isShowing} />
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
            </BlurringLayer>
        </Container>
    )
}



const Container = styled.div<{ isShowing: boolean }>`
    position: relative;
    min-height: 100vh;
    transition: opacity .4s ease-in-out;
    z-index: 10;
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