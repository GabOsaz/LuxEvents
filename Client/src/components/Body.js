import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./landing-page/landing-page";
import Gallery from "./gallery/gallery";
import EventCenterDetails from './gallery/EventCenterDetails';
import Calender from "./calender/Calender"
import SignIn from "./signin/SignIn"
import SignUp from './signin/siginUp';
import MainPayment from './payment/MainPayment';
import Front from './../front';
import RequestReservation from './extras/RequestReservation';

const Body = () => {
  return (
    <div>
      <div className="content">
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/event-center-details/:id" component={EventCenterDetails} />
        <Route path="/MainPayment" component={MainPayment} />
        <Route path="/calender" component={Calender} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Front" component={Front} />
        <Route path="/request-reservation" component={RequestReservation} />
      
      </div>
    </div>
  );
};

export default Body;
