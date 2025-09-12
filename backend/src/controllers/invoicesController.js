import Invoice from '../models/invoiceModel.js'
import Vendor from '../models/vendorModel.js'

// fxn to get all invoices under specific vendor
export async function getAllInvoicesByVendor(req,res, next) {
    try {
        // grab the vendorId
        const {vendorId} = req.params

        // check to see if vendor exists
        const vendor = await Vendor.findById(vendorId)
        if (!vendor) return res.status(404).json({message: 'Vendor not found'})

        // find invoices by going into Invoice model, finding the vendorId value from invoice models vendor key
        // then populate only the vendorName value from the vendor key in my invoice model --> which pulls from ObjectId
        const invoices = await Invoice.find({vendor: vendorId}).populate('vendor', 'vendorName vendorEmail')
        res.status(200).json(invoices)
    } catch (error) {
        console.error('Error in getAllInvoices controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}



export async function getInvoiceById(req, res) {
    try {
    // 1. grab vendorId and invoiceId
        const {vendorId, invoiceId} = req.params
        

    // 2. check if vendor exists
        const vendor = await Vendor.findById(vendorId)
        if (!vendor) {
            return res.status(404).json({message: 'Vendor not found'})
        }

    // 3. check if invoice exists - find invoice by ID & populate vendor
        const invoice = await Invoice.findById(invoiceId).populate('vendor', 'vendorName vendorEmail')
        if (!invoice) {
            return res.status(404).json({message: 'Invoice not found'})
        }

    // 3. check to see if the invoice belonds to vendor - invoice.vendor && ... is stating to only run the comparison if the vendor exists
    // invoice.vendor._id is a MongoDB ObjectId but my req.params.vendorId is a plain string coming from my URL
    // to compare the ObjectId to the req.params.vendorId (string), call .toString() on my ObjectId to convert the ObjectId to a string for comparison
    // !== vendorId is saying if invoice's vendor does not match the vendorId in the URL (params), then the invoice doesn't belong to this vendor
        if (invoice.vendor && invoice.vendor._id.toString() !== vendorId) {
            return res.status(404).json({message: 'Invoice not found for this vendor'})
        }

    // 4. return the invoice under specific invoiceId
        res.status(200).json(invoice)
    } catch (error) {
        console.error('Error in getInvoiceById controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}



// fxn to create an invoice under a specific vendorId
export async function createInvoiceForVendor(req, res) {
    try {
    // 1. grab the vendorId
        const {vendorId} = req.params
        
        const vendor = await Vendor.findById(vendorId)
        if (!vendor) return res.status(404).json({message: 'Vendor not found'})

    // 2. create an invoice and link it to the vendor found
        let invoice = await Invoice.create({
            ...req.body, //grabbing body from invoce model
            vendor: vendorId
        })

    // 3. populate the vendor info before sending back
        invoice = await invoice.populate('vendor', 'vendorName vendorEmail')
        res.status(201).json(invoice)
    } catch (error) {
        console.error('Error in createInvoiceForVendor controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}




export async function updateInvoiceForVendor(req, res) {
    
    try {  
    // 1. grab vendorId and invoiceId
        const {vendorId, invoiceId} = req.params

    // 2. check if vendor exists
    const vendor = await Vendor.findById(vendorId)
    if (!vendor) {
        return res.status(404).json({message: 'Vednor not found'})
    }

    // 3. find invoice and populate vendor info
    const invoice = await Invoice.findById(invoiceId).populate('vendor', 'vendorName vendorEmail')
    if (!invoice) {
        return res.status(404).json({message: 'Invoice not found'})
    }

    // 4. check to see if the invoice belonds to vendor - invoice.vendor && ... is stating to only run the comparison if the vendor exists
    // invoice.vendor._id is a MongoDB ObjectId but my req.params.vendorId is a plain string coming from my URL
    // to compare the ObjectId to the req.params.vendorId (string), call .toString() on my ObjectId to convert the ObjectId to a string for comparison
    // !== vendorId is saying if invoice's vendor does not match the vendorId in the URL (params), then the invoice doesn't belong to this vendor
    if (invoice.vendor && invoice.vendor._id.toString() !== vendorId) {
        return res.status(403).json({message: 'Unable to update invoice'})
    }



    // 5. Update the invoice
    // invoice = updatedInvoice

    const updatedInvoice = await Invoice.findByIdAndUpdate(
        invoiceId,
        req.body,
        {   
            new: true, //ensures to return data AFTER the update 
            runValidators: true //used to enforce schema validation rules during an update operation
        }, 
    )

    if(!updatedInvoice) {
        return res.status(404).json({message: 'Vendor not found'})
    }

    res.status(200).json(updatedInvoice)

    } catch (error) {
        console.error('Error in findByIdAndUpdate controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}







export async function deleteInvoiceForVendor(req, res) {
    try {
    // 1. grab vendorId and invoiceId
    const {vendorId, invoiceId} = req.params
    
    // 2. Check if vendor exists
    const vendor = await Vendor.findById(vendorId)
    if (!vendor) {
        return res.status(404).json({message: 'Vendor not found'})
    }

    // 3. Find invoice by id & populate vendor info
    const invoice = await Invoice.findById(invoiceId).populate('vendor', 'vendorName vendorEmail')
    if (!invoice) {
        return res.status(404).json({message: 'Invoice not found'})
    }

    // 4. Ensure the invoice belongs to the vendor
    // if the invoice.vendor (which are the strings from .populate() - && if the invoice.vendor. ObjectId which is an object id from Invoice Model IS NOT EQUAL TO the vendorId param(cannot be located), return err
    if (invoice.vendor && invoice.vendor._id.toString() !== vendorId) {
        return res.status(403).json({message: 'Unable to delete invoice'})
    }

   
    // 5. Delete the invoice
    await Invoice.findByIdAndDelete(invoiceId) 
 

    res.status(200).json({message: 'Invoice deleted successfully'})
    } catch (error) {
        console.error('Error in deleteInvoiceForVendor controller', error)
        res.status(500).json({message: 'Interal server error'})

    }

}