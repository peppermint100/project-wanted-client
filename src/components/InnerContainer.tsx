import React from "react"
import styled from "styled-components"



const InnerContainer = ({ children }: { children: any }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    paddingBottom:200px;
`

export default InnerContainer