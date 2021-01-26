'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderDate: DataTypes.DATE,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    orderTotal: DataTypes.NUMBER,
    userId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};