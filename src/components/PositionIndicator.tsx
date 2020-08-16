import React, { useState, useLayoutEffect } from 'react'
import styled from "styled-components"
import Colors from "./../styles/colors"

interface Props {
    role: string
}

const pmColor = "#2ecc71"
const devColor = `${Colors.deepBlue}`
const designColor = "#e67e22"

const PositionIndicator: React.FC<Props> = ({ role }) => {
    const [bgColor, setBgColor] = useState<string>(`${Colors.grape}`)

    useLayoutEffect(() => {
        switch (role) {
            case "개발자":
                setBgColor(devColor)
                return;
            case "디자이너":
                setBgColor(designColor)
                return;
            case "기획자":
                setBgColor(pmColor)
                return;
            default:
                return;
        }
    }, [])
    return (
        <Container bgColor={bgColor}>
            {role}
        </Container>
    )
}

interface StyledProps {
    bgColor: string;
}

const Container = styled.div<StyledProps>`
    display: inline-block;
    width: 70px;
    height: 30px;
    color: #fff;
    background-color: ${prop => prop.bgColor};    
    border-radius: 10px;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    margin-right: 10px;
`
export default PositionIndicator
