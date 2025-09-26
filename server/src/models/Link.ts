import mongoose from "mongoose";
const LinkSchema = new mongoose.Schema({
   
    hash: String,

    
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
});
export const LinkModel = mongoose.model("Links", LinkSchema);