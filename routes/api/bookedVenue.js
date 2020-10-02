const express = require('express');
const router = express.Router();

const BookedVenues = require('../../models/BookedVenues');




router.get("/", async (req, res) => {
  BookedVenues.find()
    .then((venues) => res.json(venues))
    .catch((error) => res.json("you have no reserved venues", error.message));
});




router.post('/', async (req, res) => {
 
  
    try {
      // const venueId = req.params.id
      const {   
    userId,
    firstName,
    lastName,
    // name,
    // location,
    email,
    venueId,
    date,
    // uploadedImg,
    // description 
  } = req.body;

    const venueData =   {
      userId,
    firstName,
    lastName,
    // name,
    // location,
    email,
    date,
    venueId
    // uploadedImg,
    // description
    }
  
      const alreadyBookedDate = await BookedVenues.findOne({
        date, venueId
      }).lean();
  
      if (alreadyBookedDate) {
        return res.status(403).json({
          message: 'Sorry, date already Booked.'
        });
      }

      const bookedVenue = new BookedVenues(venueData);
      const savedVenue = await bookedVenue.save();

      if (savedVenue) {
        console.log(savedVenue);
        res.status(200).json({
        message: 'Venue Booked!'
        });
      } else {
        return res.status(400).json({
            message: 'There was a problem booking your venue'
        });
      }
      
    } catch (err) {
      console.log(err);
      return res
        .status(400)
        .json({ message: 'Something went wrong.'});
    }
});


const EventCenter = require('../../models/EventCenters');

router.get("/booked/:id", async (req, res) => {
  try {
    const bookedVenueList = await BookedVenues.find({
      userId: req.params.id,
    });

    if (bookedVenueList){ res.send(bookedVenueList)
      console.log(bookedVenueList);
    }
    else{ res.status(404).send({ message: "No Venue found" });}
  } catch (error) {
    error => error.message
    
  }
});


module.exports = router;