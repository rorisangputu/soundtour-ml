import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  phoneNumber: {
    type: String,        // Use String to accommodate the phone number format
    required: true,      // Make the field mandatory
    trim: true,          // Remove leading and trailing whitespace
    
  }
});

const User = mongoose.model("User", userSchema);

export default User;
