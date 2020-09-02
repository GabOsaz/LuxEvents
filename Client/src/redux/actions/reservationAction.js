import axios from "axios";
import {
  REQUEST_RESERVATION_REQUEST,
  REQUEST_RESERVATION_SUCCESS,
  REQUEST_RESERVATION_FAIL,
  RESERVED_VENUE_LIST_REQUEST,
  RESERVED_VENUE_LIST_SUCCESS,
  RESERVED_VENUE_LIST_FAIL
} from "../constants/reservationConstants";
import Cookie from "js-cookie";

const requestReservation = (
  firstName,
  lastName,
  email,
  date,
  venueId
) => async (dispatch) => {
  console.log("from action", firstName, lastName, email, date, venueId);
  dispatch({
    type: REQUEST_RESERVATION_REQUEST,
    payload: { firstName, lastName, email, date, venueId },
  });

  try {
    const { data } = await axios.post(
      `http://127.0.0.1:5050/api/reserveVenue`,
      {
        firstName,
        lastName,
        email,
        date,
        venueId,
      }
    );

    console.log(firstName, lastName, email, date, venueId, "res success");
    dispatch({ type: REQUEST_RESERVATION_SUCCESS, payload: data });
    Cookie.set("reservationInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: REQUEST_RESERVATION_FAIL, payload: error.message });
  }
};

const listReservedVenues = () => async (dispatch) => {
  try {
    dispatch({ type: RESERVED_VENUE_LIST_REQUEST });
    
    const { data } = await axios.get("http://127.0.0.1:5050/api/reserveVenue");
    
    dispatch({ type: RESERVED_VENUE_LIST_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: RESERVED_VENUE_LIST_FAIL, payload: error.message });
  }
};

export {requestReservation, listReservedVenues  } ;
