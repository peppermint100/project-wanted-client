import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Navbar, Footer, MyPageForm, CheckAuth } from "./../components"
import Colors from "./../styles/colors"

export default function MyPage() {
    return (
        <>
            <Wrapper>
                <Navbar />
                <Container>
                    <InnerContainer>
                        <Header><span role="img" aria-label="register">🎪</span>   내 정보 수정</Header>
                        <MyPageForm />
                        <ToRegister></ToRegister>
                    </InnerContainer>
                </Container>
                <Footer usecase="register" />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    position:relative;
    min-height: 100vh;
`

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
`

const InnerContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    width: 800px;
    min-height: 100vh;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`
const Header = styled.div`
   margin: 50px; 
   font-size: 32px;
`
const ToRegister = styled.p`
    height: 78px;
`