import { combineReducers } from "redux";
import {venueListReducer, venuesDetailsReducer} from "./venueReducer";
import {userSigninReducer, userSignupReducer } from './userReducer';
import { reservationReducer, reservedVenueListReducer } from './reservationReducer';

const rootReducer = combineReducers({
    venueList: venueListReducer,
    venueDetails: venuesDetailsReducer,
    userSignIn: userSigninReducer,
    userSignUp: userSignupReducer,
    reservationDetails : reservationReducer,
    reservedVenueList :reservedVenueListReducer
})


export default rootReducer;