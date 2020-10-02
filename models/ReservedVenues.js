const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservedVenuesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  venueId: {
    type: String,
    required: true,
  },
  uploadedImg: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    requires: true,
  },
});

module.exports = ReservedVenues = mongoose.model(
  "reservedVenues",
  ReservedVenuesSchema
);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ReservedVenuesSchema = new Schema({
//     user: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "user"
//     },
//   firstName: {
//       type: String,
//       required: true
//     },
//     lastName: {
//       type: String,
//       required: true
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true
//     },
//     venueId: {
//         type: String,
//         ref: "eventCenter"
//     },
//     image: {
//       type: String,
//       required: true
//   },
//   description: {
//     type: String,
//     required: true
// },
//     date: {
//       type: String,
//       required: true
//     },
//     register_date: {
//       type: Date,
//       default: Date.now
//     },
//     availability: {
//       type: Boolean
//     }
// });

// module.exports = ReservedVenues = mongoose.model('reservedVenues', ReservedVenuesSchema)
