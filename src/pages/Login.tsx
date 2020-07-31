import React, { useState, useEffect } from 'react'
import { Navbar, LoginForm, Footer, HelperText } from '../components'
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'
import Colors from "../styles/colors"

export default function Login() {

    const location: { state: { successMessage: string } } = useLocation()
    const [successMessageText, setSuccessMessageText] = useState<string>("")
    useEffect(() => {
        if (location && location.state) {
            setSuccessMessageText(location.state.successMessage)
        }

    }, [location.state])

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <InnerContainer>
                    <Header><span role="img" aria-label="loginrainbow">🌈</span>   로그인</Header>
                    <LoginForm />
                    <ToLogin>아직 회원이 아니신가요? <Link to="/register">회원가입</Link></ToLogin>
                    <HelperText text={successMessageText} />
                </InnerContainer>
            </Container>
            <Footer />
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
width:100%;
height: 80vh;
padding-bottom: 200px;
margin-top: 50px;
`

const InnerContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;    
    width: 500px;
    height: 500px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`
const Header = styled.div`
   margin: 50px; 
   font-size: 32px;

`
const ToLogin = styled.p`
    font-size: 18px;
    color: ${Colors.deepGray};
    margin-top: 40px;
    a{
        color:${Colors.grape};
    }
`