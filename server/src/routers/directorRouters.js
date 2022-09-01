const Router = require('express');
const { createDirector, 
        getDirectors, 
        updateDirector,
        deleteDirector,
        getDirectorById } = require('../controllers/directorController');

const router = new Router;

router.route('/directors')
.post(createDirector)
.get(getDirectors)
.put(updateDirector);

router.route('/director/:id')
.get(getDirectorById)
.delete(deleteDirector);

module.exports = router;