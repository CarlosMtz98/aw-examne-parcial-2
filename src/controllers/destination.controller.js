const Destination = require('../model/destination');
const Country = require('../model/country');

module.exports = {
    create : async (req, res) => {

        console.log(req.params);
        country = req.params;
        id = country.id;
        const { name, description, } = req.body;
        const Destination = await Destination.create({
            name,
            description,
            country:id
        });
        await Destination.save();

        const userById = await Country.findById(id);

        userById.Destinations.push(Destination);
        await userById.save();

        return res.send(userById);
    },
    userByDestination : async (req,res)=>{
        const { id } = req.params;
        const userByDestination = await Destination.findById(id).populate('country');
        res.send(userByDestination);
    }
}