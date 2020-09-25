import {
    REQUEST_RESERVATION_REQUEST, REQUEST_RESERVATION_SUCCESS, REQUEST_RESERVATION_FAIL
    ,RESERVED_VENUE_LIST_REQUEST,RESERVED_VENUE_LIST_SUCCESS,RESERVED_VENUE_LIST_FAIL
} from  "../constants/reservationConstants"


const reservationReducer = (state = {}, action) => {
    switch (action.type) {
      case REQUEST_RESERVATION_REQUEST:
        return { loading: true };
      case REQUEST_RESERVATION_SUCCESS:
        return { loading: false, reservation: action.payload, success: true };
        
      case REQUEST_RESERVATION_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
}

const initialState = {
  reservedVenues: []
};


const reservedVenueListReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVED_VENUE_LIST_REQUEST:
      return { loading: true };
    case RESERVED_VENUE_LIST_SUCCESS:
      return { loading: false, reservedVenues: action.payload };
    case RESERVED_VENUE_LIST_FAIL:
      return { loading: false, error:action.payload };
    default:
      return state;
  }
};


export { reservationReducer,reservedVenueListReducer };