// Constants
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// CRUD Routes
// Read All Exercises
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

// Read One Exercise
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

// Create Exercise
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json(`New Exercise ${description} added successfully!`))
        .catch( err => res.status(400).json(`Error: ${err}`));
});

// Update Exercise
router.route('/update/:id').patch((req, res) => {
    Exercise.findByIdAndUpdate(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);
  
            exercise.save()
                .then(() => res.json(`Exercise successfully updated!`))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));

})

// Delete Exercise
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Exercise deleted.`))
        .catch(err => res.status(400).json(`Error: ${err}`));
})


// Export routes
module.exports = router;