const express = require('express');
const router = express.Router();

const ReservedVenues = require('../../models/ReservedVenues');



router.get("/", async (req, res) => {
  ReservedVenues.find()
    .then((venues) => res.json(venues))
    .catch((error) => res.json("you have no reserved venues", error.message));
});




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
  
      const alreadyReservedDate = await ReservedVenues.findOne({
        date, venueId
      }).lean();
  
      if (alreadyReservedDate) {
        return res.status(403).json({
          message: 'Sorry, date already Reserved.'
        });
      }

      const reservedVenue = new ReservedVenues(venueData);
      const savedVenue = await reservedVenue.save();

      if (savedVenue) {
        res.status(200).json({
        message: 'Venue reserved!'
        });
      } else {
        return res.status(400).json({
            message: 'There was a problem reserving your venue'
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








// const express = require('express');
// const router = express.Router();
// const User = require('../../models/User');

// const ReservedVenues = require('../../models/ReservedVenues');



// router.get("/", async (req, res) => {

//   User.find()
//   .then((users) => res.json(users))
//   .catch((error) => res.json("error from res", error));

//   ReservedVenues.find()
//     .then((venues) => res.json(venues))
//     .catch((error) => res.json("you have no reserved venues", error.message));

//   const Venue = await EventCenter.findById(req.params.id)

//   try {
      
//   if(Venue)
//       res.send(Venue);
      
//   else 
//   res.status(404).send({message: "Venue not found"})
  
//   } catch (error) {
//       (error) => {error.message}
//   }
// });




// router.post('/', async (req, res) => {
  
//     try {
//         const { firstName, lastName, email, date, venueId } = req.body;
//         const venueData = {
//           firstName,
//           lastName,
//           email,
//           date,
//           venueId
//         }
  
//       const alreadyReservedDate = await ReservedVenues.findOne({
//         date, venueId
//       }).lean();
  
//       if (alreadyReservedDate) {
//         return res.status(403).json({
//           message: 'Sorry, date already Reserved.'
//         });
//       }

//       const reservedVenue = new ReservedVenues(venueData);
//       const savedVenue = await reservedVenue.save();

//       if (savedVenue) {
//         res.status(200).json({
//         message: 'Venue reserved!'
//         });
//       } else {
//         return res.status(400).json({
//             message: 'There was a problem reserving your venue'
//         });
//       }
      
//     } catch (err) {
//       console.log(err);
//       return res
//         .status(400)
//         .json({ message: 'Something went wrong.'});
//     }
// });


// module.exports = router;