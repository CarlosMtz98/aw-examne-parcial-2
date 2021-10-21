const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
    destination : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Destination'}
    ]
})

module.exports = mongoose.model("Country", schema)