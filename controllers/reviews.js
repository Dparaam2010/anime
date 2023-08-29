const Anime = require('../models/anime');

module.exports = {
  create
};

async function create(req, res) {
  const anime = await Anime.findById(req.params.id);
  anime.reviews.push(req.body);
  try {
    await anime.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/anime/${anime._id}`);
}