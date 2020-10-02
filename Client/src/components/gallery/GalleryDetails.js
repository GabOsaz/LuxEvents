import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsVenue } from "../../redux/actions/venueActions";
import { AuthContext } from '../../context/AuthContext';
import ErrorPage from '../extras/ErrorPage';
import EventCenterMap from "./EventCenterMap";
import axios from "axios";


const GalleryDetails = (props) => {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const history = useHistory();
  const stateVenueDetails = useSelector((state) => state.venueDetails);
  const { venue, loading, error } = stateVenueDetails;
  const dispatch = useDispatch();
  const [ theVenue, setVenue ] = useState([]);
  console.log(theVenue._id);

  const authContext = useContext(AuthContext);
  const { venueDetails } = authContext;
  console.log('Clicked venue details >>>', venueDetails);

  useEffect(() => {
    const fetchDet = async () => {
      try {
        const { data } = await axios.get(`https://lux-client-api.herokuapp.com/api/gallery/${props.match.params.id}`);
        console.log(data._id);
        setVenue(data)
        dispatch(detailsVenue(props.match.params.id));
        
      } catch (error) {
        console.log(error)
      }
    }

    fetchDet();
    
    return () => {
      // cleanup
    };
  }, []);

  const handleReservation = () => {
    if(!userInfo) {
     return history.push('/SignIn');
    }
    history.push(`/request-reservation/${venue._id}`)
  }


  
  // console.log(props.match.params.id, "inside details");
  //   console.log(props.location.pathname.split("/")[2], "ID")
  //   const venueId = Number(props.location.pathname.split("/")[2])

  return loading ? (
    <div className="loadingScreen"><div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div></div>
   
  ) : error ? (
    <div className="errorScreen">{ErrorPage()}</div>
  ) : (
    // return  (
    <div className="details">
      <h3 className="details-heading">Details </h3>

      <div className="event-details-mobile">
        <div className="event-details-mobile-upper-container">
          <div className="event-center-container">
            <img className="event-center-image" src={venue.uploadedImg} alt="venue" />
          </div>
          <div className="event-details-button">
            <Link to={`/MainPayment/` + venue._id} style={{textDecoration: "none"}}>
              <button className="event-details-button-1">Book Now</button>
            </Link>
            <div style={{textDecoration: "none"}}>
              <button onClick={handleReservation} className="event-details-button-2">Make Reservation</button>
            </div>
          </div>
        </div>

        <div className="event-details-mobile-lower-container">
          <h3 className="details-heading"> Venue details</h3>
          <div className="event-details-sub">
            <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598954233/cstdh9xbazhtvldeli1h.svg" alt="data-icon" />
            </i>
            <div className="">
              <b>Price</b> <br /> {venue.price}
            </div>
          </div>
          <Link to={`/calender/` + venue._id}  className="event-details-sub" style={{textDecoration: "none"}}>
            <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598954415/iabl9cgttuqxb2sehhfz.svg" alt="data-icon" />
            </i>

            <div className="">
              {" "}
              <b>Date</b> <br />
              Check Available Dates
              {" "}
            </div>
          </Link>
          <div className="event-details-sub">
            <i>
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </i>

            <div className="">
              <b>Guest Capacity</b> <br /> {venue.capacity}{" "}
            </div>
          </div>
          <div className="event-details-sub">
            <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598954492/iaxv8rwu4o6xn5tyh3ea.svg" alt="data-icon" />
            </i>
            <div className="">
              <b>Service</b> <br />
              {venue.services}{" "}
            </div>
          </div>

          <div className="event-details-sub">
            <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598955252/jqvep5cfrzch1eq7n69p.svg" alt="data-icon" />
            </i>
            <div className="">
              <b>Location</b> <br /> {venue.location}{" "}
            </div>
          </div>

          <div className="event-center-location"> <EventCenterMap />  </div>
          <div className="event-details-sub">
            <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598955324/mgydp4qxnvhhvysmhvl4.svg" alt="data-icon" />
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
              <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598954233/cstdh9xbazhtvldeli1h.svg" alt="data-icon" />
            </i>
              <div className="">
                <b>Price</b> <br /> {venue.price}
              </div>
            </div>
            <Link to={`/calender/` + venue._id} className="event-details-sub" style={{textDecoration: "none"}}>
              <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598954415/iabl9cgttuqxb2sehhfz.svg" alt="data-icon" />
            </i>

              <div className="">
                {" "}
                <b>Date</b> <br />
                Check Available Dates
                {" "}
              </div>
            </Link>
            <div className="event-details-sub">
              <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1597655492/uvgnril2ikrvviqusksl.svg" alt="data-icon" />
            </i>

              <div className="">
                <b>Guest Capacity</b> <br /> {venue.capacity}{" "}
              </div>
            </div>
            <div className="event-details-sub">
              <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598954492/iaxv8rwu4o6xn5tyh3ea.svg" alt="data-icon" />
            </i>
              <div className="">
                <b>Service</b> <br />
                {venue.services}{" "}
              </div>
            </div>

            <div className="event-details-sub">
              <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598955252/jqvep5cfrzch1eq7n69p.svg" alt="data-icon" />
            </i>
              <div className="">
                <b>Location</b> <br /> {venue.location}{" "}
              </div>
            </div>

            <div className="event-center-location"> <EventCenterMap /> </div>
            <div className="event-details-sub">
              <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598955324/mgydp4qxnvhhvysmhvl4.svg" alt="data-icon" />
            </i>
              <div className="">
                <b>Style</b> <br /> {venue.style}{" "}
              </div>
            </div>

            <div className="event-details-sub">
              <i>
              
              <img className="event-details-icon" src="https://res.cloudinary.com/dsipecjov/image/upload/v1598955358/isdjrrssy7updgeghpb9.svg" alt="data-icon" />
            </i>
              <div className="amen">
              <b>amenities</b> 
               
              <div>{venue.amenities}</div>

             </div>
            
            </div>
          </div>
        </div>

        <div className="event-center-details-right">
          <div className="event-center-details-right-container-web">
            <div className="event-center-container">
              <img
                className="event-center-image"
                src={venue.uploadedImg}
                // src=''
                alt="venue"
              />
            </div>
            <div className="event-center-description">
              <h3 className=""> Description</h3> {venue.description}{" "}
            </div>
            <div className="event-details-button">
              <Link to={`/MainPayment/` + venue._id} style={{textDecoration: "none"}}>
                <button className="event-details-button-1">Book Now</button>
              </Link>
              <div style={{textDecoration: "none"}}>
                <button onClick={handleReservation} className="event-details-button-2">Request Reservation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetails;
