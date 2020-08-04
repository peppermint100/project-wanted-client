export const SET_MODAL_STATE = "SET_MODAL_STATE" as const;
export const OPEN_MODAL = "OPEN_MODAL" as const;

export const setModalState = () => ({
    type: SET_MODAL_STATE
})



export const openModal = () => ({
    type: OPEN_MODAL
})


