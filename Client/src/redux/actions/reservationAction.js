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
    
    const { data } = await axios.post(`http://127.0.0.1:5050/api/reserveVenue`, {
        firstName, lastName, email, date, venueId});
        
   console.log(firstName, lastName, email, date, venueId, "res success");
    dispatch({ type: REQUEST_RESERVATION_SUCCESS, payload: data });
    Cookie.set("reservationInfo", JSON.stringify(data));
  
} catch (error) {
    
    dispatch({ type: REQUEST_RESERVATION_FAIL, payload: error.message });
  }
};




export default requestReservation;
