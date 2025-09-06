import express from 'express'
import vendorRoutes from './routes/vendorsRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// call the connectdb method
connectDB()

// middleware
app.use(express.json())

app.use('/api/vendors', vendorRoutes)

app.listen(PORT, () => {
    console.log('Server started on PORT: ', PORT)
})


