import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./landing-page/landing-page";
import Gallery from "./gallery/gallery";
import EventCenterDetails from './gallery/EventCenterDetails';
import Calender from "./calender/Calender"
import SignIn from "./sigin/SignIn"
import SignUp from './sigin/siginUp';

const Body = () => {
  return (
    <div>
      <div className="content">
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/event-center-details/:id" component={EventCenterDetails} />
        <Route path="/calender" component={Calender} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
      
      </div>
    </div>
  );
};

export default Body;
