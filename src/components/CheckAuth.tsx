import React, { useEffect } from 'react'
import env from "./../env"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUserInfo } from '../redux/actions/authActions'
import { useHistory } from "react-router-dom"

const CheckAuth = () => {
    const email = window.localStorage.getItem("email")
    const token = window.localStorage.getItem("token")

    const dispatch = useDispatch()
    const history = useHistory()

    const getAuth = async () => {
        try {
            const res = await axios.post(`${env.ENDPOINT}/api/auth`, {}, {
                headers: {
                    email,
                    token
                }
            })
            const userInfo = res.data.user
            dispatch(setUserInfo(userInfo))
        } catch (err) {
            if (err) console.log(err)
            window.localStorage.clear()
            history.push("/login")
        }

    }

    useEffect(() => {
        getAuth()
    }, [email, token])

    return null;
}

export default CheckAuth;