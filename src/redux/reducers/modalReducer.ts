import { SET_MODAL_STATE, setModalState, OPEN_MODAL, openModal } from './../actions/modalAction';


type modalActionType = ReturnType<typeof setModalState>

const initialState = false

export const modalReducer = (state: boolean = initialState, action: modalActionType) => {
    if (action.type === SET_MODAL_STATE) return !state;
    if (action.type === OPEN_MODAL) return true;
    return state;
}