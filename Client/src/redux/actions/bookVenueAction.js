import axios from "axios";
import {
<<<<<<< HEAD
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

=======
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
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7




const listBookedVenues = (userId) => async (dispatch) => {
  try {
<<<<<<< HEAD
    dispatch({ type: BOOKED_VENUE_REQUEST, payload: userId});
    

    const { data } = await axios.get(`https://lux-client-api.herokuapp.com/api/bookVenue/booked/${userId}`);

    dispatch({ type: BOOKED_VENUE_SUCCESS, payload: data });
    
=======
    dispatch({ type: BOOKED_VENUE_REQUEST, payload: userId });

    const { data } = await axios.get(
      `http://127.0.0.1:5050/api/bookVenue/booked/${userId}`
    );

    dispatch({ type: BOOKED_VENUE_SUCCESS, payload: data });
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7
  } catch (error) {
    dispatch({ type: BOOKED_VENUE_FAIL, payload: error.message });
  }
};

<<<<<<< HEAD
export { listBookedVenues };
=======
export { listBookedVenues, sendDate, bookVenue };
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7
