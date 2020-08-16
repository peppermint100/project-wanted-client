import React, { useEffect, useState } from 'react'
import { HelperText, DefaultContainer, SkillIcon, CustomButton } from "./../components"
import styled from "styled-components"
import { useParams, Redirect, useHistory } from "react-router-dom"
import axios from "axios"
import env from "./../env"
import { PostProps } from "./../types/post"
import Colors from "./../styles/colors"
import PositionIndicator from '../components/PositionIndicator'
import { formatDate } from "./../custom/format"

interface Props {

}

const PostDetailPage: React.FC<Props> = () => {
    const history = useHistory()
    const params = useParams<{ postId: string }>()
    const postId = params.postId
    const userId = window.localStorage.getItem("userId")!
    const [applicationErrorText, setApplicationErrorText] = useState<string>("")
    const toUpdatePage = () => { history.push("/update", { state: postDetails }) }
    const deletePost = async () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            await axios.post(`${env.ENDPOINT}/api/post/delete`, { postId })
            history.push("/")
        }
    }

    const apply = async () => {
        if (!window.confirm('이 프로젝트에 지원하시겠습니까?')) return;
        try {
            await axios.post(`${env.ENDPOINT}/api/application/apply`, { postId, userId })
            history.push('/', { message: "지원이 완료되었습니다!" })
        } catch (err) {
            if (err) setApplicationErrorText(err.response.data.message)
        }
    }

    const editButtonOptions = {
        content: "⚙ 수정",
        width: "100px",
        height: "50px",
        backgroundColor: `${Colors.allowGreen}`,
        color: "#fff",
        fontSize: "18px",
        fontWeight: "700",
        onClick: toUpdatePage
    }
    const deleteButtonOptions = {
        content: "✂ 삭제",
        width: "100px",
        height: "50px",
        backgroundColor: `${Colors.errorRed}`,
        color: "#fff",
        fontSize: "18px",
        fontWeight: "700",
        onClick: deletePost
    }
    const applyButtonOptions = {
        color: "#fff",
        width: "400px",
        height: "50px",
        backgroundColor: `${Colors.grape}`,
        fontSize: "18px",
        fontWeight: "700",
        content: "이 프로젝트에 지원하기",
        onClick: apply
    }
    const [postDetails, setPostDetails] = useState<PostProps>({
        postId: 0,
        title: "",
        content: "",
        devNeeded: 0,
        pmNeeded: 0,
        designNeeded: 0,
        devRecruited: 0,
        pmRecruited: 0,
        designRecruited: 0,
        isDone: false,
        wantedSkills: [],
        ownerId: 0,
        createdAt: ""
    })


    const getPostDetails = async () => {
        const res = await axios.get(`${env.ENDPOINT}/api/post/postdetail/${postId}`)
        setPostDetails(res.data.post)
    }


    useEffect(() => {
        getPostDetails()
    }, [])

    return (
        <DefaultContainer>
            <Container>
                <InnerContainer>
                    {postDetails ?
                        <>
                            <HeaderSection>
                                <Title>{postDetails.title}</Title>
                                <CreatedAt>{formatDate(postDetails.createdAt)}</CreatedAt>
                                {postDetails && postDetails.ownerId && postDetails.ownerId === parseInt(userId.toString()) ?
                                    <>
                                        <CustomButton {...editButtonOptions} />
                                        <CustomButton {...deleteButtonOptions} />
                                    </>
                                    : null
                                }
                                <WantedSkills>{postDetails.wantedSkills.map((skill, idx) => (<li key={idx}><SkillIcon name={skill} /></li>))}</WantedSkills>
                            </HeaderSection>
                            <Content>{postDetails.content}</Content>
                            <OpenningContainer>
                                <PositionSection>
                                    <PositionIndicator role="개발자" />
                                    <RecruitedInticator>{postDetails.devRecruited} / {postDetails.devNeeded} 명</RecruitedInticator>
                                </PositionSection>
                                <PositionSection>
                                    <PositionIndicator role="디자이너" />
                                    <RecruitedInticator>{postDetails.designRecruited} / {postDetails.designNeeded} 명</RecruitedInticator>
                                </PositionSection>
                                <PositionSection>
                                    <PositionIndicator role="기획자" />
                                    <RecruitedInticator>{postDetails.pmRecruited} / {postDetails.pmNeeded} 명</RecruitedInticator>
                                </PositionSection>
                            </OpenningContainer>
                            <HelperText text={applicationErrorText} fontSize={"18px"} />
                            <ButtonSection>
                                <CustomButton {...applyButtonOptions} />
                            </ButtonSection>
                        </>
                        : null
                    }
                </InnerContainer>
            </Container>
        </DefaultContainer>
    )
}

const Container = styled.main`
min-height: 80vh;
`

const InnerContainer = styled.div`
   width: 50%;
   margin:100px auto;
   margin-bottom: 100px; 
`

const Title = styled.p`
    font-weight: 700;
    font-size: 36px;
`

const Content = styled.div`
    font-size: 24px;
    min-height: 35vh;
`
const CreatedAt = styled.p`
    color: ${Colors.deepGray};
    font-weight: 700;
    font-size: 18px;
    line-height: 50px;
    margin-left: 30px;
`

const WantedSkills = styled.ul`
    display: flex;
    li{
        margin: 15px;
    }
`

const HeaderSection = styled.section`
    margin-bottom: 20px;
    p{
        display:inline;
    }
    button{
        display: inline;
        margin-left: 20px;
        transform: translateY(-5px);
    }
`

const OpenningContainer = styled.div`
    display:flex;
    div{
        margin-left: 8px;
    }
`

const RecruitedInticator = styled.div`
    color: ${Colors.deepGray};
`

const PositionSection = styled.section`
    display:flex;
`

const ButtonSection = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`

export default PostDetailPage
