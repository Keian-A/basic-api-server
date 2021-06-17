'use strict';

const express = require('express');
const router = express.Router();

router.get('/car', getAll);
router.get('/car/:carId', getOne);
router.post('/car', create);
router.put('/car/:carId', update);
router.delete('/car/:carId', remove);

module.exports = router;