const express = require('express')
const router = express.Router()
const {getAllProduct,getAllProductStatic, CreateProduct } = require('../controller/controller')


router.route('/').get(getAllProduct).post(CreateProduct)
router.route('/static').get(getAllProductStatic)

module.exports = router;