import React from 'react'
import styled from "styled-components"
import Colors from "./../styles/colors"


const Post = () => {
    return (
        <Card>
            <CardContent>
                <CreatedAt>
                    2020-07-24
                    </CreatedAt>
                <Title>
                    제목
                    </Title>
                <Owner>
                    작성자
                    </Owner>
                <Content>
                    내용
                </Content>
                <br />
                <WantedSkills>

                </WantedSkills>
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
    margin: 10px;
`
const CreatedAt = styled.p`
    color: ${Colors.deepGray};
    font-size: 15px;
`
const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
`
const Content = styled.div`
    font-size: 18px;
`
const Owner = styled.p`
    font-size: 15px; 
    color: ${Colors.deepGray};
`

const WantedSkills = styled.div`
    
`



export default Post;
