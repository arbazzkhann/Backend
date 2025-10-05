const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name     is required."]
    },
    lastName: {
        type: String,
    },
    signupEmail: {
        type: String,
        required: [true, "Email is required."],
        unique: true
    },
    signupPassword: {
        type: String,
        required: [true, "Password is required"]
    },
    userType: {
        type: String,
        enum: ["guest", "host"],
        default: "guest"
    }
})

module.exports = mongoose.model("User", userSchema);