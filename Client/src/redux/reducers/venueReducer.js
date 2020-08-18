import {VENUE_LIST_REQUEST, VENUE_LIST_SUCCESS, VENUE_LIST_FAIL } from '../constants/venueConstants';
import { VENUE_DETAILS_REQUEST, VENUE_DETAILS_SUCCESS, VENUE_DETAILS_FAIL } from "../constants/venueConstants" 



const initialState = {
  venues: [],
};


export const venueListReducer = (state = initialState, action) => {
  switch (action.type) {
    case VENUE_LIST_REQUEST:
      return { loading: true };
    case VENUE_LIST_SUCCESS:
      return { loading: false, venues: action.payload };
    case VENUE_LIST_FAIL:
      return { loading: false, error:action.payload };
    default:
      return state;
  }
};


export const venuesDetailsReducer = (state = {venue: {}}, action) => {
  switch (action.type) {
    case VENUE_DETAILS_REQUEST:
      return { loading: true };
    case VENUE_DETAILS_SUCCESS:
      return { loading: false, venue: action.payload };
    case VENUE_DETAILS_FAIL:
      return { loading: false, error:action.payload };
    default:
      return state;
  }
};

