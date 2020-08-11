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
    padding-bottom: 100px;
`

export default InnerContainer