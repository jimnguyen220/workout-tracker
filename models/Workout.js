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

});

workoutSchema.methods.totalDuration = function() {
    this.duration = `${this.exercises.duration}`

    return this.duration
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;