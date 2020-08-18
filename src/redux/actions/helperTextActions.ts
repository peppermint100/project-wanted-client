export const SET_MY_POST_HELPER_TEXT = "SET_MY_POST_HELPER_TEXT" as const;
export const CLEAR_MY_POST_HELPER_TEXT = "CLEAR_MY_POST_HELPER_TEXT" as const;

export const setMyPostHelperText = (text: string) => ({
    type: SET_MY_POST_HELPER_TEXT,
    text
})

export const clearMyPostHelperText = () => ({
    type: CLEAR_MY_POST_HELPER_TEXT
})





