import React, { useEffect } from 'react'
import { FormHelperText } from "@material-ui/core"
import styled from "styled-components"

interface Props {
    text: string
}

const HelperText: React.FC<Props> = ({ text }) => {

    useEffect(() => { }, [text])

    return (
        <Container>
            {text && text !== "" ?
                (<FormHelperText>{text}</FormHelperText>)
                : null}
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
`
export default HelperText
