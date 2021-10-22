const express = require('express');
const router = new express.Router;
const Destination = require('../controllers/destination.controller');
// health chek
router.get('/',(req, res)=>res.send('ok'));
// Country routes
router.post('/destination/', Destination.create);
router.get('/destination/:id', Destination.get);
router.get('/destination/by/:country', Destination.getByCountry);

module.exports = router;