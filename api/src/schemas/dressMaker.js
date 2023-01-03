import mongoose from "mongoose";

const DressMaker = new mongoose.Schema({
    firstName: String,
    lastName: String,
    nickName: String,
    password: String,
});

export const DressMakerModel = mongoose.model('DressMaker', DressMaker);
