'use strict';

const express = require('express');
const cors = require('cors');
const peopleRoutes = require('./routes/people.js');

const app = express();

app.use(cors());
app.use(express.json());

// Resource routers
app.use(peopleRoutes);

module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => console.log('app is running'));
  },
}