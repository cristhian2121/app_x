import mongoose from "mongoose";

const Message = new mongoose.Schema({
    studentId: String,
    dressMakerId: String,
    userType: String,
    dateCreated: Date,
    message: String,
});

export const MessageModel = mongoose.model('Messages', Message);
