// PACKAGING IMPORTS
import express from 'express'
import cors from 'cors'

// ROUTES
import vendorRoutes from './routes/vendorsRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'



dotenv.config()

const app = express()
const PORT = process.env.PORT || 5003



// MIDDLEWARE - order of middleware is IMP!
// cors package / cors method - goes b4 ratelimiter bc we're trying to send a response back
app.use(
    cors({
        origin: 'http://localhost:5173',
}))
// app.use to add middleware
app.use(express.json()) // this middleware will parson the JSON bodies: req.body (get access to req.body) without this middleware, my req will come out as undefined
// Redis ratelimit middleware
app.use(rateLimiter)



// our simple custom middleware**
// app.use((req, res, next) => {
//     console.log(`Req method is  ${req.method} & Req URL is ${req.url}`) // in the console log, this translates to 'Req method is GET & Req URL is /api.vendors/
//     next() //the next fxnin this care, it's getAllVendors 
// })


// vendor api routes
app.use('/api/vendors', vendorRoutes)


// call the connectdb method to connect to mongodb, once it's connected then listen on PORT
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server started on PORT: ', PORT)
    })
})



