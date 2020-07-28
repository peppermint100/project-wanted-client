import React from 'react';
import { Formik } from "formik"
import styled from 'styled-components';
import Colors from '../styles/colors';

function LoginForm() {
    return (
        <>
            <Formik initialValues={{ email: "", password: "" }} onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true)
                console.log(data)
                setSubmitting(false)
            }}>
                {
                    ({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <Label>이메일</Label>
                                <CustomInput type="email" name="email" value={values.email} onChange={handleChange} />
                            </div>
                            <div>
                                <Label>비밀번호</Label>
                                <CustomInput type="password" name="password" value={values.password} onChange={handleChange} />
                            </div>
                            <CustomButton type="submit" disabled={isSubmitting}>로그인</CustomButton>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}
const Label = styled.label`
    font-size: 15px;
    color: ${Colors.deepGray};
    display: block;
    margin-bottom: 4px;
`

const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    div{
       margin-bottom: 40px; 
    }
`

const CustomInput = styled.input`
    border :1.5px solid ${Colors.lightGray};
    border-radius: 5px;
    width: 400px; 
    height: 20px;
    padding: 10px;
    &::placeholder{
        font-size:18px;
        color: #a4b0be;
    }
`

const CustomButton = styled.button`
    width: 400px;
    height: 50px;
    background-color: ${Colors.grape};
    text-align: center;
    font-size: 18px;
    color: #fff;
    border-radius: 5px;
`
export default LoginForm;