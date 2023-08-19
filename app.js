require('express-async-handler');

const express = require('express')


const app = express()

app.use(express.json());

require("dotenv").config()

// modules
const addMovie = require("./controller/add_movie")



// connect to mangoos

const mongoose = require('mongoose');
const getsingleMovie = require('./controller/getsingle_movie');
const getallMovies = require('./controller/getall_movie');
const updateMovie = require('./controller/update_movie');
const deleteMovie = require('./controller/delete_movie');
const movieRecommandation = require('./controller/movieRecommandation');
const errorhandler = require('./handler/errorhandler');

mongoose.connect(process.env.mangos_connection).then(() => {
    console.log(' mangoos is connected successfully')
}).catch(() => {
    console.log('error in the connection u moron')
})

// models

require('./models/movie.model');
// routes...

app.post("/api/movies", addMovie);
app.get("/api/movies/", getallMovies)
app.get('/api/movies/:movie_id', getsingleMovie)
app.patch("/api/movies/", updateMovie)
app.delete("/api/movies/:movie_id", deleteMovie)

app.use(errorhandler)

app.get('/api/movies/openai/getMovieRecommandation', movieRecommandation)
const PORT = 4000;
app.listen(PORT, 'localhost', () => {
    console.log(`App is Listening at http://localhost/${PORT}`)
})