///

const mongoose = require('mongoose');

const educationSchema = mongoose.Schema(
  {
    institution: {
      type: String,
      required: [true, 'Institution name is required'],
    },
    degree: {
      type: String,
      required: [true, 'Degree is required'],
    },
    field: {
      type: String,
      required: [true, 'Field of study is required'],
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      // Not required as it could be ongoing
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    isOngoing: {
      type: Boolean,
      default: false,
    },
    achievements: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Education', educationSchema); 