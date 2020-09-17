import axios from "axios";
import {
  MAKE_BOOKING_REQUEST,
  MAKE_BOOKING_SUCCESS,
  MAKE_BOOKING_FAIL,
  BOOKED_VENUE_REQUEST,
  BOOKED_VENUE_SUCCESS,
  BOOKED_VENUE_FAIL,
  SAVE_BOOKING_DATE,
} from "../constants/bookVenueConstants";
import Cookie from "js-cookie";

const bookVenue = (
  firstName,
   lastName,
    email, 
    userId,
     date,
      venueId) => async ( dispatch) => {

  dispatch({
    type: MAKE_BOOKING_REQUEST,
    payload: { firstName, lastName, email, userId, date, venueId },
  });
  

  try {
    const { data } = await axios.post(
      `http://127.0.0.1:5050/api/bookVenue`,
      firstName,
      lastName,
      email,
      userId,
      date,
      venueId
    );

    dispatch({ 
      type: MAKE_BOOKING_SUCCESS,
       payload: data 
      });

    
  } catch (error) {
    dispatch({
       type: MAKE_BOOKING_FAIL,
        payload: error.message 
      });
  }
};




const sendDate = (date) => (dispatch) => {
  dispatch({ type: SAVE_BOOKING_DATE, payload: date });
 
};




const listBookedVenues = (userId) => async (dispatch) => {
  try {
    dispatch({ type: BOOKED_VENUE_REQUEST, payload: userId });

    const { data } = await axios.get(
      `http://127.0.0.1:5050/api/bookVenue/booked/${userId}`
    );

    dispatch({ type: BOOKED_VENUE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BOOKED_VENUE_FAIL, payload: error.message });
  }
};

export { listBookedVenues, sendDate, bookVenue };
