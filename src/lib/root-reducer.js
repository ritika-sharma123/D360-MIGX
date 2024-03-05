import { combineReducers } from 'redux'
import {
    loginReducer,
} from "./auth/auth-reducer";
export const rootReducer = combineReducers({
login: loginReducer,
});