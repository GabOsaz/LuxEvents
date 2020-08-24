import {
    REQUEST_RESERVATION_REQUEST, REQUEST_RESERVATION_SUCCESS, REQUEST_RESERVATION_FAIL
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


export { reservationReducer };