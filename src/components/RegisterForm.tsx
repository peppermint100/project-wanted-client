import React, { useState } from 'react';
import { Formik, FieldArray } from "formik"
import styled, { keyframes } from 'styled-components';
import Colors from '../styles/colors';
import axios from "axios"
import { Radio, FormLabel, RadioGroup, FormControlLabel, makeStyles, RadioProps, FormHelperText } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { StackAdder, HelperText } from '.'
import env from "./../env"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    label: {
        color: `${Colors.midnightBlue}`,
        marginBottom: "5px",
        fontSize: "15px",
        fontWeight: 700,
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


function RegisterForm() {
    const classes = useStyles()

    const history = useHistory()

    const [usernameHelperText, setUsernameHelperText] = useState<string>("")
    const [skillsHelperText, setSkillsHelperText] = useState<string>("")
    const [descriptionHelperText, setDescriptionHelperText] = useState<string>("")
    const [blankHelperText, setBlankHelperText] = useState<string>("")

    return (
        <>
            <Formik initialValues={{ username: "", email: "", password: "", confirmPassword: "", role: "", skills: [], description: "" }} onSubmit={async (data, { setSubmitting }) => {
                setSubmitting(true)

                const { username, email, password, confirmPassword, role, skills, description } = data;
                if (!username || !email || !password || !confirmPassword || !role || skills.length === 0 || !description) {
                    setBlankHelperText("빈 양식란이 없어야 합니다.")
                    return;
                } else {
                    setBlankHelperText("")
                }
                if (usernameHelperText || skillsHelperText || descriptionHelperText || blankHelperText) {
                    return;
                }
                console.log(data)
                axios.post(`${env.ENDPOINT}/api/auth/signup`, { username, email, password, confirmPassword, role, skills, description })
                    .then(res => {
                        if (res && res.data.status !== 200) {
                            setBlankHelperText(res.data.message.toString())
                            return;
                        }
                        history.push("/login", { successMessage: "이제 로그인이 가능합니다." })
                    })

                setSubmitting(false)
            }} validate={values => {
                const checkUsernameRegExp = new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi);
                if (checkUsernameRegExp.test(values.username)) {
                    setUsernameHelperText("유저 이름에 특수문자가 포함 될 수 없습니다.")
                } else {
                    setUsernameHelperText("")
                }

                if (values.skills.length >= 6) {
                    setSkillsHelperText("더 이상 기술을 추가할 수 없습니다.")
                    values.skills.pop()
                } else {
                    setSkillsHelperText("")
                }

                if (values.description.length >= 100) {
                    setDescriptionHelperText("본인 소개는 100자 이하로 적어주세요.")
                } else {
                    setDescriptionHelperText("")
                }
            }}>
                {
                    ({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <FormInner>
                                <Label>유저 이름</Label>
                                <CustomInput type="text" name="username" value={values.username} onChange={handleChange} />
                                <HelperText text={usernameHelperText} />
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
                                    <FormControlLabel value="projectmanager" control={<CustomRadio name="role" onChange={handleChange} />} label="기획자" />
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
                                <HelperText text={skillsHelperText} />
                            </RoleForm>
                            <FormInner>
                                <Label>본인 소개</Label>
                                <CustomInputTextArea name="description" value={values.description} onChange={handleChange} />
                                <HelperText text={descriptionHelperText} />
                                <HelperText text={blankHelperText} />
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
    color: ${Colors.deepGray};
    // color: #000;
    display: block;
    margin-bottom: 8px;
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
    cursor:pointer;
    &:hover{
        transition: opacity .2 ease;
        opacity: .8;
    }
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