require('dotenv').config();

require('./config/database');

const Anime = require('./models/anime');

let anime = await Anime.find({});
console.log(anime);
