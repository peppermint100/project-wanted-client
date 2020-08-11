import React, { useState, useEffect } from 'react';
import { Formik, FieldArray } from "formik"
import styled from 'styled-components';
import Colors from '../styles/colors';
import axios from "axios"
import { Radio, makeStyles, RadioProps, FormHelperText } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { StackAdder, HelperText } from '.'
import env from "./../env"
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
import { RootReducerType } from '../redux/reducers/rootReducers';

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

interface FormValues {
    username: string;
    email: string;
    role: string;
    skills: never[];
    description: string;
}

function CreatePostForm() {
    const classes = useStyles()
    const history = useHistory()
    const currentUser = useSelector((state: RootReducerType) => state.authReducer)

    const [initialFormValues, setInitialFormValues] = useState<FormValues>({
        username: "",
        email: "",
        role: "",
        skills: [],
        description: ""
    })

    const [usernameHelperText, setUsernameHelperText] = useState<string>("")
    const [skillsHelperText, setSkillsHelperText] = useState<string>("")
    const [descriptionHelperText, setDescriptionHelperText] = useState<string>("")
    const [blankHelperText, setBlankHelperText] = useState<string>("")

    const getUserInfo = async () => {
        axios.post(`${env.ENDPOINT}/api/user/getuserinfo`, { userId: JSON.parse(window.localStorage.userId) })
            .then(res => {
                const { username, email, role, skills, description } = res.data
                setInitialFormValues({ username, email, role, skills, description })
            })
    }

    useEffect(() => {
        getUserInfo();
    }, [currentUser])

    return (
        <>
            <Formik initialValues={{ title: "", content: "", skills: [], devNeeded: 0, pmNeeded: 0, designNeeded: 0 }}
                onSubmit={async (data, { setSubmitting }) => {
                    setSubmitting(true)
                    const { title, content, skills, devNeeded, pmNeeded, designNeeded } = data;
                    console.log(devNeeded, designNeeded)
                    if (!title || !content || skills.length === 0) {
                        setBlankHelperText("빈 양식란이 없어야 합니다.")
                        return;
                    } else {
                        setBlankHelperText("")
                    }

                    if (currentUser) {
                        history.push("/")
                    }
                    if (usernameHelperText || skillsHelperText || descriptionHelperText || blankHelperText) {
                        return;
                    }

                    await axios.post(`${env.ENDPOINT}/api/post/create`, { title, content, wantedSkills: skills, devNeeded, pmNeeded, designNeeded, owner: currentUser.username })
                    setSubmitting(false)

                }} validate={values => {
                    const checkUsernameRegExp = new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi);
                    if (checkUsernameRegExp.test(values.title)) {
                        setUsernameHelperText("제목에 특수문자가 포함 될 수 없습니다.")
                    } else {
                        setUsernameHelperText("")
                    }

                    if (values.skills.length >= 6) {
                        setSkillsHelperText("더 이상 기술을 추가할 수 없습니다.")
                        values.skills.pop()
                    } else {
                        setSkillsHelperText("")
                    }

                    if (values.content.length >= 300) {
                        setDescriptionHelperText("상세 설명은 300자 이하로 적어주세요.")
                    } else {
                        setDescriptionHelperText("")
                    }
                }
                }>
                {
                    ({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <FormInner>
                                <Label>제목</Label>
                                <CustomInput type="text" name="title" value={values.title} onChange={handleChange} />
                                <HelperText text={usernameHelperText} />
                            </FormInner>
                            <FormInner>
                                <Label>모집 인원</Label>
                                <NumberInputs>
                                    <div>
                                        <RecruitingLabel>개발자</RecruitingLabel>
                                        <CustomNumberInput type="number" min="0" max="9" name="devNeeded" value={values.devNeeded} onChange={handleChange} />
                                        <RecruitingLabel>명</RecruitingLabel>
                                    </div>
                                    <div>
                                        <RecruitingLabel>디자이너</RecruitingLabel>
                                        <CustomNumberInput type="number" min="0" max="9" name="designNeeded" value={values.designNeeded} onChange={handleChange} />
                                        <RecruitingLabel>명</RecruitingLabel>
                                    </div>

                                    <div>
                                        <RecruitingLabel>기획자</RecruitingLabel>
                                        <CustomNumberInput type="number" min="0" max="9" name="pmNeeded" value={values.pmNeeded} onChange={handleChange} />
                                        <RecruitingLabel>명</RecruitingLabel>
                                    </div>
                                </NumberInputs>
                            </FormInner>
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
                                <Label>상세 설명</Label>
                                <CustomInputTextArea name="content" value={values.content} onChange={handleChange} />
                                <HelperText text={descriptionHelperText} />
                                <HelperText text={blankHelperText} />
                            </FormInner>
                            <CustomButton type="submit" disabled={isSubmitting}>작성</CustomButton>
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
    margin-bottom: 8px;
`

const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`

const FormInner = styled.div`
       margin-bottom: 60px; 
`

const RoleForm = styled.div`
    margin-bottom:60px;
    width: 430px;
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
    margin-bottom: 50px;
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
const NumberInputs = styled.div`
    display:flex;
    justify-content: space-between;
    width: 420px;
    div{
    display:flex;
    }
`
const CustomNumberInput = styled(CustomInput)`
    width: 24px;
    height: 8px;
`

const RecruitingLabel = styled(Label)`
    font-size: 12px;
    margin: 8px;
`

export default CreatePostForm;