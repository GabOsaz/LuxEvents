const express = require('express');
const router = express.Router();

const EventCenter = require('../../models/EventCenters');

router.get('/', async (req, res) => {
    try {
      const EventCenters = await EventCenter.find();
      if (!EventCenters) throw Error('No EventCenters');
  
      res.status(200).json(EventCenters);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
});


router.get("/:id", async (req, res) => {
  const Venue = await EventCenter.findById(req.params.id)

  try {
      
  if(Venue)
      res.send(Venue);
      
  else 
  res.status(404).send({message: "Venue not found"})
  
  } catch (error) {
      (error) => {error.message}
  }
});




router.post('/', async (req, res) => {
  try {
    const EventCenters = await EventCenter.find();
    if (!EventCenters) throw Error('No EventCenters');

    res.status(200).json(EventCenters);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});


module.exports = router;