import React, { useState, useEffect } from 'react'
import { Post, NewPostCreateButton, useModal, NewPostModal } from "."
import styled from "styled-components"
import axios from "axios"
import env from "./../env"
import { PostProps } from '../types/post'
import { useHistory } from "react-router-dom"

export default function Posts() {
    const { isShowing, toggle } = useModal()
    const [posts, setPosts] = useState<Array<PostProps>>([])
    const history = useHistory()

    const getAllPosts = async () => {
        const res = await axios.get(`${env.ENDPOINT}/api/post/allposts`)
        console.log(res.data.posts)
        setPosts(res.data.posts)
    }

    useEffect(() => {
        getAllPosts()
    }, [history.location.state])

    return (
        <Wrapper>
            <NewPostModal isShowing={isShowing} hide={toggle} />
            <PostsContainer>
                <NewPostCreateButton isShowing={isShowing} />
                {posts.length > 0 ?
                    <>
                        {
                            posts.map(post => (
                                <li key={post.postId}>
                                    <Post
                                        postId={post.postId}
                                        createdAt={post.createdAt}
                                        title={post.title}
                                        ownerId={post.ownerId}
                                        content={post.content}
                                        wantedSkills={post.wantedSkills}
                                        devNeeded={post.devNeeded}
                                        designNeeded={post.designNeeded}
                                        pmNeeded={post.pmNeeded}
                                    />
                                </li>
                            ))
                        }
                    </>
                    : null}
            </PostsContainer>
        </Wrapper>
    )
}


const Wrapper = styled.div`
width: 80%;
margin: 0 auto;
padding-bottom: 230px;

`

const PostsContainer = styled.ul`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
   grid-gap : 40px;
`

