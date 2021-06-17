'use strict';

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const People = require('./people.js');
const Clothes = require('./clothes.js');
const Collection = require('./collection.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL);

const people = People(sequelize, DataTypes);
const clothes = Clothes(sequelize, DataTypes);

// Collection instances
const peopleCollection = new Collection('people', people);
const clothesCollection = new Collection('clothes', clothes);

peopleCollection.createAssociation('hasMany', clothesCollection.model, { foreignKey: 'customerId', sourceKey: 'id' });
clothesCollection.createAssociation('belongsTo', peopleCollection.model, { foreignKey: 'customerId', targetKey: 'id' });

module.exports = {
  db: sequelize,
  people: people,
  clothes: clothes,
}