import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,  useSelector } from 'react-redux';
import { signin} from './../../redux/actions/userAction';


const SignIn = (props) => {

    
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const userSignIn = useSelector(state => state.userSignIn);
   const {loading, userInfo, error } = userSignIn;

   const dispatch = useDispatch()
    
    
   useEffect(() => {
   if(userInfo){
       props.history.push("/")
   }
       return () => {
        //    cleanup
       }
   }, [userInfo]);
  
  const submitHandler = (e) => {
      if (email === "" || password === "") {
      return e.preventDefault(alert("Please Fill Fields"));
       } else {
        e.preventDefault()
        dispatch(signin(email,password))
       }
    
  }

  
  
    return (
        <div className="signIn-container">
            <div className="form-mobile">
                <div className="form signin-form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container ">
                        
                        <h3 className="sigin-heading">Sign In</h3>
                        <h3 className="sigin-heading">Welcome back </h3>
                    
                    
                         
                        <li>
                            {loading && <div class="alert alert-success" role="alert"> Signing In ...</div>}
                            {error && <div class="alert alert-danger" role="alert"> {error.message} </div>}
                        </li>

                    

                        <li className="email-container">
                        
                            <input type="email" name="email" id="email" placeholder="Email address" value={email} onChange={((e) => setEmail(e.target.value))}></input>
                            
                        </li>
                        <li className="password-container">
                            
                            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={((e) => setPassword(e.target.value))}></input>
                            
                        </li>
                        <Link to="/" className="forgot-password">
                            Forgot your Password ?
                        </Link>
                        
                        <li>
                            <button type="submit" className="signin-button">Sign in </button>
                        </li>


                        <li className="signUp-link">
                            <span> don't have an account? <Link to="/SignUp" className="signUp-link-text"> Sign up </Link>
                        </span>
                        </li>

                        
                    </ul>
                </form>
                
                </div>

            </div>





            <div className="form-web">
                    <div className="form signin-form">
                    <form onSubmit={submitHandler}>
                        <ul className="form-container ">
                            
                            <h3 className="sigin-heading">Sigin In  </h3>
                            <h3 className="sigin-heading">Welcome Back </h3>
                        
                            <li>
                            {loading && <div class="alert alert-success" role="alert"> Signing In ...</div>}
                            {error && <div class="alert alert-danger" role="alert"> {error.message} </div>}
                        </li>

                        

                            <li className="email-container">
                            
                                <input type="email" name="email" id="email" placeholder="Email address" onChange={((e) => setEmail(e.target.value))}></input>
                                
                            </li>
                            <li className="password-container">
                                
                                <input type="password" name="password" id="password" placeholder="Password" onChange={((e) => setPassword(e.target.value))}></input>
                                
                            </li>
                            <Link to="/"  className="forgot-password">
                                Forgot your Password ?
                            </Link>
                            
                            <li>
                                <button type="submit" className="signin-button">Sign in </button>
                            </li>

                            

                            <li className="signUp-link">
                                <span> don't have an account? <Link to="/SignUp" className="signUp-link-text"> Sign up </Link>
                            </span>
                            </li>

                            
                        </ul>
                    </form>
                    
                </div>

                    </div>

                    <div className="signin-web-image-container">
                        
                    <img  alt="sign-up" className="signin-web-image" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597544943/rxempkcphe7rqkbdx1u2.svg" />
                        
                    
            </div>







        </div>
        
    )
}


export default SignIn;

