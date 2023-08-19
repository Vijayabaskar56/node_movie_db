const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    movie_name: {
        type: String,
        required: [true, "Movie name is required"]
    },
    info: {
        type: String,
        required: [true, "Info is required"]
    },
    rating: {
        type: Number,
        required: [true, "Reating is required"]
    },
    description: {
        type: String,
        required: [true, "Description is requried!!"]
    }
})

const movieModel = mongoose.model('movies', movieSchema);

module.exports = movieModel;