const { default: mongoose } = require("mongoose")


const getsingleMovie = async (req, res) => {
    const movieModel = mongoose.model('movies');


    const movieData = await movieModel.findOne({ _id: req.params.movie_id })

    res.status(200).json({
        status: "success!",
        data: movieData,
    })
}

module.exports = getsingleMovie