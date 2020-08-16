import React, { useEffect } from 'react'
import { FormHelperText, makeStyles } from "@material-ui/core"
import styled, { css } from "styled-components"

interface Props {
    text: string
    fontSize?: string
}

const HelperText: React.FC<Props> = ({ text, fontSize }) => {

    useEffect(() => { }, [text])

    const useStyle = makeStyles({
        text: {
            fontSize
        }
    })

    const classes = useStyle();

    return (
        <Container>
            {text && text !== "" ?
                (<FormHelperText className={classes.text}>{text}</FormHelperText>)
                : null}
        </Container>
    )
}



const Container = styled.div`
    position: absolute;
`
export default HelperText
