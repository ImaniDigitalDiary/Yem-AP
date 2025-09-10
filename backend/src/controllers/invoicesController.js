import Invoice from '../models/invoiceModel.js'
import Vendor from '../models/vendorModel.js'

// fxn to get all invoices under specific vendor
export async function getAllInvoicesByVendor(req,res, next) {
    try {
        // grab the vendorId
        const {vendorId} = req.params
        // find invoices by going into Invoice model, finding the vendorId value from invoice models vendor key
        // then populate only the vendorName value from the vendor key in my invoice model --> which pulls from ObjectId
        const invoices = await Invoice.find({vendor: vendorId}).populate('vendor', 'vendorName')
        res.status(200).json({message: 'Got all invoices successfully'})
    } catch (error) {
        console.error('Error in getAllInvoices controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}


export async function createInvoiceForVendor(req, res) {
    try {
        // grab the vendorId
        const {vendorId} = req.params
        // make sure a vendor exists under the vendorId that's grabbed
        // if vendor does not exist, 404 error with message 'vendor not found'
        // else, if vendor does exists, create a new invoice for that specific vendor
        if (!vendorId) {
            return res.status(404).json({message: 'Vendor not found'})
        } else {
            const invoice = await Invoice.create({
                ...req.body, //grabbing body for invoce model
                vendor: vendorId._id
            })
            res.status(201).json(invoice)
        }
    } catch (error) {
        console.error('Error in createInvoiceForVendor', error)
        res.status(500).json({message: 'Internal server error'})
    }
}




// export async function getInvoiceById() {

// }




// export async function updateInvoice() {

// }

// export async function deleteInvoice() {

// }