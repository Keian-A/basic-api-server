'use strict';

const express = require('express');

const router = express.Router();

router.get('/people', getAll);
router.get('/people/:peopleId', getOne);
router.post('/people', create);
router.put('/people/:peopleId', update);
router.delete('/people/:peopleId', remove);

module.exports = router;