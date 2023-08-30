const Anime = require('../models/anime');


module.exports = {
    new: newAnime,
    create,
    index,
    show,
    update,
    edit
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

  async function edit(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const anime = await Anime.findById(req.params.id);
    // Find the comment subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    // Render the comments/edit.ejs template, passing to it the comment
    res.render('anime/edit', { anime });
    
  }

  async function update(req, res) {
    try {
      const updatedAnime = await Anime.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        // update object with updated properties
        req.body,
        // options object {new: true} returns updated doc
        {new: true}
      );
      return res.redirect(`/anime/${updatedAnime._id}`);
    } catch (e) {
      console.log(e.message);
      return res.redirect('/anime');
    }
  }
  