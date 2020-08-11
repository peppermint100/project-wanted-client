import React from 'react'
import styled from "styled-components"
import Colors from "./../styles/colors"
import { Link } from "react-router-dom"
import { SkillIcon, OwnerById } from "."

interface Props {
    createdAt: string;
    title: string;
    ownerId: number;
    content: string;
    wantedSkills: string[]
    postId: number
}

const formatDate = (date: string) => date.substring(0, 10)
const formatContent = (content: string) => {
    if (content.length > 50) return content.substring(0, 51).concat("...")
    return content
}

const Post: React.FC<Props> = ({ postId, createdAt, title, ownerId, content, wantedSkills }) => {
    return (
        <Card>
            <CardContent>
                <div>
                    <Title>
                        <Link to={`/postdetail/${postId}`}>{title}</Link>
                    </Title>
                    <CreatedAt>
                        {formatDate(createdAt)}
                    </CreatedAt>
                </div>
                <Content>
                    {formatContent(content)}
                </Content>
                <br />
                <Owner><OwnerById ownerId={ownerId} /></Owner>
            </CardContent>
        </Card>
    )
}


const Card = styled.div`
    width: 300px;
    height: 200px;
    box-shadow: .5px .5px 2px ${Colors.deepGray};
`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    margin-left: 10px;
`
const CreatedAt = styled.p`
    color: ${Colors.deepGray};
    font-size: 15px;
`
const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    a{
        color: ${Colors.grape};
    }
`

const Content = styled.div`
    font-size: 18px;
`
const Owner = styled.p`
    font-size: 15px; 
    color: ${Colors.deepGray};
`

const WantedSkills = styled.div`
   display: flex; 
`



export default Post;
