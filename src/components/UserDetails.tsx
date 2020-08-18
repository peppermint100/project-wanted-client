import React, { useState, useEffect } from 'react'
import { Application } from '../types/application'
import axios from "axios"
import { User } from '../types/user'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { formatDescription } from "./../custom/format"

import { SkillIcon, CustomButton } from "."
import Colors from '../styles/colors'
import env from "./../env"
import { Role } from './../types/role';

import { useDispatch } from "react-redux"
import { setMyPostHelperText } from '../redux/actions/helperTextActions';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    username: {
        minWidth: 200
    },
    description: {
        minWidth: 400
    },
    skills: {
        minWidth: 500,
        display: "flex"
    },
    buttonSection: {
        minWidth: 150
    }
});

interface Props {
    application: Application
}

const UserDetails: React.FC<Props> = ({ application }) => {
    const [userDetails, setUserDetails] = useState<User | null>(null)
    const classes = useStyles();

    const dispatch = useDispatch()

    const getUserDetails = async () => {
        const res = await axios.post(`${env.ENDPOINT}/api/user/getuserinfo`, { userId: application.ownerId })
        setUserDetails(res.data)
    }

    const confirmApplicant = async () => {
        const applicationId = application.applicationId;
        const postId = application.postId
        const role = userDetails!.role as Role

        try {
            if (window.confirm(`${userDetails!.username} 님을 팀원으로 확정하시겠습니까?`)) {
                await axios.post(`${env.ENDPOINT}/api/application/accept`, { applicationId, postId, role })
            }
        } catch (err) {
            if (err) {
                dispatch(setMyPostHelperText(err.response.data.message))
            }
        }
    }
    const acceptButtonOptions = {
        content: "확 정",
        width: '110px',
        height: "40px",
        backgroundColor: `${Colors.errorRed}`,
        onClick: confirmApplicant
    }

    useEffect(() => {
        getUserDetails()
    }, [application])

    return (
        <div>
            {userDetails !== null ?
                (
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow key={userDetails.userId}>
                                    <TableCell className={classes.username} component="th" scope="row">
                                        {userDetails.username}
                                    </TableCell>
                                    <TableCell className={classes.description} align="left">{formatDescription(userDetails.description, 30)}</TableCell>
                                    <ul>
                                        <TableCell className={classes.skills} align="left">
                                            {userDetails.skills && userDetails.skills.map((skill, idx) => (
                                                <li key={idx}>
                                                    <SkillIcon name={skill} />
                                                </li>
                                            ))}
                                        </TableCell>
                                    </ul>
                                    <TableCell className={classes.buttonSection} align="left"><CustomButton {...acceptButtonOptions} /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
                : "loading..."}
        </div>
    )
}

export default UserDetails
