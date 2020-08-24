import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/userAction';


const SignUp = (props) => {

   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [reTypePassword, setRetypePassword] = useState('')

   const userSignUp = useSelector(state => state.userSignUp)
    const {loading, userInfo, error } = userSignUp;

   const dispatch = useDispatch()
  
  const submitHandler = (e) => {

    e.preventDefault();
    dispatch(signup(firstName, lastName, email, password, reTypePassword));
     
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
                        
                        <h3 className="sigin-heading">Create an account </h3>
                    
                        {/* <li>{error.message}</li> */}
                        {/* <li>
                            {loading && <div className="alert alert-success"> Signing In ...</div>}
                            {error && <div className="alert alert-danger alert-dismissible fade show">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>Invalid Email or Password</div>}
                        </li> */}
                         <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>

                    <li className="name-container">
                        
                        <input type="name" name="name" id="name" placeholder="First name" onChange={((e) => setFirstName(e.target.value))}></input>
                        
                    </li>

                    <li className="name-container">
                        
                        <input type="name" name="name" id="name" placeholder="Last name" onChange={((e) => setLastName(e.target.value))}></input>
                        
                    </li>

                        <li className="email-container">
                        
                            <input type="email" name="email" id="email" placeholder="Email address" onChange={((e) => setEmail(e.target.value))}></input>
                            
                        </li>
                        <li className="password-container">
                            
                            <input type="password" name="password" id="password" placeholder="Password" onChange={((e) => setPassword(e.target.value))}></input>
                            
                        </li>

                        
                    <li className="password-container">
                        
                        <input type="password" name="password" id="password" placeholder="Retype Password" onChange={((e) => setRetypePassword(e.target.value))}></input>
                        
                    </li>

                        <Link className="forgot-password">
                            Forgot your Password ?
                        </Link>
                        
                        <li>
                            <button type="submit" className="signin-button">Sign up </button>
                        </li>

                        <li className="signUp-policy-text">By signing up below you have accepted our <br/>terms of service and privacy policy</li>
                        
                        <li>
                            <button type="submit" className="connect-google-button"><icon> <img className="googleLogo" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597539426/wdx0jpcmfcbwclckrpdh.svg" /></icon> Connect with Google </button>
                        </li>

                        <li className="signUp-link">
                            <span> Already have an account? <Link to="/SignIn" className="signUp-link-text"> Sign in </Link>
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
                    
                    <h3 className="sigin-heading">Create an account </h3>
                 
                    {/* <li>{error.message}</li> */}
                    {/* <li>
                        {loading && <div className="alert alert-success"> Signing In ...</div>}
                        {error && <div className="alert alert-danger alert-dismissible fade show">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>Invalid Email or Password</div>}
                    </li> */}

<li className="name-container">
                        
                        <input type="name" name="name" id="name" placeholder="First name" onChange={((e) => setFirstName(e.target.value))}></input>
                        
                    </li>

                    <li className="name-container">
                        
                        <input type="name" name="name" id="name" placeholder="Last name" onChange={((e) => setLastName(e.target.value))}></input>
                        
                    </li>

                    <li className="email-container">
                       
                        <input type="email" name="email" id="email" placeholder="Email address" onChange={((e) => setEmail(e.target.value))}></input>
                        
                    </li>
                    <li className="password-container">
                        
                        <input type="password" name="password" id="password" placeholder="Password" onChange={((e) => setPassword(e.target.value))}></input>
                        
                    </li>

                    <li className="password-container">
                        
                        <input type="password" name="password" id="password" placeholder="Retype Password" onChange={((e) => setRetypePassword(e.target.value))}></input>
                        
                    </li>
                    <Link className="forgot-password">
                        Forgot your Password ?
                    </Link>
                    
                    <li>
                        <button type="submit" className="signin-button">Sign up </button>
                    </li>

                    <li className="signUp-policy-text">By signing up below you have accepted our <br/>terms of service and privacy policy</li>
                    
                    <li>
                        <button type="submit" className="connect-google-button"><icon> <img className="googleLogo" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597539426/wdx0jpcmfcbwclckrpdh.svg" /></icon> Connect with Google </button>
                    </li>

                    <li className="signUp-link">
                        <span> Already have an account? <Link to="/SignIn" className="signUp-link-text"> Sign in </Link>
                    </span>
                    </li>

                    
                </ul>
            </form>
            
        </div>

            </div>

            <div className="signin-web-image-container">
                <div >
              <img className="signin-web-image" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597544929/rns0p9b206ji9vmhsjgw.svg" />
                </div>
               
            </div>







        </div>
        
    )
}


export default SignUp;

