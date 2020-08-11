import React, { useEffect, useState } from 'react'
import { DefaultContainer, SkillIcon, CustomButton } from "./../components"
import styled from "styled-components"
import { useParams, Redirect, useHistory } from "react-router-dom"
import axios from "axios"
import env from "./../env"
import { PostProps } from "./../types/post"
import Colors from "./../styles/colors"

interface Props {

}

const PostDetailPage: React.FC<Props> = () => {
    const history = useHistory()
    const params = useParams<{ postId: string }>()
    const postId = params.postId
    const userId = window.localStorage.getItem("userId")!
    const toUpdatePage = () => { history.push("/update", { state: postDetails }) }
    const deletePost = async () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            await axios.post(`${env.ENDPOINT}/api/post/delete`, { postId })
            history.push("/")
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
        width: "100px",
        height: "50px",
        backgroundColor: `${Colors.grape}`,
        fontSize: "18px",
        fontWeight: "700",
        content: "☎ 지원",
        onClick: () => { console.log("applicating!") }
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
        applications: "",
        createdAt: ""
    })

    const formatDate = (date: string) => date.substring(0, 10)

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
                                {postDetails && postDetails.ownerId === parseInt(userId) ?
                                    <>
                                        <CustomButton {...editButtonOptions} />
                                        <CustomButton {...deleteButtonOptions} />
                                    </>
                                    : null
                                }
                                <CustomButton {...applyButtonOptions} />
                            </HeaderSection>
                            <Content>{postDetails.content}</Content>
                            <CreatedAt>{formatDate(postDetails.createdAt)}</CreatedAt>
                            <WantedSkills>{postDetails.wantedSkills.map((skill, idx) => (<li key={idx}><SkillIcon name={skill} /></li>))}</WantedSkills>

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
   width: 60%;
   margin:100px auto;
   margin-bottom: 0; 
`

const Title = styled.p`
    font-weight: 700;
    font-size: 48px;
`

const Content = styled.div`
    font-size: 24px;
    min-height: 40vh;

`
const CreatedAt = styled.p`
    color: ${Colors.deepGray};
    font-weight: 700;
    font-size: 18px;
`

const WantedSkills = styled.ul`
    display: flex;
    li{
        margin: 15px;
    }
`

const HeaderSection = styled.section`
    margin-bottom: 20px;
    p, button{
        display: inline;
        margin-left: 10px;
        transform: translateY(-5px);
    }
  
`
export default PostDetailPage
