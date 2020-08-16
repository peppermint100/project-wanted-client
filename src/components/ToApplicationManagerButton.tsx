import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import Colors from "./../styles/colors"

interface Props {
    isShowing: boolean;
}

const ToApplicationManagerButton: React.FC<Props> = ({ isShowing }) => {
    const userId = window.localStorage.getItem("userId")
    return (
        <Container>
            <Link to={isShowing ? "/" : `/application/${userId}`}><span>📜</span></Link>
        </Container>
    )
}

const Container = styled.button`
   position: fixed;
   bottom: 5%;
   right: 5%; 
   width: 80px;
   height: 80px;
   border-radius: 50%;
   background-color: ${Colors.grape};
   text-align:center;
   font-size: 35px;
   z-index: 40;
`

export default ToApplicationManagerButton
