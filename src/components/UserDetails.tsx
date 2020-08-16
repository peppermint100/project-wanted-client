import React, { useState, useEffect } from 'react'
import { Application } from '../types/application'
import axios from "axios"
import env from '../env'
import { User } from '../types/user'

interface Props {
    application: Application
}

const UserDetails: React.FC<Props> = ({ application }) => {
    const [userDetails, setUserDetails] = useState<User | null>(null)

    const getUserDetails = async () => {
        const res = await axios.post(`${env.ENDPOINT}/api/user/getuserinfo`, { userId: application.ownerId })
        setUserDetails(res.data)
    }

    useEffect(() => {
        getUserDetails()
    }, [application])
    return (
        <div>
            {userDetails !== null ?
                (
                    <div>{userDetails.username}</div>
                )
                : "loading..."}
        </div>
    )
}

export default UserDetails
