const Destination = require('../models/destination');

module.exports = {
    create: async (req, res) => {

        console.log("Destination Controller | Create | Body:", req.body);
        try {
            const { country, name, description } = req.body;
            const existing = await Destination.findOne({ name: name, country: country });
            if (!existing) {
                const destination = await Destination.create({
                    country,
                    name,
                    description,
                    rating: 0
                });
                await destination.save();
                console.log("Destination Controller | Create | Success");
                return res.status(200).json({ entity: destination });
            }

            await Destination.findOneAndUpdate({ _id: existing._id }, { rating: existing.rating + 1 });
            const updatedDest = await Destination.findById(existing._id);
            console.log("Destination Controller | Create | Destination already exists");
            return res.status(200).json({ entity: updatedDest });
        }
        catch (err) {
            console.error("Destination Controller | Create | ERROR:", err.message);
        }

        return res.status(500).json({ message: "Could not create the Destination entity" });
    },

    getByCountry: async (req, res) => {
        console.log("Destination Controller | GetByCountry | Start | Params:", req.params);
        try {
            const { country } = req.params;
            const destinations = await Destination.find({ country: country }, '_id name rating description');
            console.log("Destination Controller | GetByCountry | End | Params:", req.params);

            if (!destinations) {
                return res.status(401).json({ message: `No destinations were found with de country ${country}` });
            }

            return res.status(200).json({ destinations: destinations });
        }
        catch (err) {
            console.error("Destination Controller | GetByCountry | ERROR:", err.message);
        }

        return res.status(500).json({ message: "An error occured when trying to find destination by the country param" });
    },

    get: async (req, res) => {
        console.log("Destination Controller | Get | Start | Params:", req.params);
        const { id } = req.params;
        try {
            const destination = await Destination.findById(id);
            console.log("Destination Controller | Get | End | Params:", req.params);

            if (!destination) {
                return res.status(401).json({ message: `No destinations was found with de id: ${id}` });
            }

            return res.status(200).json({ entity: destination });
        }
        catch (err) {
            console.error("Destination Controller | Get | ERROR:", err.message);
        }

        return res.status(500).json({ message: `An error occured when trying to find destination by the id: ${id}` });
    }
}