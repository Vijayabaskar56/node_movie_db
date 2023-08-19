const { default: mongoose } = require("mongoose");

const addMovie = async (req, res) => {

    const moviesModel = mongoose.model('movies');

    // validation...

    const { movie_name, info, rating, description } = req.body

    if (!movie_name) throw "Moive name is required!";
    if (!info) throw "inof of the movie is required!";
    if (!rating) throw "rating is required!";
    if (rating < 1 || rating > 10) throw 'rating must be in the range of 1-10';



    // success
    await moviesModel.create({
        movie_name: movie_name,
        info: info,
        rating: rating,
        description: description
    })




    res.status(200).json({
        status: "Movie is added"
    })
}

module.exports = addMovie;