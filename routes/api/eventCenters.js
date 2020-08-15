const express = require('express');
const router = express.Router();

const EventCenter = require('../../models/EventCenters');

router.post('/', async (req, res) => {
    try {
      const { name } = req.body;
  
      const existingName = await EventCenter.findOne({
        name
      }).lean();
  
      if (existingName) {
        return res
          .status(400)
          .json({ message: 'Email already exists' });
      }
  
      const newCenter = new EventCenter(req.body);
      const savedCenter = await newCenter.save();
  
      if (savedCenter) {
        return res.json({
          message: 'Event center created!',
          savedCenter
        });
      } else {
        return res.status(400).json({
          message: 'There was a problem creating the Event Center'
        });
      }
    }
    catch (err) {
      return res.status(400).json({
        message: 'There was a problem creating the Event Center'
      });
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const center = await EventCenter.findById(req.params.id);
      if (!center) throw Error('No such event center found');
  
      const removed = await EventCenter.remove();
      if (!removed)
        throw Error('Something went wrong while trying to delete the event center');
  
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ msg: e.message, success: false });
    }
});

module.exports = router;