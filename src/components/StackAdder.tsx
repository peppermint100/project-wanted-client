import React from 'react'
import { FieldArrayRenderProps, Field } from "formik"
import styled from 'styled-components'
import Colors from '../styles/colors';

interface Props {
    skills: string[]
    arrayHelpers: FieldArrayRenderProps
}

const StackAdder: React.FC<Props> = ({ skills, arrayHelpers }) => {
    return (
        <>
            <Container>
                {skills && skills.length > 0 ? (
                    skills.map((skills, index) => (
                        <div key={index}>
                            <Field name={`skills.${index}`} as={CustomInput} />
                            <CustomUpdateButton
                                type="button"
                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                            >
                                <span role="img" aria-label="delete">🛠</span>
                            </CustomUpdateButton>
                            <CustomUpdateButton
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                                <span role="img" aria-label="delete">✂</span>
                            </CustomUpdateButton>
                        </div>
                    ))
                ) : (
                        <CustomButton type="button" onClick={() => arrayHelpers.push('')}>
                            {/* show this when user has removed all friends from the list */}
                            기술 추가하기
                        </CustomButton>
                    )}
            </Container>
        </>
    )
}

export default StackAdder



const Container = styled.div`
    display:flex;
    flex-direction: column;
`
const CustomInput = styled.input`
    border :1.5px solid ${Colors.lightGray};
    border-radius: 5px;
    width: 300px; 
    height: 20px;
    padding: 10px;
    &::placeholder{
        font-size:18px;
        color: #a4b0be;
    }
    &:focus{
        border-color: ${Colors.midnightBlue};
    }
`

const CustomButton = styled.button`
    width: 400px;
    height: 40px;
    margin-left: 10px;
    background-color: ${Colors.grape};
    text-align: center;
    font-size: 18px;
    color: #fff;
    border-radius: 3px;
    cursor:pointer;
    &:hover{
        transition: opacity .2 ease;
        opacity: .8;
    }
`

const CustomUpdateButton = styled(CustomButton)`
    width: 40px;
    height: 40px;
    margin-left:5px;
`