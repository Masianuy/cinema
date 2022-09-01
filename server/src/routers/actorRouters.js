const Router = require('express');
const { createActor, 
        getActors, 
        updateActor, 
        getActorById, 
        deleteActor } = require('../controllers/actorController');

const router = new Router;

router.route('/actors')
.post(createActor)
.get(getActors)
.put(updateActor);

router.route('/actors/:id')
.get(getActorById)
.delete(deleteActor);

module.exports = router;