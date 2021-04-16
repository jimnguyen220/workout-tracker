const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter 'resistance' or 'cardio'"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter your exercise name"
            },
            duration: {
                type: Number,
                required: "Please enter duration (in minutes) for exercise"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ],

},
{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
});



workoutSchema.virtual("totalDuration").get(function () {
    let duration = 0;
    this.exercises.forEach(element => {
      duration += element.duration;
    });
    return duration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;