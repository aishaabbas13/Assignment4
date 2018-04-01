var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
mongoose.connect(process.env.DB);
//mongoose.connect(mongoDB);

//mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var reviewSchema = new Schema
(
    {
        movTitle:
            {
                type: String
            },
        reviewer:
            {
                type: String
            },
        quote:
            {
                type: String

            },
        rating:
            {
                type: Number,
                min: 1,
                max: 5
            }
    }
);

module.exports = mongoose.model('reviews', reviewSchema);