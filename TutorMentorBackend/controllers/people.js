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
      person.ID = num[0].ID + 1;
    });
    person.firstName = req.firstName;
    person.familyName = req.familyName;
    //person.ID = People.find().sort({ID: -1}).limit(1) + 1;
    person.save(function(err){
      if (err)
        res.send(err);

      console.log(person.familyName);
      res.json({message: "Person created"});
    }); 
  };

exports.getPerson = function(req, res) {
    People.findById(req.params.person_id, function(err, person) {
        if (err)
            res.send(err);
        res.json(person);
    });
};

exports.updatePerson = function(req, res) {

  People.findById(req.params.person_id, function(err, person) {

      if (err)
          res.send(err);

      person.firstName = req.firstName;  // update the bears info

      // save the bear
      person.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'Person updated!' });
      });

  })};

  exports.addMentor = function(req, res){
    People.findById(req.params.person_id, function(err, person){
      if (err)
        res.send(err);
      person.mentors.push(req.params.mentor_id);
      person.save(function(err){
        if(err)
          res.send(err);

        res.json({message: 'Mentor added!'});
      });
    })
  };

  exports.deletePerson = function (req, res){
    People.remove({
      _id: req.params.person_id
      }, function(err, bear) {
          if (err)
            res.send(err);

          res.json({ message: 'Successfully deleted' });
        });
  };