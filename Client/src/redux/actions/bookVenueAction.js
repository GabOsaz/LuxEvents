import axios from "axios";
import {
//   REQUEST_RESERVATION_REQUEST,
//   REQUEST_RESERVATION_SUCCESS,
//   REQUEST_RESERVATION_FAIL,
  BOOKED_VENUE_REQUEST,
  BOOKED_VENUE_SUCCESS,
  BOOKED_VENUE_FAIL,
} from "../constants/bookVenueConstants";
import Cookie from "js-cookie";

// const requestReservation = (
//   userId,
//   firstName,
//   lastName,
//   name, 
//   location,
//   email,
//   date,
//   venueId,
//   uploadedImg,
//   description
// ) => async (dispatch) => {
  
//   dispatch({
//     type: REQUEST_RESERVATION_REQUEST,
//     payload: {
//       userId,
//       firstName,
//       lastName,
//       name,
//       location,
//       email,
//       date,
//       venueId,
//       uploadedImg,
//       description
//     }
//   });

//   try {
//     const { data } = await axios.post(
//       `http://127.0.0.1:5050/api/reserveVenue`,
//       {
//         userId,
//         firstName,
//   lastName,
//         name,
//         location,
//         email,
//         date,
//         venueId,
//         uploadedImg,
//         description
//       }
//     );

   
//     dispatch({ type: REQUEST_RESERVATION_SUCCESS, payload: data });
//     Cookie.set("reservationInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({ type: REQUEST_RESERVATION_FAIL, payload: error.message });
//   }
// };





const listBookedVenues = (userId) => async (dispatch) => {
  try {
    dispatch({ type: BOOKED_VENUE_REQUEST, payload: userId});
    

    const { data } = await axios.get(`http://127.0.0.1:5050/api/bookVenue/booked/${userId}`);

    dispatch({ type: BOOKED_VENUE_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: BOOKED_VENUE_FAIL, payload: error.message });
  }
};

export { listBookedVenues };
