import React, { useEffect } from 'react'
import styled from "styled-components"
import { CustomButton } from "."
import Colors from "../styles/colors"
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { RootReducerType } from '../redux/reducers/rootReducers'
import { clearUserInfo } from '../redux/actions/authActions'

const Navbar: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userInfo = useSelector((state: RootReducerType) => state.authReducer);

    const handleLogout = () => {
        window.localStorage.clear();
        dispatch(clearUserInfo())
        history.push("/login")
    }
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

    const logoutButtonOptions = {
        backgroundColor: `${Colors.grape}`,
        width: "120px",
        height: "45px",
        content: "로그아웃",
        fontSize: "20px",
        hoverColor: `${Colors.lightGrape}`,
        onClick: () => { handleLogout() }
    }


    useEffect(() => {
    }, [userInfo])
    return (
        <Container>
            <InnerContainer>
                <Logo><Link to="/"><span role="img" aria-label="logo">🔥</span></Link></Logo>
                <AuthSection>
                    {userInfo.authenticated ?
                        <>
                            <UserNameSection>안녕하세요? <p>{userInfo.username}</p> 님</UserNameSection>
                            {/* <LogoutSection onClick={handleLogout}>로그아웃</LogoutSection> */}
                            <CustomButton {...logoutButtonOptions} />
                        </> :
                        <>
                            <CustomButton {...loginButtonOptions} />
                            <CustomButton {...registerButtonOptions} />
                        </>
                    }
                </AuthSection>
            </InnerContainer>
        </Container >
    )
}

const UserNameSection = styled.section`
    font-size: 20px;
    color: ${Colors.deepGray};
    align-self: center;
    p{
        color: #000;
        display:inline;
        text-transform: uppercase;
        font-weight: 700;
        &:hover{
            opacity: .8;
            cursor:pointer;
        }
    }
`

const Container = styled.nav`
    width:100%;
    height: 100px;
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
   section{
       margin-left:30px;
   }
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