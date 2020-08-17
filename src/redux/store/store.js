import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
// import Cookie from "js-cookie";

// const cartItems = Cookie.getJSON("cartItems") || [];
// console.log(cartItems, "inside store");

// const initialState = { cartItems };


const initialState = { };

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
