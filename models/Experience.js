const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Company name is required'],
    },
    position: {
      type: String,
      required: [true, 'Position/title is required'],
    },
    location: {
      type: String,
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      // Not required as it could be current position
    },
    isCurrentPosition: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: [true, 'Job description is required'],
    },
    responsibilities: [String],
    achievements: [String],
    technologies: [String], // Technologies used in this role
    companyLogo: {
      type: String, // URL to company logo
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Experience', experienceSchema); 