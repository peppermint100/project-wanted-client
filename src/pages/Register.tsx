import React from 'react'
import styled from 'styled-components'
import { Navbar, RegisterForm, Footer } from "./../components"
import { Link } from 'react-router-dom'
import Colors from "../styles/colors"


export default function Register() {
    return (
        <Wrapper>
            <Navbar />
            <Container>
                <InnerContainer>
                    <Header><span role="img" aria-label="register">🎪</span>   회원가입</Header>
                    <RegisterForm />
                    <ToRegister>이미 회원이신가요? <Link to="/login">로그인</Link></ToRegister>
                </InnerContainer>
            </Container>
            <Footer usecase="register" />
        </Wrapper>
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
    font-size: 18px;
    color: ${Colors.deepGray};
    margin-top: 40px;
    margin-bottom: 20px;
    a{
        color:${Colors.grape};
    }
`