const mongoose = require('mongoose')

const Item = new mongoose.Schema(
	{
		nom: { type: String, required: true },
		type: { type: String, required: true },
        description: { type: String, required: true },
		qte: { type: Number, required: true },
	},
)

const model = mongoose.model('Item', Item)

module.exports = model