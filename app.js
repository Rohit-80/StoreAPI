require('dotenv').config()
const express = require('express')
const app = express()
const errorhandler = require('./middlewaare/error-handler')
const notfound = require('./middlewaare/not-found')
const connectDB = require('./db/connect')
const produtrouter = require('./route/route')
// middleware
app.use(express.json())


// route
app.get('/',(req,res)=>{
    res.send('<h1> Store API</h1><a href="/api/v1/products"> Products route </a>')
})

app.use('/api/v1/products',produtrouter)

app.use(errorhandler)
app.use(notfound)


const PORT = process.env.PORT || 3000

const start = async () => { 
    try {
         // connect DB
         await connectDB(process.env.MONGO_URL)
         app.listen(3000,console.log(`Sever listening on port ${PORT}...`))
    } catch (e) {
        console.log(e)
    }
}

start()
