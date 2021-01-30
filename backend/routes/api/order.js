const express = require('express')
const asyncHandler = require('express-async-handler');
const { Product, Order, OrderItem, User, Size } = require('../../db/models')

const router = express.Router();

// GET ALL ORDERS
router.get('/', asyncHandler(async (req, res) => {
    const orders = await Order.findAll();
    res.json(orders)
}))

// GET ONE ORDER
router.get('/:id', asyncHandler(async (req, res) => {
    const orderId = await parseInt(req.params.id, 10);
    const orderInfo = await Order.findByPk(orderId, {
        include: {
            model: OrderItem,
            include: {
                model: Product,
                include: {
                    model: Size,
                    through: {
                        attributes: ["inventoryNum"]
                    }
                }
            }

        }
    });
    res.json(orderInfo)
}))



module.exports = router;


// router.get('/:id', asyncHandler(async (req, res) => {
//     const orderId = await parseInt(req.params.id, 10);
//     const orderInfo = await Order.findByPk(orderId, {
//         include: [
//             {
//                 model: OrderItem,
//                 include: [
//                     {
//                         model: Product,
//                         include: [
//                             {
//                                 model: Size,
//                                 through: { attributes: "inventoryNum" }
//                             }
//                         ]
//                     }
//                 ]
//             },
//             { model: User }
//         ]
//     });
//     res.json(orderInfo)
// }))
