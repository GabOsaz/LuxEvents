import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsVenue } from "../../redux/actions/venueActions";
import { AuthContext } from '../../context/AuthContext';
import ErrorPage from '../extras/ErrorPage';
import EventCenterMap from "./EventCenterMap";



const GalleryDetails = (props) => {
  const venueDetails = useSelector((state) => state.venueDetails);
  const { venue, loading, error } = venueDetails;
  const dispatch = useDispatch();
  console.log(venue)

//   const authContext = useContext(AuthContext);
//   const { details } = authContext;
//   console.log('Clicked venue details >>>', details);

  useEffect(() => {
    dispatch(detailsVenue(props.match.params.id));
    console.log(venue)
    return () => {
      // cleanup
    };
  }, []);

  console.log(props.match.params.id, "inside details");
        console.log(props.location.pathname.split("/")[2], "ID")
        const venueId = Number(props.location.pathname.split("/")[2])

  return loading ? (
    <div className="loadingScreen"><div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div></div>
    
  ) : error ? (
    <div className="errorScreen">{ErrorPage()}</div>
  ) : (
    // return  (
    <div className="details">
      <h3 className="details-heading">Details</h3>

      <div className="event-details-mobile">
        <div className="event-details-mobile-upper-container">
          <div className="event-center-container">
            <img className="event-center-image" src={venue.image} alt="venue" />
          </div>
          <div className="event-details-button">
            <Link to="/MainPayment" style={{textDecoration: "none"}}>
              <button className="event-details-button-1">Book Now</button>
            </Link>
            <Link to={`/request-reservation/` + venue._id} style={{textDecoration: "none"}}>
              <button className="event-details-button-2">Make Reservation</button>
            </Link>
          </div>
        </div>

        <div className="event-details-mobile-lower-container">
          <h3 className="details-heading"> Venue details</h3>
          <div className="event-details-sub">
            <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </i>
            <div className="">
              <b>Price</b> <br /> {venue.price}
            </div>
          </div>
          <Link to={`/calender/` + venue._id}  className="event-details-sub" style={{textDecoration: "none"}}>
            <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>

            <div className="">
              {" "}
              <b>Date</b> <br />
              {/* {venue.date}{" "} */}
              {" "}
            </div>
          </Link>
          <div className="event-details-sub">
            <icon>
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>

            <div className="">
              <b>Guest Capacity</b> <br /> {venue.capacity}{" "}
            </div>
          </div>
          <div className="event-details-sub">
            <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
            <div className="">
              <b>Service</b> <br />
              {venue.services}{" "}
            </div>
          </div>

          <div className="event-details-sub">
            <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
            <div className="">
              <b>Location</b> <br /> {venue.location}{" "}
            </div>
          </div>

          <div className="event-center-location"> <EventCenterMap />  </div>
          <div className="event-details-sub">
            <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </i>
            <div className="">
              <b>Style</b> <br /> {venue.style}{" "}
            </div>
          </div>

          <div className="event-center-description">
            <h3 className="details-heading"> Description</h3>{" "}
            {venue.description}{" "}
          </div>
        </div>
      </div>

      <div className="event-center-web">
        <div className="event-center-details-left">
          <div className="event-center-details-left-container-web">
            <h3 className="details-heading"> Venue details</h3>
            <div className="event-details-sub">
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
              <div className="">
                <b>Price</b> <br /> {venue.price}
              </div>
            </div>
            <Link to={`/calender/` + venue._id} className="event-details-sub" style={{textDecoration: "none"}}>
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>

              <div className="">
                {" "}
                <b>Date</b> <br />
                {/* {venue.date}{" "} */}
                {" "}
              </div>
            </Link>
            <div className="event-details-sub">
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>

              <div className="">
                <b>Guest Capacity</b> <br /> {venue.capacity}{" "}
              </div>
            </div>
            <div className="event-details-sub">
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
              <div className="">
                <b>Service</b> <br />
                {venue.services}{" "}
              </div>
            </div>

            <div className="event-details-sub">
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
              <div className="">
                <b>Location</b> <br /> {venue.location}{" "}
              </div>
            </div>

            <div className="event-center-location"> <EventCenterMap /></div>
            <div className="event-details-sub">
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
              <div className="">
                <b>Style</b> <br /> {venue.style}{" "}
              </div>
            </div>

            <div className="event-details-sub">
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
              {/* <div className=""><b>amenities</b> <br/> {venue.amenities.map((amenity) => 
            <div key={venue._id}>{amenity}</div> )} </div>
             */}
            </div>
          </div>
        </div>

        <div className="event-center-details-right">
          <div className="event-center-details-right-container-web">
            <div className="event-center-container">
              <img
                className="event-center-image"
                src={venue.image}
                // src=''
                alt="venue"
              />
            </div>
            <div className="event-center-description">
              <h3 className=""> Description</h3> {venue.description}{" "}
            </div>
            <div className="event-details-button">
              <Link to="/MainPayment" style={{textDecoration: "none"}}>
                <button className="event-details-button-1">Book Now</button>
              </Link>
              <Link to={`/request-reservation/` + venue._id} style={{textDecoration: "none"}}>
                <button className="event-details-button-2">request Reservation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetails;
