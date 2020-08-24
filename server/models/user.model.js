const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

// const reagan = new User (req.body = {
// 	name: 'Reagan',
// 	age: 19
// });

module.exports = User;