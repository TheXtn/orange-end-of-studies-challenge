const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isManager: { type: Boolean, default: false },
        createdAt: { type: Date, default: new Date() },
	},
)

const model = mongoose.model('UserData', User)

module.exports = model