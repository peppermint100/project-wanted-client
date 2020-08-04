import React, { useEffect, useRef } from 'react'
import MainImage from "./../imgs/main.png"
import styled from 'styled-components'


export default function Jumbotron() {
    const textElement = useRef<HTMLElement>(null)

    useEffect(() => {
        const { current } = textElement
        if (current !== null) {
            current.style.transition = "all 0.6s ease-in-out"
            current.style.opacity = "1";
            current.style.transform = "translateY(0)";
        }
    }, [textElement])

    return (
        <>
            <Container>
                <TextSection ref={textElement}>
                    <MainParagraph>함께 하는</MainParagraph>
                    <SecondaryParagraph>사이드 프로젝트</SecondaryParagraph>
                </TextSection>
                <ImageSection>
                    <Image src={MainImage} alt="mainimage" />
                </ImageSection>
            </Container>
        </>
    )
}

const Image = styled.img`
    
    @media (max-width: 980px){
       width: 350px; 
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 980px){
        flex-direction: column;
    }
`

const TextSection = styled.section`
    opacity: 0;
    transform: translateY(-50%); 
    @media (max-width: 500px){
        p{
            font-size: 24px;
        }
    }
    @media (max-width: 980px){
        margin-top: 50px;
        p{
            font-size: 38px;
        }
    }
`

const ImageSection = styled.section`
    margin-top: 60px;
`

const MainParagraph = styled.p`
    font-size: 52px;
`

const SecondaryParagraph = styled.p`
    font-size: 52px;
    margin-top: 10px;
`

