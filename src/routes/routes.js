const express = require('express');
const router = new express.Router;
const Country = require('../controllers/country.controller');
const Destination = require('../controllers/destination.controller');
// health chek
router.get('/',(req,res)=>res.send('ok'));
// Country routes
router.post('/country/create',Country.create);
router.post('/country/read',Country.find);
router.post('/country/read/destination/:id', Country.postsByUser);
// Destination routes
router.post('/destination/create/:id', Destination.create);
router.post('/destination/populate/:id',Destination.userByPost);

module.exports = router;