const router = require("express").Router();
const Workout = require("../models/workout");

router.put("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.put("/api/workouts/bulk", ({body}, res) => {
//     Workout.insertMany(body)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });

router.get("api/workouts", (req, res) => {
    Workout.find({})
    .sort({date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/:id", (req, res) => {
    Workout.findOne(
        {
            _id: (req.params.id)
        },
        (error, data) => {
            if (error) {
                res.send(error)
            } else {
                res.send(data);
            }
        }
    );
});

module.exports = router;