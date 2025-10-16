import mongoose from 'mongoose'

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String
    },
    invoiceUnits: {
        type: String
    },
    // ObjectId is helping the invoice point to the vendor and saying 'hey i belong to this vendorName ...'
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true //ensure every invoice always belongs to a vendor
    },

}, {timestamps: true})


const invoiceModel = mongoose.model('Invoice', invoiceSchema)

export default invoiceModel