import React from 'react'
import styled from "styled-components"
import { Navbar, CreatePostForm, CheckAuth, CustomButton, Footer } from "./../components"
import Colors from "./../styles/colors"


const buttonOptions = {
    width: "300px",
    height: "50px",
    content: "시작하기",
    backgroundColor: `${Colors.grape}`,
    fontSize: "24px",
    border: `2px solid ${Colors.grape}`,
    color: `#fff`,
}


function CreatePostPage() {
    return (
        <Wrapper>
            <CheckAuth />
            <Navbar />
            <Container>
                <InnerContainer>
                    <Header><span role="img" aria-label="register">🎪</span>   모집 공고 작성</Header>
                    <CreatePostForm />
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
    align-items: center;    
    width: 800px;
    min-height: 90vh;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`
const Header = styled.div`
   margin: 50px; 
   font-size: 32px;
   
`
export default CreatePostPage
