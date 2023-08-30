require('dotenv').config();
require('./config/database');

const Anime = require('./models/anime');

const data = require('./data');

(async function() {
  
  const p1 = Anime.deleteMany({});
  
  let results = await Promise.all([p1, p2]);
  
  console.log(results);

  results = await Promise.all([
    Anime.create(data.anime),
  ]);
  console.log('Created anime:', results[0]);

  results = await Promise.all([
   
    Anime.findOne({ title: /Seven / }),
  ]);
 
  const sevenDeadly = results[0];
  sevenDeadly.cast.push(seven._id);
  await sevenDeadly.save();
  console.log('Seven Deadly Sins', sevenDeadly);

  // Lastly, use process.exit() to "cleanly" shut down the Node program
  process.exit();
})();

