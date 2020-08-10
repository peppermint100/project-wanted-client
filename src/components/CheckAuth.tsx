import React, { useEffect } from 'react'
import env from "./../env"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { setUserInfo } from '../redux/actions/authActions'
import { useHistory } from "react-router-dom"
import { RootReducerType } from '../redux/reducers/rootReducers'


const CheckAuth = () => {
    const email = window.localStorage.getItem("email")
    const token = window.localStorage.getItem("token")

    const dispatch = useDispatch()
    const history = useHistory()

    const isShowing = useSelector((state: RootReducerType) => state.modalReducer);

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
    }, [email, token, isShowing])

    return null;
}

export default CheckAuth;