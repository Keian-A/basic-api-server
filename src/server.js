'use strict';

const express = require('express');
const cors = require('cors');
const peopleRoutes = require('./routes/people.js');
const clothesRoutes = require('./routes/clothes.js');

const app = express();

app.use(cors());
app.use(express.json());

// hook up Resouce routers
app.use(peopleRoutes);
app.use(clothesRoutes);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('app is running'));
  }
}