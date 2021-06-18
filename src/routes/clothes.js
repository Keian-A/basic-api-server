'use strict';

const express = require('express');
const router = express.Router();
const { clothes } = require('../models/index.js');

router.get('/clothes', async (req, res) => {
  let clothesGetReturn = await clothes.read();
  res.status(200).send(clothesGetReturn);
});
router.get('/clothes/:clothesId', async (req, res) => {
  let clothesGetReturn1 = await clothes.read(req.params.clothesId);
  res.status(200).send(clothesGetReturn1);
});
router.post('/clothes', async (req, res) => {
  let clothesPostReturn = await clothes.create(req.body);
  res.status(200).send(clothesPostReturn);
});
router.put('/clothes/:clothesId', async (req, res) => {
  let clothesPutReturn = await clothes.update(req.params.clothesId, req.body);
  res.status(200).send(clothesPutReturn);
});
router.delete('/clothes/:clothesId', async (req, res) => {
  let clothesDeleteReturn = await clothes.delete(req.params.clothesId);
  res.status(204).send(clothesDeleteReturn);
});

module.exports = router;