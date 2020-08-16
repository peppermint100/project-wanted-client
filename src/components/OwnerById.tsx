import React, { useState, useEffect } from 'react'
import axios from "axios"
import env from "./../env"

interface Props {
    ownerId: number
}
const OwnerById: React.FC<Props> = ({ ownerId }) => {
    const [owner, setOwner] = useState<string>("")
    const getUserById = async () => {
        const res = await axios.post(`${env.ENDPOINT}/api/user/getuserinfo`, { userId: ownerId })
        setOwner(res.data.username)
    }
    useEffect(() => {
        getUserById()
    }, [])
    return (
        <>{owner}</>
    )
}

export default OwnerById
