const mongoose = require("mongoose")

const schema = mongoose.Schema({
    country: String,
	name: String,
    rating: Number,
    description: String,
})

module.exports = mongoose.model("Destination", schema)