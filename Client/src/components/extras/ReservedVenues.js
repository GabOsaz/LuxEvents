import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardText, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { listReservedVenues } from "../../redux/actions/reservationAction";
import ErrorPage from "./ErrorPage";
import EventCenterMap from "../gallery/EventCenterMap";



const ReservedVenues = (props) => {

  const  reservedVenueList = useSelector((state) => state. reservedVenueList);
  const {reservedVenues, loading, error } =  reservedVenueList;
  console.log(reservedVenues, " reseved venues >>>");


  const dispatch = useDispatch();

  // const userSignIn = useSelector(state => state.userSignIn);
  // const {_id} = userSignIn;
   

  const userId = props.match.params.id

  useEffect(() => {
    
      dispatch(listReservedVenues(userId));
      
    return () => {
      // cleanup
    };
  }, []);

  return loading ? (
    <div className="loadingScreen">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : error ? (
    <div> {ErrorPage()} </div>
  ) : (
    <div>
      <div className="gallery-body">
        <div className="container">
          <div className="gallery-heading ">
           
            {reservedVenues.length === 0 ? <h4 className="text-center mt-3 mb-2 d-block d-sm-none  mobile-gallery-heading"> Sorry You Have No Reserved Venues </h4> :  <h4 className="text-center mt-3 mb-2 d-block d-sm-none  mobile-gallery-heading">
            Your Reserved Venues
            </h4>}
         
           

            {reservedVenues.length === 0 ? <h4 className="text-center mt-5 mb-5 heading-web d-none d-sm-block"> Sorry You Have No Reserved Venues </h4> :  <h4 className="text-center mt-5 mb-5 heading-web d-none d-sm-block">
            Your Reserved Venues
            </h4>}
            
              
          </div>
    {reservedVenues.map((venue) => (
            
            <div className="container mobile-gallery-body" key={venue._id}>
              <Row className="red">
                <Col sm="6 mb-5">
                  <Card className="mobile-gallery-card  border-0 d-block d-sm-none">
                    <div className="mobile-gallery-border">
                      <Link
                        to={`/galleryDetails/` + venue._id}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          width="100%"
                          className="mobile-gallery-image"
                          src={venue.uploadedImg}
                          alt="event Venue"
                        />

                        <div className="container gallery-body-image-text mt-2">
                          <div className="font-weight-bold gallery-event-center-location">
                            {venue.name}
                          </div>
                          <CardText className="gallery-event-center-location-subtext mb-2 ">
                            {venue.location}.
                          </CardText>
                        </div>
                      </Link>
                    </div>
                  </Card>

                  <Link
                    to={`/galleryDetails/` + venue._id}
                    className="gallery-card-web border-0 d-none d-sm-block"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="e">
                      <img
                        className="gallery-image-web"
                        width="100%"
                        src={venue.uploadedImg}
                        alt="event Venue"
                      />
                    </div>
                  </Link>
                </Col>

                <Col sm="6 mb-5 d-none d-sm-block">
                  <Link
                    to={`/galleryDetails/` + venue._id}
                    style={{ textDecoration: "none" }}
                    className="gallery-card-web  border-0 gallery-right"
                  >
                    <div className="gallery-body-image-text mt-1">
                      <div className="font-weight-bold mb-4">{venue.name}</div>
                      <CardText className="text-secondary"
                       style={{ textDecoration: "none" }}>
                        {venue.location}.
                      </CardText>
                    </div>
                    <CardText className="mt-4 gallery-center-details">
                      {" "}
                      <span className="gallery-center-details-smallScreen">
                        {venue.description}
                      </span>
                      <span className="gallery-center-details-bigScreen">
                        {venue.description}
                      </span>
                    </CardText>
                  </Link>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ReservedVenues;
