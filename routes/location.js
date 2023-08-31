const express = require('express');
const router = express.Router();
const locationCtrl = require('../controllers/location');

// This router is mounted to a "starts with" path of '/'

router.get('/location/new', locationCtrl.new);
router.post('/location', locationCtrl.create);
router.post('/anime/:id/location', locationCtrl.addToCast);

module.exports = router;