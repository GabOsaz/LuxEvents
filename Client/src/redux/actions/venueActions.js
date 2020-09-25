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
  import { AuthContext } from '../../context/AuthContext';
  import react, { useContext } from 'react';
  import axios from "axios";
  
  const listVenues = () => async (dispatch) => {
    try {
      dispatch({ type: VENUE_LIST_REQUEST });
      
      const { data } = await axios.get("https://lux-client-api.herokuapp.com/api/gallery");
    
      dispatch({ type: VENUE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: VENUE_LIST_FAIL, payload: error.message });
    }
  };
  
  const detailsVenue = (venueId) => async (dispatch) => {
    try {
      // const authContext = useContext(AuthContext);
      dispatch({ type: VENUE_DETAILS_REQUEST, payload: venueId });  
      const { data } = await axios.get(`https://lux-client-api.herokuapp.com/api/gallery/${venueId}`);
      // authContext.setVenueDetailsReq(data);
      console.log(data._id);
      dispatch({ type: VENUE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: VENUE_DETAILS_FAIL, payload: error.message });
    }
  };
  
  export { listVenues, detailsVenue };
  