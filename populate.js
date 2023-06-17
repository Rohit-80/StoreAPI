require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./module/model')

const JsonProduct = require('./product.json');

const start = async ()=>{
    try{
       await connectDB(process.env.MONGO_URL)
       await Product.deleteMany();
       await Product.create(JsonProduct)
       console.log('success');
       process.exit(0)
    }catch(e){
        console.log(e);
        process.exit(1)
    }
}

start()