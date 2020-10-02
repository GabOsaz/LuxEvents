import axios from "axios";
import {
  REQUEST_RESERVATION_REQUEST,
  REQUEST_RESERVATION_SUCCESS,
  REQUEST_RESERVATION_FAIL,
  RESERVED_VENUE_LIST_REQUEST,
  RESERVED_VENUE_LIST_SUCCESS,
  RESERVED_VENUE_LIST_FAIL,
} from "../constants/reservationConstants";
import Cookie from "js-cookie";

const requestReservation = (
  userId,
  firstName,
  lastName,
  name, 
  location,
  email,
  date,
  venueId,
  uploadedImg,
  description
) => async (dispatch) => {
  
  dispatch({
    type: REQUEST_RESERVATION_REQUEST,
    payload: {
      userId,
      firstName,
      lastName,
      name,
      location,
      email,
      date,
      venueId,
      uploadedImg,
      description
    }
  });

  try {
    const { data } = await axios.post(
<<<<<<< HEAD
      `https://lux-client-api.herokuapp.com/api/reserveVenue`,
      {
        userId,
        firstName,
  lastName,
=======
      `http://127.0.0.1:5050/api/reserveVenue`,
      {
        userId,
        firstName,
        lastName,
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7
        name,
        location,
        email,
        date,
        venueId,
        uploadedImg,
        description
      }
    );

   
    dispatch({ type: REQUEST_RESERVATION_SUCCESS, payload: data });
    Cookie.set("reservationInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: REQUEST_RESERVATION_FAIL, payload: error.message });
  }
};





const listReservedVenues = (userId) => async (dispatch) => {
  try {
    dispatch({ type: RESERVED_VENUE_LIST_REQUEST, payload: userId});
    

<<<<<<< HEAD
    const { data } = await axios.get(`https://lux-client-api.herokuapp.com/api/reserveVenue/reserved/${userId}`);
=======
    const { data } = await axios.get(`http://127.0.0.1:5050/api/reserveVenue/reserved/${userId}`);
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7

    dispatch({ type: RESERVED_VENUE_LIST_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: RESERVED_VENUE_LIST_FAIL, payload: error.message });
  }
};

export { requestReservation, listReservedVenues };
