const Router = require('express');
const { createStudio, 
        getStudios, 
        updateStudio,
        getStudioById,
        deleteStudio} = require('../controllers/studioController');

const router = new Router();

router.route('/studios')
.post(createStudio)
.get(getStudios)
.put(updateStudio)

router.route('/studios/:id')
.get(getStudioById)
.delete(deleteStudio);

module.exports = router;