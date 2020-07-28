import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { RootReducerType } from '../redux/reducers/rootReducers'
import styled from "styled-components"

export default function Modal() {
    const dispatch = useDispatch()
    const isModal = useSelector((state: RootReducerType) => (state.modalReducer))
    return (
        <Container>

        </Container>
    )
}

const Container = styled.main`
    
`