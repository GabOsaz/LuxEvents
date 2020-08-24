import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,  useSelector } from 'react-redux';
import requestReservation from './../../redux/actions/reservationAction';

const RequestReservation = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const reservationDetails = useSelector(state => state.reservationDetails)

 const dispatch = useDispatch()

 const venueId = Number(props.match.params.id)

  const submitHandler = (e) => {
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
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </li>

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder=" last name"
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </li>

              <li className="email-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
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
                <button type="submit" className="signin-button">
                  Submit
                </button>
              </li>
            </ul>
          </form>
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
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </li>

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder=" last name"
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </li>

              <li className="email-container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
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
                <button type="submit" className="signin-button">
                  Sign in{" "}
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestReservation;