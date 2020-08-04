import React from 'react'
import styled, { css } from "styled-components"
import Colors from "./../styles/colors"
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface Props {
    usecase?: string
}

const Footer: React.FC<Props> = ({ usecase }) => {
    return (
        <Container usecase={usecase}>
            <InnerContainer>
                <IconSection>
                    <a href="https://github.com/peppermint100" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x" color="#fff" /></a>
                    <a href="https://medium.com/@krpeppermint100" target="_blank"><FontAwesomeIcon icon={faMedium} size="3x" color="#fff" /></a>
                    <span><FontAwesomeIcon icon={faEnvelope} size="3x" color="#fff" /></span>
                </IconSection>
                <TextSection>
                    <Text>This web site is designed and developed by peppermint100</Text>
                </TextSection>
            </InnerContainer>
        </Container>
    )
}

interface styledProps {
    usecase?: string
}

const Container = styled.footer<styledProps>`
    width:100%;
    height: 200px;
    box-shadow: .5px 0 5px ${Colors.grape};
    position: absolute;
    bottom: 0;
    background-color: ${Colors.grape};

    ${props => props.usecase === "register" ?
        css`
            position: static;
        `
        : null
    }
`
const InnerContainer = styled.div`
    width: 50%;
    margin: 0 auto; 
    position: relative;
    top: 30%; 
`
const IconSection = styled.section`
    display:flex;
    justify-content: center;
    a{
        margin-left: 30px;
    }
    span{
        margin-left: 30px;
    }
`
const TextSection = styled.section`
     display:flex;
    justify-content: center;
    margin-top: 10px;
@media (max-width: 980px){
    margin-top: 5px;
    }
`
const Text = styled.p`
    color: #fff;
    font-size: 18px;
    @media (max-width: 980px){
        font-size: 12px;
    }
`


export default Footer