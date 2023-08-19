const { default: mongoose } = require("mongoose");
// const movieModel = require("../models/movie.model");

const updateMovie = async (req, res) => {
    const movieModel = mongoose.model("movies");

    const { movie_id, movie_name, rating, info, description } = req.body
    console.log(movie_id);
    try {
        if (!movie_id) throw "Movie id is requierd!!";
    } catch (error) {
        res.status(400).json({
            status: "failed!",
            message: error,
        })
        return;
    }

    try {
        await movieModel.updateOne({
            _id: movie_id
        }, {
            movie_name: movie_name,
            info: info,
            rating: rating,
            description: description,
        }, {
            runValidators: true,
        })
    } catch (error) {
        res.status(400).json({
            status: "failed!",
            message: error,
        })
        return;
    }

    res.status(200).json({
        status: "success!!",
        message: "Movie Updated Successfully!"
    })

}

module.exports = updateMovie