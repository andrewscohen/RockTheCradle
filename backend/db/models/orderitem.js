'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    productQty: DataTypes.INTEGER,
    productPrice: DataTypes.NUMBER,
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {});
  OrderItem.associate = function(models) {
    // associations can be defined here
  };
  return OrderItem;
};