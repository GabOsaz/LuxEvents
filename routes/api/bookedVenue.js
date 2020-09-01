const express = require('express');
const router = express.Router();

const BookedVenues = require('../../models/BookedVenues');

router.post('/', async (req, res) => {
  
    try {
      const { firstName, lastName, email, date, venueId } = req.body;
      const venueData = {
        firstName,
        lastName,
        email,
        date,
        venueId
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


module.exports = router;