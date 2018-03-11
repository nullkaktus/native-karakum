import express, { Router } from 'express';
// Import index action from movies controller
import { getAllInfo } from './controllers/people';
var people_controller = require('./controllers/people');


// Initialize the router
const router = Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


// Handle /movies.json route with index action from movies controller
router.route('/people.json').get(getAllInfo);
router.route('/people').post(people_controller.createNewPerson);

export default router;