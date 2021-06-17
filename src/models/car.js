'use strict';

const carModel = (sequelize, DataTypes) => {
  return sequelize.define('Car', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    manufacturer: {
      type: DataTypes.STRING,
      required: true
    }
  });
}

module.exports = carModel;