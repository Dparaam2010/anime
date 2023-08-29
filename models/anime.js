const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 1927
  },
  mpaaRating: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  cast: [String],
  nowShowing: { type: Boolean, default: true }
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('anime', animeSchema);


// // optional shortcut to the mongoose.Schema class
// const Schema = mongoose.Schema;

// const animeSchema = new Schema({
//         title: String,
//         nowShowing: Boolean,
//         releaseYear: Number,
//         mpaaRating: String,
//         cast: [String]

// } ,{
//     timestamps: true
// });


// module.exports = mongoose.model('Anime', animeSchema);

