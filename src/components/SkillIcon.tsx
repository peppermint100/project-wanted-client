import React from 'react'
import styled from "styled-components"
import Colors from "./../styles/colors"

interface Props {
    name: string
}
const SkillIcon: React.FC<Props> = ({ name }) => {
    return (
        <Container>
            {name}
        </Container>
    )
}

const Container = styled.div`
    background-image: linear-gradient(${Colors.grape}, ${Colors.lightGrape});
    line-height: 40px;
    width: 100px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: .8vw;
    border-radius: 10px;
`

export default SkillIcon
