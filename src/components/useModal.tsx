import { useDispatch, useSelector } from "react-redux"
import { RootReducerType } from "../redux/reducers/rootReducers";
import { setModalState } from "../redux/actions/modalAction";

const useModal = () => {
    const dispatch = useDispatch()
    const isShowing = useSelector((state: RootReducerType) => state.modalReducer)

    function toggle() {
        dispatch(setModalState())
    }

    return {
        isShowing,
        toggle,
    }
};

export default useModal