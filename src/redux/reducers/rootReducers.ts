import { authReducer } from './authReducer';
import { modalReducer } from './modalReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    modalReducer,
    authReducer
});

export type RootReducerType = ReturnType<typeof allReducers>

export default allReducers;