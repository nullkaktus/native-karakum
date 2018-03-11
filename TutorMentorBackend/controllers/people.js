import People from '../models/people';
import moment from 'moment';

// Hardcode the days for the sake of simplicity
//const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for the times
//const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

const word = "Hello";

export const getAllInfo = (req, res, next) => {
    // Find all movies and return json response
    People.find().lean().exec((err, movies) => res.json(
      // Iterate through each movie
      { movies: movies.map(movie => ({
        ...movie,
        word,     // and append days
      }))}
    ));
  };

  exports.createNewPerson = function(req, res) {
    console.log("Hello from createNewPerson");
    var person = new People();
    var t = People.find().sort('-ID').limit(1).exec(function (err, num) {
      console.log(num[0].ID);
    });
   

    person.firstName = req.firstName;
    person.familyName = req.familyName;
    person.ID = People.find().sort({ID: -1}).limit(1) + 1;
    res.send('Testing');
   /* person.save(function(err){
      if (err)
        res.send(err);

      console.log(person.familyName);
      res.json({message: "Person created"});
    }); */
  };