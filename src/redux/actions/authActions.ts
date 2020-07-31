import { User } from "./../../types/auth"

export const SET_USER_INFO = "SET_USER_INFO" as const;
export const CLEAR_USER_INFO = "CLEAR_USER_INFO" as const;

export const setUserInfo = (user: User) => ({
    type: SET_USER_INFO,
    user
})

export const clearUserInfo = () => ({
    type: CLEAR_USER_INFO
})




