const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
    },
    technologies: [{
      type: String,
      required: [true, 'At least one technology is required'],
    }],
    image: {
      type: String, // URL to project image
    },
    demoLink: {
      type: String, // URL to live demo
    },
    sourceCodeLink: {
      type: String, // URL to source code repository
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      // Not required as it could be ongoing
    },
    isOngoing: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ['Web Development', 'Mobile Development', 'Data Science', 'Machine Learning', 'Other'],
    },
    highlights: [String], // Key achievements or features
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema); 