import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

const reservationDetails = Cookie.getJSON("reservatonDetails") || [];
console.log(reservationDetails, "inside store");
const userInfo = Cookie.getJSON("userInfo") || null;


const initialState = {reservationDetails, userSignIn : { userInfo }};



const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
