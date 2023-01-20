import mongoose from "mongoose";

// ORM (server - base de datos)
const Message = new mongoose.Schema({
    studentId: String,
    dressMakerId: { type: String, require: false },
    userType: String,
    dateCreated: Date,
    message: String,
});

export const MessageModel = mongoose.model('Messages', Message);
