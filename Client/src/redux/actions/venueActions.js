import {
    VENUE_LIST_REQUEST,
    VENUE_LIST_SUCCESS,
    VENUE_LIST_FAIL,
  } from "../constants/venueConstants";
  import {
    VENUE_DETAILS_REQUEST,
    VENUE_DETAILS_SUCCESS,
    VENUE_DETAILS_FAIL,
  } from "../constants/venueConstants";
  
  import axios from "axios";
  
  const listVenues = () => async (dispatch) => {
    try {
      dispatch({ type: VENUE_LIST_REQUEST });
  
      const { data } = await axios.get("https://my-json-server.typicode.com/oyeyipo45/fakerest/venues");
      dispatch({ type: VENUE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: VENUE_LIST_FAIL, payload: error.message });
    }
  };
  
  
  
  const detailsVenue = (venueId) => async (dispatch) => {
    try {
      dispatch({ type: VENUE_DETAILS_REQUEST, payload: venueId });  
      const { data } = await axios.get(`https://my-json-server.typicode.com/oyeyipo45/fakerest/venues/${venueId}`);
      dispatch({ type: VENUE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: VENUE_DETAILS_FAIL, payload: error.message });
    }
  };
  
  export { listVenues, detailsVenue };
  