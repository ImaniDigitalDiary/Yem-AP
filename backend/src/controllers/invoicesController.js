import Invoice from '../models/invoiceModel.js'
import Vendor from '../models/vendorModel.js'

// fxn to get all invoices under specific vendor
export async function getAllInvoicesByVendor(req,res, next) {
    try {
        // grab the vendorId
        const {vendorId} = req.params

        // check to see if vendor exists
        const vendor = await Vendor.findById(vendorId)
        if (!vendor) {
            return res.status(404).json({message: 'Vendor not found'})
        }

        // find invoices by going into Invoice model, finding the vendorId value from invoice models vendor key
        // then populate only the vendorName value from the vendor key in my invoice model --> which pulls from ObjectId
        const invoices = await Invoice.find({vendor: vendorId}).populate('vendor', 'vendorName vendorEmail')
        res.status(200).json(invoices)
    } catch (error) {
        console.error('Error in getAllInvoices controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}



// fxn to create an invoice under a specific vendorId
export async function createInvoiceForVendor(req, res) {
    try {
        // grab the vendorId
        const {vendorId} = req.params
        
        const vendor = await Vendor.findById(vendorId)
        if (!vendor) {
            return res.status(404).json({message: 'Vendor not found'})
        }

        // create an invoice and link it to the vendor found
        let invoice = await Invoice.create({
            ...req.body, //grabbing body from invoce model
            vendor: vendorId
        })

        // populate the vendor info before sending back
        invoice = await invoice.populate('vendor', 'vendorName vendorEmail')
        res.status(201).json(invoice)
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