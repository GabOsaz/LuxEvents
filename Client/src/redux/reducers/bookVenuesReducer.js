
import {
  BOOKED_VENUE_SUCCESS,
  BOOKED_VENUE_FAIL,
  BOOKED_VENUE_REQUEST,
  SAVE_BOOKING_DATE
} from "../constants/bookVenueConstants";



const initialState = {
  bookedVenues: []
};



const makeBookingReducer = (state = { bookingDetails : {},
  date : ''}, action) => {
  switch (action.type) {
    case SAVE_BOOKING_DATE:
      return {  ...state, date: action.payload,
      }
    
    default:
      return state;
    }
} 




const bookedVenueReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKED_VENUE_REQUEST:
      return { loading: true };
    case BOOKED_VENUE_SUCCESS:
      return { loading: false, bookedVenues: action.payload };
    case BOOKED_VENUE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { bookedVenueReducer, makeBookingReducer }
