import axios from "axios";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
} from "../constants/userConstants";
import Cookie from "js-cookie";

const signin = (email, password) => async (dispatch) => {
  console.log("from action", email, password);
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

  try {
    
    const { data, } = await axios.post("https://my-json-server.typicode.com/oyeyipo45/fakerest/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    email,password});
   
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userinfo", JSON.stringfy(data));
  
} catch (error) {
    
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

export default signin;
