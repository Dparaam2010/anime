require('dotenv').config();
require('./config/database');

const Anime = require('./models/anime');

(async function() {


  let result;

  console.log('BEGIN EXERCISES...')
  
  result =  await Anime.find({});
  console.log('1): ', result);
  
  result = await Anime.find({ mpaaRating: 'PG' });
  console.log('3): ', result);
  
  
  result = await Anime.find({ nowShowing: true });
  console.log('4): ', result);

  
  result = await Anime.where('mpaaRating').in(['PG', 'PG-13']);  
  console.log('5): ', result);

  result = await Anime.findOne({ releaseYear: 2018 });
  console.log('6): ', result);

  result = await Anime.find({ releaseYear: { $gt: 1980 } });  
  console.log('7): ', result);

  result = await Anime.find({ title: /^C/ }); 
  console.log('8): ', result);

  result = await Promise.all([
    Anime.findOne({ title: 'A Silent Voice' }),
    location.findOne({ name: 'Netflix' })
  ]);
  result[0].cast.push(result[1]);
  await result[0].save();
  console.log('12): ', result);
  
  
  process.exit();
})();
