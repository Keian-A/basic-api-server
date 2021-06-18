'use strict';

const express = require('express');
const router = express.Router();
const { people } = require('../models/index.js');

router.get('/people', async (req, res) => {
  let peopleGetReturn = await people.read();
  res.status(200).send(peopleGetReturn);
});
router.get('/people/:peopleId', async (req, res) => {
  let peopleGetReturn1 = await people.read(req.params.peopleId);
  res.status(200).send(peopleGetReturn1);
});
router.post('/people', async (req, res) => {
  let peoplePostReturn = await people.create(req.body);
  res.status(200).send(peoplePostReturn);
});
router.put('/people/:peopleId', async (req, res) => {
  let peoplePutReturn = await people.update(req.params.peopleId);
  res.status(200).send(peoplePutReturn);
});
router.delete('/people/:peopleId', async (req, res) => {
  let peopleDeleteReturn = await people.delete(req.params.peopleId);
  res.status(204).send(peopleDeleteReturn);
});

module.exports = router;