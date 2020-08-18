import { authReducer } from './authReducer';
import { modalReducer } from './modalReducer';
import { myPostHelperTextReducer } from './myPostHelperTextReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    modalReducer,
    authReducer,
    myPostHelperTextReducer
});

export type RootReducerType = ReturnType<typeof allReducers>

export default allReducers;