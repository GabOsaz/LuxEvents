import { combineReducers } from "redux";
import {venueListReducer, venuesDetailsReducer} from "./venueReducer";
import {userSigninReducer, userSignupReducer } from './userReducer';
import { reservationReducer, reservedVenueListReducer } from './reservationReducer';
<<<<<<< HEAD
import { bookedVenueReducer } from "./bookVenues";
=======
import { bookedVenueReducer, makeBookingReducer } from "./bookVenuesReducer";
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7

const rootReducer = combineReducers({
    venueList: venueListReducer,
    venueDetails: venuesDetailsReducer,
    userSignIn: userSigninReducer,
    userSignUp: userSignupReducer,
    reservationDetails : reservationReducer,
    reservedVenueList :reservedVenueListReducer,
<<<<<<< HEAD
    bookedVenuesList: bookedVenueReducer
=======
    bookedVenuesList: bookedVenueReducer,
    bookingDate: makeBookingReducer
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7
})


export default rootReducer;