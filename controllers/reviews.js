const Anime = require('../models/anime');

module.exports = {
  create,
  delete: deleteReview,
};

async function deleteReview(req, res) {
    const anime = await Anime.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    if (!anime) return res.redirect('/anime');
    anime.reviews.remove(req.params.id);
    await anime.save();
    res.redirect(`/anime/${anime._id}`);
  }
  
  async function create(req, res) {
    const anime = await Anime.findById(req.params.id);
  
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    anime.reviews.push(req.body);
    try {
      await anime.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/anime/${anime._id}`);
  }

  