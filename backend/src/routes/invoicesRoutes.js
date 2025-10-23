import express from 'express'
// invoice controller
import { searchInvoicesByVendor, getAllInvoicesByVendor, getInvoiceById, createInvoiceForVendor, updateInvoiceForVendor, deleteInvoiceForVendor } from '../controllers/invoicesController.js'

// mergeParams allows access to vendorId from the parent route vendorsRoutes.js
const invoiceRouter = express.Router({mergeParams: true})

// search invoices for a specific vendor - works as get al endpoint that fetches all invoices under a vendor as well as search for invoices under a specific vendor
invoiceRouter.get('/search', searchInvoicesByVendor)

// get all invoices for a specific vendor
invoiceRouter.get('/', getAllInvoicesByVendor)

// get a single invoice for a specific vendor
invoiceRouter.get('/:invoiceId', getInvoiceById)

// create an invoice for a specific vendor  
invoiceRouter.post('/', createInvoiceForVendor)


// update an invoice for a specific vendor
invoiceRouter.put('/:invoiceId', updateInvoiceForVendor)

// delete an invoice for a specific vendor
invoiceRouter.delete('/:invoiceId', deleteInvoiceForVendor)


    
    
    


export default invoiceRouter