const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


router.get("api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        {
            _id: (req.params.id)
        },
        {
            $push: {
            exercises: req.body
            }   
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }

    );

});

module.exports = router;