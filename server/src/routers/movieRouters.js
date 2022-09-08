const Router = require('express');
const { createMovie, 
        getMovies, 
        updateMovie, 
        getOneMovie, 
        deleteMovie } = require('../controllers/movieController');

const router = new Router();

router.route('/movies')
.post(createMovie)
.put(updateMovie)
.get(getMovies);

router.route('/movies/:id')
.get(getOneMovie)
.delete(deleteMovie);

module.exports = router;