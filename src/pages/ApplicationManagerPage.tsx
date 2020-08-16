import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { DefaultContainer, SkillIcon, CustomButton, MyPostsHandler } from "./../components"
import { PostProps } from '../types/post'
import axios from "axios"
import env from "./../env"
import styled from 'styled-components'
import Colors from "./../styles/colors"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { MyApplication } from '../types/application'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    head: {
        backgroundColor: `${Colors.grape}`,
    },
    headText: {
        color: "#fff",
        fontWeight: 700
    },
    title: {
        minWidth: 250,
    },
    skills: {
        minWidth: 800,
    },
    isAccpeted: {
        minWidth: 200,
    }
});

interface Props {

}

// fetch my post and related applications

// fetch applications that has my userid

const ApplicationManagerPage: React.FC<Props> = () => {
    const classes = useStyles();

    const { userId } = useParams()
    const [myPosts, setMyPosts] = useState<PostProps[]>([])
    const [myApplications, setMyApplications] = useState<MyApplication[]>([])

    const getMyPosts = async () => {
        const res = await axios.post(`${env.ENDPOINT}/api/post/getmypostswithapps`, { userId })
        setMyPosts(res.data.posts)
    }

    const getMyApplications = async () => {
        try {
            const res = await axios.post(`${env.ENDPOINT}/api/application/getappsbyuser`, { userId })
            setMyApplications(res.data.applications)
        } catch (err) {
            if (err) {
                console.log(err.response.data.message)
            }
        }
    }

    useEffect(() => {
        getMyPosts()
        getMyApplications()
    }, [])

    return (
        <DefaultContainer>
            <InnerContainer>
                <MyPosts>
                    <Header>내 공고</Header>
                    {myPosts.length > 0 ? <MyPostsHandler posts={myPosts} /> : null}
                </MyPosts>
                <MyApplications>
                    <Header>내 지원서</Header>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.head}>
                                <TableRow>
                                    <TableCell className={clsx(classes.title, classes.headText)}>공고 제목</TableCell>
                                    <TableCell className={clsx(classes.skills, classes.headText)} align="left">필요 기술</TableCell>
                                    <TableCell className={clsx(classes.isAccpeted, classes.headText)} align="left">합격 여부</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {myApplications.map((app: any) => (
                                    <TableRow key={app.applicationId}>
                                        <TableCell component="th" scope="row">
                                            <Link to={`/postdetail/${app.post.postId}`}>{app.post.title}</Link>
                                        </TableCell>
                                        <TableCell align="left">
                                            <ul style={{ display: "flex" }}>
                                                {app.post.wantedSkills.map((skill: string, idx: any) =>
                                                    <li style={{ margin: "10px" }} key={idx}>
                                                        <SkillIcon name={skill} />
                                                    </li>
                                                )}
                                            </ul>
                                        </TableCell>
                                        <TableCell align="left">{app.isAccepted
                                            ? <p style={{ color: `${Colors.allowGreen}` }}>합격</p>
                                            : <p style={{ color: `${Colors.deepGray}`, fontWeight: 700 }}>미    정</p>}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </MyApplications>
            </InnerContainer>
        </DefaultContainer>
    )
}

const MyPosts = styled.section``
const MyApplications = styled.section``
const InnerContainer = styled.div`
    width: 60%;
    margin:0 auto;
    padding-bottom: 200px;
`

const Header = styled.header`
   margin: 30px; 
   font-size: 24px;
`

const Title = styled.p``
const Skills = styled.p``
const Recruited = styled.div``

const CreatedAt = styled.p`
    color: ${Colors.deepGray};
    font-weight: 700;
    font-size: 18px;
    line-height: 50px;
    margin-left: 30px;
`
export default ApplicationManagerPage
