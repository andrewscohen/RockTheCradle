const express = require('express')
const asyncHandler = require('express-async-handler');
const { Product } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.findAll();
    res.json(products)
}))



module.exports = router;
