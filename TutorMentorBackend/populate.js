import mongoose from 'mongoose';
import People from './models/people';

const people = [
  {
    ID: 1,
    firstName: 'Adam',
    familyName: 'Black',
  },
  {
    ID: 2,
    firstName: 'Susanne',
    familyName: 'Green',
  },
   {
    ID: 3,
    firstName: 'Kate',
    familyName: 'White',
  },
   {
    ID: 4,
    firstName: 'Kirck',
    familyName: 'Oneself',
  },
   {
    ID: 5,
    firstName: 'Leile',
    familyName: 'Brown',
  },
   {
    ID: 6,
    firstName: 'Rose',
    familyName: 'Underwood',
  },
   {
    ID: 7,
    firstName: 'Dave',
    familyName: 'Sindell',
  }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/people');

// Go through each movie
movies.map(data => {
  // Initialize a model with movie data
  const movie = new People(data);
  // and save it into the database
  movie.save();
});