import express from 'express'
// invoice controller
import { searchInvoicesByVendor, getInvoiceById, createInvoiceForVendor, updateInvoiceForVendor, deleteInvoiceForVendor } from '../controllers/invoicesController.js'

// mergeParams allows access to vendorId from the parent route vendorsRoutes.js
const invoiceRouter = express.Router({mergeParams: true})

// get all invoices for a specific vendor
// invoiceRouter.get('/', getAllInvoicesByVendor)

// search invoices for a specific vendor
invoiceRouter.get('/', searchInvoicesByVendor)

// get a single invoice for a specific vendor
invoiceRouter.get('/:invoiceId', getInvoiceById)

// create an invoice for a specific vendor  
invoiceRouter.post('/', createInvoiceForVendor)


// update an invoice for a specific vendor
invoiceRouter.put('/:invoiceId', updateInvoiceForVendor)

// delete an invoice for a specific vendor
invoiceRouter.delete('/:invoiceId', deleteInvoiceForVendor)


    
    
    


export default invoiceRouter