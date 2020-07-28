import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Colors from '../styles/colors'

interface Props {
    color?: string;
    width?: string;
    height?: string;
    content?: string;
    backgroundColor?: string;
    hoverColor?: string;
    fontSize?: string;
    fontWeight?: string;
    border?: string;
    hoverFontColor?: string;
    onClick?: () => void;
}

export default function CustomButton({ hoverFontColor, border, fontWeight, backgroundColor, color, width, height, content, fontSize, hoverColor, onClick, ...rest }: Props): ReactElement {
    return (
        <Button hoverFontColor={hoverFontColor} border={border} fontWeight={fontWeight} onClick={onClick} width={width} height={height} color={color} backgroundColor={backgroundColor} fontSize={fontSize} hoverColor={hoverColor}>{content}</Button>
    )
}

interface StyledProps {
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    hoverColor?: string;
    fontSize?: string;
    fontWeight?: string;
    border?: string;
    hoverFontColor?: string;
}

const Button = styled.button<StyledProps>`
    all:unset;
    fontWeight: ${props => props.fontWeight ? `${props.fontWeight}` : 500};
    width:${props => props.width ? `${props.width}` : "100%"};
    height:${props => props.height ? `${props.height}` : "100%"};
    background-color:${props => props.backgroundColor ? `${props.backgroundColor}` : `${Colors.mainBlue}`};
    color:${props => props.color ? `${props.color}` : "#fff"};
    border-radius:5px;
    text-align:center;
    font-size : ${props => props.fontSize ? `${props.fontSize}` : "18px"};
    letter-spacing : 1px;
    cursor:pointer;
    &:hover{
        transition : all 0.2s ease-in-out;
        // box-shadow: 0 1px 3px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        // background-color:${props => props.hoverColor ? `${props.hoverColor}` : `${Colors.deepBlue}`}}
        // color: ${props => props.hoverFontColor ? `${props.hoverFontColor}` : `${props.color}`};
        opacity: .8;
    }
`