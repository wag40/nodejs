const express = require('express');
const router = express.Router();


const { getProducts } = require('../controller/productContorller')


router.route('/products').get(getProducts);


module.exports = router;