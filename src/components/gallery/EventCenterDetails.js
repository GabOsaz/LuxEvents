import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsVenue } from "../../redux/actions/venueActions";

const EventCenterDetails = (props) => {
  const venueDetails = useSelector((state) => state.venueDetails);
  const { venue, loading, error } = venueDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsVenue(props.match.params.id));
    return () => {
      // cleanup
    };
  }, []);

  // console.log(props.match.params.id);

  return loading ? (
    <div className="loadingScreen"><div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div></div>
    
  ) : error ? (
    <div className="errorScreen">error</div>
  ) : (
    <div className="details">
      <h3 className="details-heading">Details</h3>

      <div className="event-details-mobile">
        <div className="event-details-mobile-upper-container">
          <div className="event-center-container">
            <img className="event-center-image" src={venue.image} alt="venue" />
          </div>
          <div className="event-details-button">
            <Link to="/request-reservation" style={{textDecoration: "none"}}>
              <button className="event-details-button-1">Book Now</button>
            </Link>
            <Link to="/calender" style={{textDecoration: "none"}}>
              <button className="event-details-button-2">Make Reservation</button>
            </Link>
          </div>
        </div>

        <div className="event-details-mobile-lower-container">
          <h3 className="details-heading"> Venue details</h3>
          <div className="event-details-sub">
            <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
            <div className="">
              <b>Price</b> <br /> {venue.price}
            </div>
          </div>
          <Link to="/calender" className="event-details-sub" style={{textDecoration: "none"}}>
            <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>

            <div className="">
              {" "}
              <b>Date</b> <br />
              {venue.date}{" "}
            </div>
          </Link>
          <div className="event-details-sub">
            <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>

            <div className="">
              <b>Guest Capacity</b> <br /> {venue.guestCapacity}{" "}
            </div>
          </div>
          <div className="event-details-sub">
            <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
            <div className="">
              <b>Service</b> <br />
              {venue.service}{" "}
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

          <div className="event-center-location"> MAP</div>
          <div className="event-details-sub">
            <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
            <div className="">
              <b>Style</b> <br /> {venue.style}{" "}
            </div>
          </div>

          <div className="event-center-description">
            <h3 className="details-heading"> Description</h3>{" "}
            {venue.descriptionMobile}{" "}
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
            <Link to="/calender" className="event-details-sub" style={{textDecoration: "none"}}>
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>

              <div className="">
                {" "}
                <b>Date</b> <br />
                {venue.date}{" "}
              </div>
            </Link>
            <div className="event-details-sub">
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>

              <div className="">
                <b>Guest Capacity</b> <br /> {venue.guestCapacity}{" "}
              </div>
            </div>
            <div className="event-details-sub">
              <icon>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </icon>
              <div className="">
                <b>Service</b> <br />
                {venue.service}{" "}
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

            <div className="event-center-location"> MAP</div>
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
              {/* <div className=""><b>amenities</b> <br/> {venue.amen.map((amenities) => 
            <div key="">{amenities }</div> )} </div> */}
            </div>
          </div>
        </div>

        <div className="event-center-details-right">
          <div className="event-center-details-right-container-web">
            <div className="event-center-container">
              <img
                className="event-center-image"
                src={venue.image}
                alt="venue"
              />
            </div>
            <div className="event-center-description">
              <h3 className=""> Description</h3> {venue.descriptionWeb}{" "}
            </div>
            <div className="event-details-button">
              <Link to="/request-reservation" style={{textDecoration: "none"}}>
                <button className="event-details-button-1">Book Now</button>
              </Link>
              <Link to="/calender" style={{textDecoration: "none"}}>
                <button className="event-details-button-2">Make Reservation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCenterDetails;
