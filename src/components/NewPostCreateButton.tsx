import React from 'react'
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Colors from '../styles/colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const useStyles = makeStyles({
    root: {
        minWidth: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    }
});

interface Props {
    isShowing: boolean
    hide: () => void
}

const NewPostCreateButton: React.FC<Props> = ({ isShowing, hide }) => {
    const classes = useStyles()


    return (
        <Card className={classes.root}>
            <DottedCircle onClick={hide} disabled={isShowing} >
                <div>
                    <FontAwesomeIcon icon={faPlus} style={{ color: Colors.deepGray }} size="2x" />
                </div>
            </DottedCircle>
        </Card>
    )
}
const Container = styled.div`

`



const DottedCircle = styled.button`
    all: unset;
    cursor: pointer;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px dashed ${Colors.silver};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        opacity: .7;
    }
    
`

export default NewPostCreateButton

