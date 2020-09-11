import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./landing-page/landing-page";
import Gallery from "./gallery/gallery";
import GalleryDetails from "./gallery/GalleryDetails";
import EventCenterDetails from './gallery/EventCenterDetails';
import Calender from "./calender/Calender"
import SignIn from "./signin/SignIn"
import SignUp from './signin/siginUp';
import MainPayment from './payment/MainPayment';
import Front from './../front';
import RequestReservation from './extras/RequestReservation';
import BookingSuccess from "./landing-page/Success";
// import AppShell from './AppShell'
import ReservedVenues from './extras/ReservedVenues';
import BookedVenues from "./extras/BookedVenue";
import BookingSuccessfulPage from "./extras/BookingSuccessfulPage";
import ReservationSuccessfulPage from './extras/ReservationSucessfulPage';




const Body = () => {
  return (
    <div>
      <div className="content">
        {/* <Route path="/" exact={true} render = { () => <AppShell> <LandingPage /> </AppShell>} /> */}
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/gallery" component={Gallery} />
        {/* <Route path="/galleryDetails/:id" render = { () => <AppShell> <GalleryDetails /> </AppShell>} /> */}
        <Route path="/galleryDetails/:id" component={GalleryDetails} />
        {/* <Route path="/event-center-details/:id" render = { () => <AppShell> <EventCenterDetails /> </AppShell>} /> */}
        <Route path="/event-center-details/:id" component={EventCenterDetails} />
        <Route path="/MainPayment/:id" component={MainPayment} />
        <Route path="/calender/:id" component={Calender} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Front" component={Front} />
        <Route path="/bookedVenues/:id" component={BookedVenues} />
        <Route path="/reservedVenues/:id" component={ReservedVenues} />
        <Route path="/bookingsuccessful" component={BookingSuccessfulPage} />
        <Route path="/request-reservation/:id" component={RequestReservation} />
        <Route path="/reservationSuccessful" component={ReservationSuccessfulPage} />
        <Route path="/success/:id" component={BookingSuccess} />

        {/* <Route path="/gallery" render = { () => <AppShell> <Gallery /> </AppShell>} /> */}
      </div>
    </div>
  );
};

export default Body;
