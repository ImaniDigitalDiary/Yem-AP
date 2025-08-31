// Express app setup

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import vendorRoutes from './routes/vendorRoutes'
import invoiceRoutes from './routes/invoiceRoutes'
import errorHandler from './middleware/errorHandler'


const app = express()


// MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// ROUTES
app.use('/api/vendors', vendorRoutes)
app.use('api/invoices', invoiceRoutes)

// ERROR HANDLER
app.use(errorHandler)


export default app;