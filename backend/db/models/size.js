'use strict';
module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Size', {
    size: DataTypes.STRING
  }, {});
  Size.associate = function(models) {
    // associations can be defined here
  };
  return Size;
};