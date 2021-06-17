'use strict';

require('dotenv').config();

// connects to our database depending on the URI set as an environment variable, 
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const NODE_ENV = process.env.NODE_ENV;
const { Sequelize, DataTypes } = require('sequelize');
const people = require('./people.model.js');

// Configuration is environment dependent.  Where is our code running in "development" and "test" vs "deployed"?
let sequelize = new Sequelize(DATABASE_URL, NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {});

module.exports = {
  // exporting sequelize instance and Models configuring your data layer.
  db: sequelize,
  People: people(sequelize, DataTypes),
};