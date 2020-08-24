import axios from "axios";
import {
  REQUEST_RESERVATION_REQUEST,
  REQUEST_RESERVATION_SUCCESS,
  REQUEST_RESERVATION_FAIL,
} from "../constants/reservationConstants";
import Cookie from "js-cookie";

const requestReservation = (firstName, lastName, email, date, venueId) => async (dispatch) => {
  console.log("from action", firstName, lastName, email, date, venueId);
    dispatch({ type: REQUEST_RESERVATION_REQUEST, payload: { firstName, lastName, email, date, venueId } });

  try {
    
    const { data } = await axios.post("https://my-json-server.typicode.com/oyeyipo45/fakerest/request-reservation", {
        firstName, lastName, email, date, venueId});
   
    dispatch({ type: REQUEST_RESERVATION_SUCCESS, payload: data });
    Cookie.set("reservationInfo", JSON.stringify(data));
  
} catch (error) {
    
    dispatch({ type: REQUEST_RESERVATION_FAIL, payload: error.message });
  }
};




export default requestReservation;
