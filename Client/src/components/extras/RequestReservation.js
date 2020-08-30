import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom"
import requestReservation from './../../redux/actions/reservationAction';

const RequestReservation = (props) => {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  console.log(userInfo)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  
  

  // const reservationDetails = useSelector(state => state.reservationDetails)

 const dispatch = useDispatch()

 

  const submitHandler = (e) => {
    const venueId = Number(props.match.params.id)
    e.preventDefault();
    dispatch(requestReservation(firstName, lastName, email, date, venueId))
   
  };

  return (
    <div className="Request-reservation-container">
      <div className="form-mobile">
        <div className="form signin-form">
          <form onSubmit={submitHandler}>
            <ul className="form-container ">
              <h3 className="sigin-heading">Request Reservation </h3>

           

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="first name"
                  value={userInfo.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </li>

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="last name"
                  value={userInfo.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </li>

              <li className="email-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={userInfo.email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </li>
              <li className="email-container">
                <input
                style={{opacity: ".6"}}
                  type="date"
                  name="date"
                  id="date"
                  placeholder="date"
                  onChange={(e) => setDate(e.target.value)}
                ></input>
              </li>

              <li>
                <button type="submit" className="signin-button"
                data-toggle="modal" data-target="#exampleModalCenter">
                  Submit
                </button>
              </li>
            </ul>
          </form>
          <div className="requestSuccess-Modal">


<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h3 className="text-center">Venue Reserved</h3>
        
        <p className="reservation-success-text">
          Please note that 10% deposit is to be made within the next 7 days to permanently 
          reserve the venue and date <Link to="/Main-payment">Click here</Link> to make deposit  
          </p>
      </div>
     
    </div>
  </div>
</div>
        </div>
        </div>
      </div>

      <div className="form-web">
        <div className="form signin-form">
          <form onSubmit={submitHandler}>
            <ul className="form-container ">
              <h3 className="sigin-heading">Request Reservation </h3>

              

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="first name"
                  value={userInfo.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </li>

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder=" last name"
                  value={userInfo.lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </li>

              <li className="email-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={userInfo.email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </li>
              <li className="email-container">
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="date"
                  onChange={(e) => setDate(e.target.value)}
                ></input>
              </li>

              <li>
                <button type="submit" className="signin-button"
                 data-toggle="modal" data-target="#exampleModalCenter"
                >
                  Submit{" "}
                </button>
              </li>
            </ul>
          </form>
          <div className="requestSuccess-Modal">


<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h3 className="text-center">Venue Reserved</h3>
        
        <p className="reservation-success-text">
          Please note that the 10% deposit is to be made within the next 7 days to permanently 
          reserve the venue and date <Link to="/Main-payment">Click here</Link> to make deposit  
          </p>
      </div>
     
    </div>
  </div>
</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RequestReservation;