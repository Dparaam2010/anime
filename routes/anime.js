const express = require('express');
const router = express.Router();

const animeCtrl = require('../controllers/anime');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', animeCtrl.index);
router.get('/new', ensureLoggedIn, animeCtrl.new);
router.get('/:id', animeCtrl.show);
router.post('/', ensureLoggedIn, animeCtrl.create);


module.exports = router;
