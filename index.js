const express = require("express")
const mongoose = require("mongoose") // new

mongoose
	.connect("mongodb://localhost:27017/beautifulDestinations", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        const port = 3000
		app.listen(port, () => {
			console.log(`Server running in port: ${port}`)
		})
	})