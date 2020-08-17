import React,{ useEffect} from "react";
import {Link }from "react-router-dom"
import { Card, CardText, Row, Col } from "reactstrap";
import {useSelector, useDispatch} from "react-redux"
import { listVenues } from "../../redux/actions/venueActions";



const Gallery = (props) => {

  const venueList = useSelector(state => state.venueList);
  const {venues, loading, error } = venueList;
  const dispatch = useDispatch()

  useEffect(() => {
   
    dispatch(listVenues());
    
    return () => {
      // cleanup
    }
  }, [])
  
  
  return (

    loading ?   <div className="loadingScreen"><div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div></div> : 
    error ? <div>error</div> :
    
   <div>

      
          <div className="gallery-body">
      <div className="container">
        <div className="gallery-heading ">
          <h4 className="text-center mt-3 mb-2 d-block d-sm-none  mobile-gallery-heading">
            Our Venues
          </h4>
          <h4 className="text-center mt-5 mb-5 heading-web d-none d-sm-block">
            Event Center Location
          </h4>
        </div>
        {
       venues.map((venue) =>
        <div className="container mobile-gallery-body" key={venue.id}>
          <Row className="red">
            <Col sm="6 mb-5">
              <Card
                body
                className="mobile-gallery-card border-0 d-block d-sm-none"
              >
                <Link to={`/event-center-details/` + venue.id} style={{textDecoration: "none"}} className ="mobile-gallery-border" style={{textDecoration: "none"}}>
                  <img
                    
                    width="100%"
                    className="mobile-gallery-image"
                    src={venue.image}
                    alt="event Venue"
                  />

                  <div className="container gallery-body-image-text mt-2">
                    <div className="font-weight-bold gallery-event-center-location">
                      {venue.venueName}
                    </div>
                    <CardText className="gallery-event-center-location-subtext mb-2 ">
                      {venue.location}
                    </CardText>
                  </div>

                </Link>
              </Card>


              <Link to={`/event-center-details/` + venue.id} className="gallery-card-web border-0 d-none d-sm-block" style={{textDecoration: "none"}}>
                <div className="e">
                  <img
                    className="gallery-image-web"
                    
                    width="100%"
                    src={venue.image}
                    alt="event Venue"
                  />
                </div>
              </Link>
             
            </Col>

            <Col sm="6 mb-5 d-none d-sm-block">
              <Link to={`/event-center-details/` + venue.id}
                style={{textDecoration: "none"}}
                className="gallery-card-web  border-0 gallery-right"
              >
                <div className="gallery-body-image-text mt-1">
                  <div className="font-weight-bold mb-4">
                    {venue.venueName}
                  </div>
                  <CardText className="text-secondary">{venue.venueLocation}</CardText>
                </div>
                <CardText className="mt-4 gallery-center-details">
                  {" "}
                  {/* Lorem ipsummassa. Etiam non quam lacus suspendisse faucibus
                  interdum posuere lorem. Est lorem ipsum dolor sit amet
                  Lorem ipsummassa. Etiam non quam lacus suspendisse faucibus
                  interdum posuere lorem. Est lorem ipsum dolor sit amet
                <span className="gallery-center-details-bigScreen">Lorem ipsummassa. Etiam non quam lacus suspendisse faucibus
                  interdum posuere lorem. Est lorem ipsum dolor sit amet
                  Lorem ipsummassa. Etiam non quam lacus suspendisse faucibus</span> */}
                {venue.descriptionMobile}
                <span className="gallery-center-details-bigScreen">
                {venue.descriptionWeb}
                </span>
                </CardText>
              </Link>
            </Col>
          </Row>
        </div>

        )
     }
      </div>
    </div>
          </div>  
  
    
  );
};

export default Gallery;
