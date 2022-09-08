const Router = require('express');
const { createStudio, 
        getStudios, 
        updateStudio,
        getStudioById,
        deleteStudio} = require('../controllers/studioController');

const router = new Router();

router.route('/studios')
.get(getStudios)
.put(updateStudio)
.post(createStudio)

router.route('/studios/:id')
.get(getStudioById)
.delete(deleteStudio);

module.exports = router; 