import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { publicFetch } from '../../util/fetch';
import { AuthContext } from '../../context/AuthContext'


const SignUp = () => {
    const authContext = useContext(AuthContext)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupSuccess, setSignupSuccess] = useState();
    const [signupError, setSignupError] = useState();
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);
    
   const credentials = {
    firstName,
    lastName,
    email,
    password
   }
   console.log(credentials);
  
  const submitHandler = async (e) => {
      try {
        e.preventDefault();
        const { data } = await publicFetch.post('signup', credentials);
        console.log('data >>', data);
        authContext.setAuthState(data);
        setSignupSuccess(data.message);
        setSignupError('');
        setTimeout(() => {
            setRedirectOnLogin(true)
          }, 700)
    } catch(error) {
        console.log(error);
        const { data } = error.response;
        setSignupError(data.message);
        setSignupSuccess('');
    }
  }

  
    // useEffect(() => {
    //     if(userInfo){
    //         props.history.push('/')
    //     }
    //     return () => {
           
    //     }
    // }, [userInfo])


    return (
        <>
        {redirectOnLogin && <Redirect to="/"/>}
            <div className="signIn-container">
            <div className="form-mobile">
                <div className="form signin-form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container ">
                        
                        <h3 className="sigin-heading">Create an account </h3>

                        {signupSuccess && (
                            <div class="alert alert-success" role="alert">
                                {signupSuccess}
                            </div>
                        )}

                        {signupError && (
                            <div class="alert alert-danger" role="alert">
                                {signupError}
                            </div>
                        )}
                    
                        {/* <li>{error.message}</li> */}
                        {/* <li>
                            {loading && <div className="alert alert-success"> Signing In ...</div>}
                            {error && <div className="alert alert-danger alert-dismissible fade show">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>Invalid Email or Password</div>}
                        </li> */}

                        <li className="name-container">
                            <input type="text" name="firstName" id="firstName" placeholder="First name" value={firstName} onChange={((e) => setFirstName(e.target.value))}></input>                       
                        </li>
                        <li className="name-container">
                            <input type="text" name="lastName" id="lastName" placeholder="Last name" value={lastName} onChange={((e) => setLastName(e.target.value))}></input>                       
                        </li>
                        <li className="email-container">
                            <input type="email" name="email" id="email" placeholder="Email address" value={email} onChange={((e) => setEmail(e.target.value))}></input>                           
                        </li>
                        <li className="password-container">
                            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={((e) => setPassword(e.target.value))}></input>
                        </li>
                        <li className="forgot-password">
                            Forgot your Password ?
                        </li>
                        
                        <li>
                            <button type="submit" className="signin-button">Sign in </button>
                        </li>

                        <li className="signUp-policy-text">By signing up below you have accepted our <br/>terms of service and privacy policy</li>
                        
                        <li>
                            <button type="submit" className="connect-google-button"> <img className="googleLogo" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597539426/wdx0jpcmfcbwclckrpdh.svg" /> Connect with Google </button>
                        </li>

                        <li className="signUp-link">
                            <span> Already have an account? <Link to="/SignIn" className="signUp-link-text"> Sign in </Link>
                        </span>
                        </li>

                        
                    </ul>
                </form>
                
                </div>

            </div>




            {redirectOnLogin && <Redirect to="/"/>}
            <div className="form-web">
            <div className="form signin-form">
            <form onSubmit={submitHandler}>
                <ul className="form-container ">
                    
                    <h3 className="sigin-heading">Create an account </h3>

                    {signupSuccess && (
                        <div class="alert alert-success" role="alert">
                            {signupSuccess}
                        </div>
                    )}
                        
                    {signupError && (
                        <div class="alert alert-danger" role="alert">
                            {signupError}
                        </div>
                    )} 
                 
                    {/* <li>{error.message}</li> */}
                    {/* <li>
                        {loading && <div className="alert alert-success"> Signing In ...</div>}
                        {error && <div className="alert alert-danger alert-dismissible fade show">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>Invalid Email or Password</div>}
                    </li> */}

                    <li className="name-container">
                        <input type="name" name="firstName" id="firstName" placeholder="First name" value={firstName} onChange={((e) => setFirstName(e.target.value))}></input>                       
                    </li>
                    <li className="name-container">
                        <input type="name" name="lastName" id="lastName" placeholder="Last name" value={lastName} onChange={((e) => setLastName(e.target.value))}></input>                       
                    </li>
                    <li className="email-container">
                        <input type="email" name="email" id="email" placeholder="Email address" value={email} onChange={((e) => setEmail(e.target.value))}></input> 
                    </li>
                    <li className="password-container">
                        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={((e) => setPassword(e.target.value))}></input>
                    </li>
                    <li className="forgot-password">
                        Forgot your Password ?
                    </li>
                    <li>
                        <button type="submit" className="signin-button">Sign in </button>
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
        </>
        
    )
}


export default SignUp;

