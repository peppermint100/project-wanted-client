import React from 'react'
import { Post, NewPostCreateButton, useModal, NewPostModal } from "."
import styled from "styled-components"

export default function Posts() {
    const { isShowing, toggle } = useModal()

    return (
        <Wrapper>
            <NewPostModal isShowing={isShowing} hide={toggle} />
            <PostsContainer>
                <NewPostCreateButton isShowing={isShowing} hide={toggle} />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </PostsContainer>
        </Wrapper>
    )
}


const Wrapper = styled.div`
width: 80%;
margin: 0 auto;
padding-bottom: 230px;

`

const PostsContainer = styled.main`
   display: grid; 
   grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); 
   grid-gap : 40px;
`

