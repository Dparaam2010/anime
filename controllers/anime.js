const Anime = require('../models/anime');


module.exports = {
    new: newAnime,
    create,
    index,
    show
  };

  async function index(req, res) {
    const anime = await Anime.find({});
    res.render('anime/index', { title: 'All Anime', anime });
  }

  async function show(req, res) {
    const anime = await Anime.findById(req.params.id);
    res.render('anime/show', { title: 'Anime Detail', anime});
  }

  function newAnime(req, res) {
    res.render('anime/new', { title: 'Add Anime', errorMsg: '' });
  }

  async function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing;
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    console.log(req.body);
    try {
      const anime = await Anime.create(req.body);
      res.redirect(`/anime/${anime._id}`);
    } catch (err) {
      console.log(err);
      res.render('anime/new', { errorMsg: err.message });
  }};