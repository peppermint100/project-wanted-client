import React from 'react'
import styled from "styled-components"
import { CustomButton } from "."
import Colors from "../styles/colors"
import { Link, useHistory } from 'react-router-dom'


const Navbar: React.FC = () => {
    const history = useHistory()
    const loginButtonOptions = {
        backgroundColor: "#fff",
        width: "120px",
        height: "45px",
        content: "로그인",
        fontSize: "20px",
        fontWeight: "300",
        color: `${Colors.deepGray}`,
        hoverColor: "#fff",
        onClick: () => { history.push("/login") }
    }

    const registerButtonOptions = {
        backgroundColor: `${Colors.grape}`,
        width: "120px",
        height: "45px",
        content: "회원가입",
        fontSize: "20px",
        hoverColor: `${Colors.lightGrape}`,
        onClick: () => { history.push("/register") }
    }
    return (
        <Container>
            <InnerContainer>
                <Logo><Link to="/"><span role="img" aria-label="logo">🔥</span></Link></Logo>
                <AuthSection>
                    <CustomButton {...loginButtonOptions} />
                    <CustomButton {...registerButtonOptions} />
                </AuthSection>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.nav`
    width:100%;
    height: 9vh;
    box-shadow: 0 0.5px 10px rgba(0, 0, 0, 0.15);
    `

const InnerContainer = styled.div`
    width: 80%;
    height:100%;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const Logo = styled.section`
    font-size: 45px;
    cursor: pointer;

    @media (max-width: 980px){
        font-size: 32px;
    }
`
const AuthSection = styled.section`
   display:flex; 
   button {
       margin-left:30px;
       @media (max-width: 980px){
           width: 80px;
           height: 35px;
           font-size: 18px;
       }
   }
`

export default Navbar;