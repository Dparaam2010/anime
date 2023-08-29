const Anime = require('../models/anime');

module.exports = {
    new: newAnime,
    create,
    index
  };

  async function index(req, res) {
    const anime = await Anime.find({});
    res.render('anime/index', { anime });
  }

  function newAnime(req, res) {
	  res.render('anime/new', {errorMsg: ''} );
  };

  async function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove any whitespace at start and end of cast
    req.body.cast = req.body.cast.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    try {
      await Anime.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/anime/new');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('anime/new', { errorMsg: err.message });
    }
  }