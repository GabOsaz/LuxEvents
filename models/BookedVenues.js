const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookedVenuesSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    uploadedImg: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      requires: true,
    },
    venueId: {
        type: String,
        required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type : String,
      required: true
    },
    register_date: {
      type: Date,
      default: Date.now
    }
});

module.exports = BookedVenues = mongoose.model('bookedVenues', BookedVenuesSchema)