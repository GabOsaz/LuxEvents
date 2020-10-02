import axios from "axios";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
 
} from "../constants/userConstants";
import Cookie from "js-cookie";



const signin = (email, password) => async (dispatch) => {
  console.log("from action", email, password);
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

  try {
    
<<<<<<< HEAD
    const { data, } = await axios.post("https://lux-client-api.herokuapp.com/api/login", {
=======
    const { data, } = await axios.post("http://127.0.0.1:5050/api/login", {
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7
    email,password});
   
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  
} catch (error) {
    
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}

const signup = (firstName, lastName, email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: { firstName, lastName, email, password } });
  try {
<<<<<<< HEAD
    const { data } = await axios.post("https://lux-client-api.herokuapp.com/api/signup", {firstName, lastName, email, password });
=======
    const { data } = await axios.post("http://127.0.0.1:5050/api/signup", {firstName, lastName, email, password });
>>>>>>> e936a133fd803183a5f0a136379b5b07cd3b30a7
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
}

export {signin, logout, signup};
