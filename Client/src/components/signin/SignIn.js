import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,  useSelector } from 'react-redux';
import signin from './../../redux/actions/signinAction';


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
     e.preventDefault()
     dispatch(signin(email,password))
  }

  
    // useEffect(() => {
    //     if(userInfo){
    //         props.history.push('/')
    //     }
    //     return () => {
           
    //     }
    // }, [userInfo])


    return (
        <div className="signIn-container">
            <div className="form-mobile">
                <div className="form signin-form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container ">
                        
                        <h3 className="sigin-heading">Sign In</h3>
                        <h3 className="sigin-heading">Welcome back </h3>
                    
                    
                         
                      <li>
                            {loading && <div> Signing In ...</div>}
                            {error && <div> {error} </div>}
                        </li>

                    

                        <li className="email-container">
                        
                            <input type="email" name="email" id="email" placeholder="Email address" onChange={((e) => setEmail(e.target.value))}></input>
                            
                        </li>
                        <li className="password-container">
                            
                            <input type="password" name="password" id="password" placeholder="Password" onChange={((e) => setPassword(e.target.value))}></input>
                            
                        </li>
                        <Link className="forgot-password">
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
                        
                            {/* <li>{error.message}</li> */}
                            {/* <li>
                                {loading && <div className="alert alert-success"> Signing In ...</div>}
                                {error && <div className="alert alert-danger alert-dismissible fade show">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>Invalid Email or Password</div>}
                            </li> */}

                        

                            <li className="email-container">
                            
                                <input type="email" name="email" id="email" placeholder="Email address" onChange={((e) => setEmail(e.target.value))}></input>
                                
                            </li>
                            <li className="password-container">
                                
                                <input type="password" name="password" id="password" placeholder="Password" nChange={((e) => setPassword(e.target.value))}></input>
                                
                            </li>
                            <Link className="forgot-password">
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
                        
                    <img  className="signin-web-image" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597544943/rxempkcphe7rqkbdx1u2.svg" />
                        
                    
            </div>







        </div>
        
    )
}


export default SignIn;

