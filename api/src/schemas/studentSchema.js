import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    // roll_no: Number,
    firstName: String,
    lastName: { type: String, require: false },
    nickName: String,
    gender: { type: String, require: false },
    shirtSize: String,
    password: String,
    deliveryDate: { type: String, require: false },
    // messages: [{
    //     userId: String,
    //     dateCreated: Date,
    //     message: String,
    // }]
});

export const StudentModel = mongoose.model('Student', StudentSchema);
