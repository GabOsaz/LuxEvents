import { combineReducers } from "redux";
import {venueListReducer, venuesDetailsReducer} from "./venueReducer";
import {userSigninReducer, userSignupReducer } from './userReducer';
import { reservationReducer, reservedVenueListReducer } from './reservationReducer';
import { bookedVenueReducer } from "./bookVenues";

const rootReducer = combineReducers({
    venueList: venueListReducer,
    venueDetails: venuesDetailsReducer,
    userSignIn: userSigninReducer,
    userSignUp: userSignupReducer,
    reservationDetails : reservationReducer,
    reservedVenueList :reservedVenueListReducer,
    bookedVenuesList: bookedVenueReducer
})


export default rootReducer;