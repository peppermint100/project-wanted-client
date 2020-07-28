import React from 'react';
import { Formik, Field, FieldArray, FieldArrayRenderProps } from "formik"
import styled, { keyframes } from 'styled-components';
import Colors from '../styles/colors';
import axios from "axios"
import env from "./../env"
import { Radio, FormLabel, RadioGroup, FormControlLabel, makeStyles, RadioProps } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { StackAdder } from '.'

const useStyles = makeStyles({
    label: {
        color: `${Colors.midnightBlue}`,
        marginBottom: "5px",
        fontSize: "15px",
    },
})

const CustomRadio = withStyles({
    root: {
        color: `${Colors.grape}`,
        '&$checked': {
            color: `${Colors.lightGrape}`,
        },
    },
    checked: {},
})((props: RadioProps) => <Radio {...props} />);

interface valuesType {
    email: string
    password: string
    confirmPassword: string
    role: string
    skills: string[]
    description: string
    skill: string
}

function RegisterForm() {
    const classes = useStyles()

    return (
        <>
            <Formik initialValues={{ username: "", email: "", password: "", confirmPassword: "", role: "", skills: [], description: "", skill: "" }} onSubmit={async (data, { setSubmitting }) => {
                setSubmitting(true)
                console.log(data)
                const { email, password, confirmPassword, role, skills, description } = data;
                // const res = await axios.post(`${env.ENDPOINT}/api/auth/signup`, { email, password })
                setSubmitting(false)
            }}>
                {
                    ({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <FormInner>
                                <Label>유저이름</Label>
                                <CustomInput type="text" name="username" value={values.username} onChange={handleChange} />
                            </FormInner>
                            <FormInner>
                                <Label>이메일</Label>
                                <CustomInput type="email" name="email" value={values.email} onChange={handleChange} />
                            </FormInner>
                            <FormInner>
                                <Label>비밀번호</Label>
                                <CustomInput type="password" name="password" value={values.password} onChange={handleChange} />
                            </FormInner>
                            <FormInner>
                                <Label>비밀번호 확인</Label>
                                <CustomInput type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                            </FormInner>
                            <RoleForm>
                                <FormLabel className={classes.label} component="legend">포지션</FormLabel>
                                <RadioGroup defaultValue="developer" aria-label="role" name="role">
                                    <FormControlLabel value="developer" control={<CustomRadio name="role" onChange={handleChange} />} label="개발자" />
                                    <FormControlLabel value="designer" control={<CustomRadio name="role" onChange={handleChange} />} label="디자이너" />
                                    <FormControlLabel value="projectmanager" control={<CustomRadio name="role" onChange={handleChange} />} label="프로젝트 매니저" />
                                </RadioGroup>
                            </RoleForm>
                            <RoleForm>
                                <Label>기술 스택</Label>
                                <FieldArray
                                    name="skills"
                                    render={arrayHelpers => (
                                        <StackAdder skills={values.skills} arrayHelpers={arrayHelpers} />
                                    )}
                                />
                            </RoleForm>
                            <FormInner>
                                <Label>본인 소개</Label>
                                <CustomInputTextArea name="description" value={values.description} onChange={handleChange} />
                            </FormInner>
                            <CustomButton type="submit" disabled={isSubmitting}>회원가입</CustomButton>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}

const shake = keyframes`
    0%{
        transform: translateY(-50%);
    }
    100%{
        transform: translateY(50%);
    }
`

const Label = styled.label`
    font-size: 15px;
    // color: ${Colors.midnightBlue};
    color: #000;
    display: block;
    font-weight: 700;
    margin-bottom: 8px;
    &:focus{
       color:#fff; 
    }
`

const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`

const FormInner = styled.div`
       margin-bottom: 40px; 
`

const RoleForm = styled.div`
    align-self: flex-start;
    margin-bottom:20px;
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
        border-color: ${Colors.midnightBlue};
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
    cursor:pointer;
    &:hover{
        transition: opacity .2 ease;
        opacity: .8;
    }
`

const CustomStackButton = styled(CustomButton)`
    width: 70px;
    height: 45px;
    margin-left: 30px;
    line-height:45px;
    
`

const CustomInputTextArea = styled.textarea`
    all:unset;
    border :1.5px solid ${Colors.lightGray};
    border-radius: 5px;
    width: 400px; 
    height: 80px;
    padding: 10px;
    &::placeholder{
        font-size:18px;
        color: #a4b0be;
    }
    &:focus{
        border-color: #000;
    }
`

export default RegisterForm;