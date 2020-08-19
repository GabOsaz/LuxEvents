import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useDispatch,  useSelector } from 'react-redux';

const RequestReservation = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  //    const dispatch = useDispatch()

  //    useEffect(() => {
  //    if(userInfo){
  //        props.history.push("/")
  //    }
  //        return () => {
  //         //    cleanup
  //        }
  //    }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    //  dispatch(signin(name,Email,date))
  };

  return (
    <div className="Request-reservation-container">
      <div className="form-mobile">
        <div className="form signin-form">
          <form onSubmit={submitHandler}>
            <ul className="form-container ">
              <h3 className="sigin-heading">Request Reservation </h3>

              {/* <li>
                            {loading && <div> Signing In ...</div>}
                            {error && <div> {error} </div>}
                        </li> */}

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
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
              <li className="date-container">
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

              {/* <li>{error.message}</li> */}
              {/* <li>
                                {loading && <div className="alert alert-success"> Signing In ...</div>}
                                {error && <div className="alert alert-danger alert-dismissible fade show">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>Invalid Email or Password</div>}
                            </li> */}

              <li className="name-container">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
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
              <li className="date-container">
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
