import React from "react";
import { Link } from "react-router-dom";

const ReservationSuccessfulPage = () => {
  return (
    <div className="BookingSuccessfulPage-container">
      <div className="form-mobile">
        <div className="form signin-form">
          <form>
            <ul className="form-container">
              <li>
               <img src="https://res.cloudinary.com/dsipecjov/image/upload/v1599815157/amzlf8ycdsruwgnmejlj.svg" alt="booking successful" />
              </li>

              <li>
                <p className="bookingSuccessfulPage-heading-2">
                Reservation Successful
                </p>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className="form-web">
        <div className="form signin-form">
          <form>
            <ul className="form-container">
              
              <li className="BookingSuccessfulPage-container-image">
               <img src="https://res.cloudinary.com/dsipecjov/image/upload/v1599815157/amzlf8ycdsruwgnmejlj.svg" alt="booking successful" />
              </li>
              

              <li>
                <p className="bookingSuccessfulPage-heading-2">
                Reservation Successful
                </p>
              </li>
              
            </ul>
          </form>
        </div>
      </div>

    </div>
  );
};


export default ReservationSuccessfulPage;