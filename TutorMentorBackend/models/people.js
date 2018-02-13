import mongoose, { Schema } from 'mongoose';

// Define movie schema
var peopleSchema = new Schema({
  ID: {
    type: Number,
    unique: true,
  },
  firstName: String,
  familyName: String,
  mentors: Array,
  mentees: Array,
});

// Export Mongoose model
export default mongoose.model('People', peopleSchema);