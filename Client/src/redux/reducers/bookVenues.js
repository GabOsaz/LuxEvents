





// const reservationReducer = (state = {}, action) => {
//     switch (action.type) {
//       case REQUEST_RESERVATION_REQUEST:
//         return { loading: true };
//       case REQUEST_RESERVATION_SUCCESS:
//         return { loading: false, reservation: action.payload, success: true };

import { BOOKED_VENUE_SUCCESS, BOOKED_VENUE_FAIL } from "../constants/bookVenueConstants";
import { BOOKED_VENUE_REQUEST } from '../constants/bookVenueConstants';

        
//       case REQUEST_RESERVATION_FAIL:
//         return { loading: false, error: action.payload };
//       default: return state;
//     }
// }

const initialState = {
  bookedVenues: []
};


const bookedVenueReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKED_VENUE_REQUEST:
      return { loading: true };
    case BOOKED_VENUE_SUCCESS:
      return { loading: false, bookedVenues: action.payload };
    case BOOKED_VENUE_FAIL:
      return { loading: false, error:action.payload };
    default:
      return state;
  }
};


export { bookedVenueReducer };