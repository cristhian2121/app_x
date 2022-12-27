import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    // roll_no: Number,
    name: String,
    year: Number,
    subjects: [String]
});

export const StudentModel = mongoose.model('Student', StudentSchema);
