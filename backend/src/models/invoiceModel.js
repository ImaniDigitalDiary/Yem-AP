import mongoose from 'mongoose'

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String
    },
    invoiceUnits: {
        type: Number
    },
    // ObjectId is helping the invoice point to the vendor and saying 'hey i belong to this vendorName ...'
    vendorName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendorName'
    }
}, {timestamps: true})


const invoiceModel = mongoose.model('Invoice', invoiceSchema)

export default invoiceModel