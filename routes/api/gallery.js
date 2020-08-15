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