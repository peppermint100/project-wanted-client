import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Colors from "./../styles/colors"
import { PostProps } from '../types/post';

import { formatDate } from "./../custom/format"
import { ApplicationDetails } from '.';

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
    },
    root: {
        width: '100%',
    },
    heading: {
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        color: "#000"
    },
});

interface Props {
    posts: PostProps[]
}

const MyPostsHandler: React.FC<Props> = ({ posts }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div>
            {/* post title, createdat */}
            {/* username, skills, description, role, accept button,  */}
            <div className={classes.root}>
                {posts.map((post: PostProps) => (
                    <Accordion key={post.postId} expanded={expanded === post.postId.toString()} onChange={handleChange(post.postId.toString())}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{post.title}</Typography>
                            <Typography className={classes.secondaryHeading}>{formatDate(post.createdAt)}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {post.applications !== null && typeof post.applications !== undefined
                                    ? <ApplicationDetails applications={post.applications} />
                                    : "loading"
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                ))}
            </div>

        </div>
    )
}

export default MyPostsHandler
