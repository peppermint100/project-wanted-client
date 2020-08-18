import { SET_MY_POST_HELPER_TEXT, CLEAR_MY_POST_HELPER_TEXT, setMyPostHelperText, clearMyPostHelperText } from './../actions/helperTextActions';

type helperTextActionType = ReturnType<typeof setMyPostHelperText> | ReturnType<typeof clearMyPostHelperText>

const initialState = ""

export const myPostHelperTextReducer = (state: string = initialState, action: helperTextActionType) => {
    if (action.type === SET_MY_POST_HELPER_TEXT) return action.text;
    if (action.type === CLEAR_MY_POST_HELPER_TEXT) return "";
    return initialState;
}