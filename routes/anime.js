const express = require('express');
const router = express.Router();

const animeCtrl = require('../controllers/anime');


router.get('/', animeCtrl.index);
router.get('/new', animeCtrl.new);
router.post('/', animeCtrl.create);


module.exports = router;
