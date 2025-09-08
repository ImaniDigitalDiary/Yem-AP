import express from 'express'

const router = express.Router()


// get all invoices for a specific vendor
router.get('/:vendorId/invoices', getAllInvoices)

// fetch a specific singular invoice in a vendor
router.get('/:vendorId/invoices/:invoicesId', getInvoiceById)

// create an invoice 
router.post('/:vendorId/invoices', createAnInvoice)

// update an invoice
router.put('/:vendorId/invoices/:invoiceId', updateAnInvoice)

// delete an invoice
router.delete('/:vendorId/invoice/:invoiceId', deleteAnInvoice)

export default router