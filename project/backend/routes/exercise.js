const router = require('express').Router();
let Exercises = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercises.find()
        .then(Exercise => res.json(Exercise))
        .catch(err => res.status(400).json('Error:' + err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date(req.body.date);


    const newExercise = new Exercises({ username, description, duration, date });

    newExercise.save()
        .then(() => res.json('Exercise Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;