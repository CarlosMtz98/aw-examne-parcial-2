const Country = require('../../models/Country');

module.exports = {
    create : async (req, res) =>{
        const { name, bio, website } = req.body;
        const Country = await Country.create({
            name
        })

        return res.send(Country)
    },

    read : async (req, res) => {
        const Country = await Country.find()
        return res.send(Country)
    },

    update : async (req, res) => {
       const { id } = req.params;
       const Country = await Country.findById(id).populate('destinations');

        res.send(Country.posts);
    }
}