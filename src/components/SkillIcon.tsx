import React from 'react'
import styled from "styled-components"
import Colors from "./../styles/colors"

interface Props {
    name: string
}


const SkillIcon: React.FC<Props> = ({ name }) => {
    return (
        <Container>
            #{name}
        </Container>
    )
}

const Container = styled.div`
    background-color: #dfe6e9;
    color: #2d3436; 
    line-height: 40px;
    min-width: max-content;
    width: 110px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: .7vw;
    border-radius: 20px;
`

export default SkillIcon
