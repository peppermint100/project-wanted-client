import React from 'react'
import styled from "styled-components"
import Colors from '../styles/colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useHistory } from "react-router-dom"

interface Props {
    isShowing: boolean
}

const NewPostCreateButton: React.FC<Props> = ({ isShowing }) => {

    const history = useHistory()
    return (
        <Card>
            <DottedCircle onClick={() => { history.push("/create") }} disabled={isShowing} >
                <div>
                    <FontAwesomeIcon icon={faPlus} style={{ color: Colors.deepGray }} size="2x" />
                </div>
            </DottedCircle>
        </Card>
    )
}
const Container = styled.div`

`
const Card = styled.div`
    width: 300px;
    height: 200px;
    box-shadow: .5px .5px 2px ${Colors.deepGray};
    display:flex;
    justify-content: center;
    align-items: center;
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

