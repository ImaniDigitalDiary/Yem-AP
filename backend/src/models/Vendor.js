import mongoose from 'mongoose';

// 1 - create a schema
// 2 - then create a model based off that schema

// 1 - create a schema
const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String, 
        required: true
    },
    vendorEmail: {
        type: String,
        required: true
    },
    
}, {timestamps: true}) //mongo by default will give you createdAt, updatedAt



// 2 - then create a model based off that schema
const vendorModel = mongoose.model('Vendor', vendorSchema)

export default vendorModel