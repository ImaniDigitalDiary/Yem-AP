// a fxn to connect to the db
import mongoose from 'mongoose'

// connect to db with connection string
export const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB with URI:', process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI) 
        
        // console.log('Mongodb connected successfully')
    } catch (error) {
        console.error('error connecting to mongodb, error', error)
        process.exit(1) //exist with failure
    }
}