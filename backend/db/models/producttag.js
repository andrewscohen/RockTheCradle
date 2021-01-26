'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductTag = sequelize.define('ProductTag', {
    tagId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  ProductTag.associate = function(models) {
    // associations can be defined here
  };
  return ProductTag;
};