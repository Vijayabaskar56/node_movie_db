const { default: mongoose } = require("mongoose");

const getallMovies = async (req, res) => {
    const movieModel = mongoose.model('movies')

    const movieData = await movieModel.find({});

    res.status(200).json({
        status: "succeded!",
        data: movieData,
    });
}

module.exports = getallMovies;