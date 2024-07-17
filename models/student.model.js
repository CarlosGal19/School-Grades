import mongoose from "mongoose";

const gradesSchema = new mongoose.Schema({
    math: {
        type: Number,
        required: true
    },
    languaje: {
        type: Number,
        required: true
    },
    chemistry: {
        type: Number,
        required: true
    }
});

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    grades: {
        type: gradesSchema,
        required: true
    }
});

const Student = mongoose.model('student', studentSchema);

export default Student;
