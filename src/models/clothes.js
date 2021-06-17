'use strict';

const Clothes = (sequelize, DataTypes) => {
  return sequelize.define('Clothes', {
    clothing: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
}

module.exports = Clothes;