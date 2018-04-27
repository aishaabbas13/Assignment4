var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
mongoose.connect(process.env.DB);
//mongoose.connect(mongoDB);

//mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var movieSchema = new Schema
(
    {
        title:
            {
                type: String
            },
        yearReleased:
            {
                type: Number
            },
        genre:
            {
                type: String,
                enum: ["action", "adventure", "comedy", "drama", "fantasy", "horror", "mystery", "thriller", "western"],

            },
        actors:
             {
                type: Array
            }
    }
);
/*
movieSchema.methods.findAllMovies= function(callback)
{
    movieSchema.find().exec(function (err, movies)
    {
        if (movies === null) callback({msg: "Could not find movies"});
        else callback(movies);
    });
};
*/
module.exports = mongoose.model('movies', movieSchema);