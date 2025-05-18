const mongoose = require('mongoose');

const skillSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Programming Language', 'Framework', 'Database', 'Tool', 'Soft Skill', 'Other'],
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Proficiency level is required'],
    },
    yearsOfExperience: {
      type: Number,
      min: 0,
    },
    description: {
      type: String,
    },
    icon: {
      type: String, // URL or className for the icon
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Skill', skillSchema); 