import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom"
import {requestReservation} from './../../redux/actions/reservationAction';

const RequestReservation = (props) => {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const venueDetails = useSelector((state) => state.venueDetails);
  const { venue } = venueDetails;
  console.log(venue);
//   const reservationDetails = useSelector((state) => state.reservationDetails);

//  console.log(reservationDetails);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  
  const venueId = props.match.params.id

  const toPayment = () => {
    props.history.push(`/MainPayment/` +  venueId );
  }

  

 const dispatch = useDispatch()

 
 
  const submitHandler = (e) => {
    const venueId = props.match.params.id
    
    if (date === "") {
      return e.preventDefault(alert("Please Fill Fields"));
       } else {
        e.preventDefault()
        dispatch(requestReservation(userInfo._id, userInfo.firstName, userInfo.lastName, venue.name, venue.location, userInfo.email, date, venueId, venue.uploadedImg, venue.description))
       }
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
                  
                ></input>
              </li>

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="last name"
                value={userInfo.lastName}
                 
                ></input>
              </li>

              <li className="email-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={userInfo.email}
                  
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


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
     <div className="mx-auto"> <h3 className="text-center">Venue Reserved</h3></div>
       <div className=""> <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>

      </div>
      <div className="modal-body">
        
        
        <p className="reservation-success-text">
          Please note that the 10% deposit is to be made within the next 7 days to permanently 
          reserve the venue and date <Link to={`/MainPayment`  + venueId } onClick={toPayment} data-dismiss="modal" >Click here</Link> to make deposit  
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
                ></input>
              </li>

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder=" last name"
                  value={userInfo.lastName}
                ></input>
              </li>

              <li className="email-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={userInfo.email}
                  
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
                data-toggle="modal" data-target="#staticBackdrop">
                  Submit
                </button>
              </li>
            </ul>
          </form>



<div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
    <div className="modal-header">
     <div className="mx-auto"> <h3 className="text-center">Venue Reserved</h3></div>
       <div className=""> <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>

      </div>
      <div className="modal-body">
      <p className="reservation-success-text">
          Please note that the 10% deposit is to be made within the next 7 days to permanently 
          reserve the venue and date <Link to={`/MainPayment`  + venueId } onClick={toPayment} data-dismiss="modal" >Click here</Link> to make deposit  
          </p>
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