const { default: mongoose } = require("mongoose")

const deleteMovie = async (req, res) => {
    const movieModel = mongoose.model("movies");

    const movie_id = req.params.movie_id;


    try {
        const getMovie = await movieModel.findOne({
            _id: movie_id,
        });
        if (!getMovie) throw "Movie Does not Exites"
    } catch (e) {
        res.status(400).json({
            status: "failed!",
            message: e,
        })
        return;
    }

    try {
        await movieModel.deleteOne({
            _id: movie_id,
        })
    } catch (error) {
        res.status(400).json({
            status: "failed!",
            message: error.message,
        })
        return;
    }

    res.status(200).json({
        status: "SuccessFull!!",
        message: "Movie Deleted SuccessFullly!"
    })
}

module.exports = deleteMovie;