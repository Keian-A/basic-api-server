'use strict';

const People = (sequelize, DataTypes) => {
  return sequelize.define('People', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
}

module.exports = People;