import { combineReducers } from "redux";
import {venueListReducer, venuesDetailsReducer} from "./venueReducer";
// import { userSigninReducer } from './userReducer';

const rootReducer = combineReducers({
    venueList: venueListReducer,
    venueDetails: venuesDetailsReducer,
    // userSignIn: userSigninReducer
})


export default rootReducer;