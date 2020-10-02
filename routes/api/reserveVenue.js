const express = require("express");
const router = express.Router();

const ReservedVenues = require("../../models/ReservedVenues");

router.get("/", async (req, res) => {
  ReservedVenues.find()
    .then((venues) => res.json(venues))
    .catch((error) => res.json("you have no reserved venues", error.message));
});

router.post("/", async (req, res) => {
  try {
    const {
      userId,
      firstName,
      lastName,
      name,
      location,
      email,
      date,
      venueId,
      uploadedImg,
      description,
    } = req.body;
    const venueData = {
      userId,
      firstName,
      lastName,
      name,
      location,
      email,
      date,
      venueId,
      uploadedImg,
      description,
    };

    const alreadyReservedDate = await ReservedVenues.findOne({
      date,
      venueId,
    }).lean();

    if (alreadyReservedDate) {
      return res.status(403).json({
        message: "Sorry, date already Reserved.",
      });
    }

    const reservedVenue = new ReservedVenues(venueData);
    const savedVenue = await reservedVenue.save();

    if (savedVenue) {
      res.status(200).json({
        message: "Venue reserved!",
      });
    } else {
      return res.status(400).json({
        message: "There was a problem reserving your venue",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json((error) => console.log(error.message));
  }
});

router.get("/reserved/:id", async (req, res) => {
  try {
    const reservedVenuesList = await ReservedVenues.find({
      userId: req.params.id,
    });

    if (reservedVenuesList){ res.send(reservedVenuesList)
      console.log(reservedVenueList);
    }
    else{ res.status(404).send({ message: "No Venue found" });}
  } catch (error) {
    error => error.message
    
  }
});

router.get("/", async (req, res) => {
  ReservedVenues.find()
    .then((venues) => res.json(venues))
    .catch((error) => res.json("you have no reserved venues", error.message));
});

module.exports = router;