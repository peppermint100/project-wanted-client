import React, { useState } from 'react';
import { Formik } from "formik"
import styled from 'styled-components';
import Colors from '../styles/colors';
import axios from "axios"
import env from "./../env"
import { useHistory } from "react-router-dom"
import { HelperText } from "."

function LoginForm() {
    const history = useHistory()
    const [loginHelperText, setLoginHelperText] = useState<string>("")

    return (
        <>
            <Formik initialValues={{ email: "", password: "" }} onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true)
                const { email, password } = data
                axios.post(`${env.ENDPOINT}/api/auth/login`, { email, password })
                    .then(res => {
                        const { token, user: { userId, username, email, role, skills } } = res.data
                        window.localStorage.setItem("userId", userId)
                        window.localStorage.setItem("username", username)
                        window.localStorage.setItem("token", token)
                        window.localStorage.setItem("email", email)
                        window.localStorage.setItem("role", role)
                        window.localStorage.setItem("skills", skills)
                        history.push('/')
                    }).catch(err => {
                        if (err) {
                            setLoginHelperText(err.response.data.err)
                        }
                    })
                setSubmitting(false)
            }}>
                {
                    ({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <Label>이메일</Label>
                                <CustomInput type="email" name="email" value={values.email} onChange={handleChange} />
                            </div>
                            <div>
                                <Label>비밀번호</Label>
                                <CustomInput type="password" name="password" value={values.password} onChange={handleChange} />
                                <HelperText text={loginHelperText} />
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
    &:focus{
        border-color: ${Colors.grape};
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