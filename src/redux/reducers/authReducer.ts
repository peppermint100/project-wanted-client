import { SET_USER_INFO, setUserInfo, CLEAR_USER_INFO, clearUserInfo } from './../actions/authActions';
import { User } from '../../types/auth';


type authActionType = ReturnType<typeof setUserInfo> | ReturnType<typeof clearUserInfo>

const initialState: User = {
    userId: null,
    username: "",
    email: "",
    role: null,
    skills: [],
    token: "",
    authenticated: false
}


export const authReducer = (state: User = initialState, action: authActionType) => {
    switch (action.type) {
        case SET_USER_INFO:
            return action.user;
        case CLEAR_USER_INFO:
            return initialState;
        default:
            return initialState;
    }
}