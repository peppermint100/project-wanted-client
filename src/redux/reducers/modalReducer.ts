import { SET_MODAL_STATE, setModalState } from './../actions/modalAction';


type modalActionType = ReturnType<typeof setModalState>

const initialState = false

export const modalReducer = (state: boolean = initialState, action: modalActionType) => {
    if (action.type === SET_MODAL_STATE) return !state;
    return state;
}