const router = require("express").Router();
const Workout = require("../models/workout");

//get route to work with getLastWorkout function
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// put route to work with addExercise function
router.put("/api/workouts/:id", (req, res) => {
    const workout = new Workout(req.body);

    workout.totalDuration();
    console.log(workout);
    
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
                console.log("data:::: ", JSON.stringify(data, null,2))
                res.send(data);
            }
        }
    );
});

//post route to work with createWorkout function
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


//get route for getWorkoutsInRange function to get all workout data from back-end
router.get("/api/workouts/range", (req, res)=> {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;