import React from "react";

import { Card, CardText, Row, Col } from "reactstrap";

const Gallery = () => {
  return (
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
        <div className="container mobile-gallery-body">
          <Row className="red">
            <Col sm="6 mb-4">
              <Card
                body
                className="mobile-gallery-card border-0 d-block d-sm-none"
              >
                <div className="mobile-gallery-border">
                  <img
                    
                    width="100%"
                    className="mobile-gallery-image"
                    src="https://res.cloudinary.com/dsipecjov/image/upload/v1591924577/dpl94k9kf4cb5o7fwska.jpg"
                    alt="event Venue"
                  />

                  <div className="container gallery-body-image-text mt-2">
                    <div className="font-weight-bold gallery-event-center-location">
                      Abuja Event Center
                    </div>
                    <CardText className="gallery-event-center-location-subtext mb-2 ">
                      Maitama, Abuja
                    </CardText>
                  </div>

                </div>
              </Card>


              <div className="gallery-card-web border-0 d-none d-sm-block">
                <div className="e">
                  <img
                    className="gallery-image-web"
                    
                    width="100%"
                    src="https://res.cloudinary.com/dsipecjov/image/upload/v1591924577/dpl94k9kf4cb5o7fwska.jpg"
                    alt="event Venue"
                  />
                </div>
              </div>
             
            </Col>

            <Col sm="6 mb-4 d-none d-sm-block">
              <div
                
                className="gallery-card-web  border-0 gallery-right"
              >
                <div className="gallery-body-image-text mt-1">
                  <div className="font-weight-bold mb-4">
                    Abuja Event Center
                  </div>
                  <CardText className="text-secondary">Maitama, Abuja</CardText>
                </div>
                <CardText className="mt-4 gallery-center-details">
                  {" "}
                  Lorem ipsummassa. Etiam non quam lacus suspendisse faucibus
                  interdum posuere lorem. Est lorem ipsum dolor sit amet
                  Lorem ipsummassa. Etiam non quam lacus suspendisse faucibus
                  interdum posuere lorem. Est lorem ipsum dolor sit amet
                <span className="gallery-center-details-bigScreen">Lorem ipsummassa. Etiam non quam lacus suspendisse faucibus
                  interdum posuere lorem. Est lorem ipsum dolor sit amet
                  Lorem ipsummassa. Etiam non quam lacus suspendisse faucibus</span>
                
                </CardText>
              </div>
            </Col>
          </Row>
        </div>

        
      </div>
    </div>
    
  );
};

export default Gallery;
