const products = require('../module/model')
// const {product} = require('../module/model')

const getAllProductStatic = async (req,res) => {
   res.status(200).json({msg:'product test route'})
}

const getAllProduct = async (req,res) => {
    res.status(200).json({msg:'productroute'})
 }

 const CreateProduct = async (req,res) => {
     const product = await products.create(req.body);
    res.status(200).json({product})
 }

 module.exports = {
     getAllProduct,
     getAllProductStatic,
     CreateProduct
 }