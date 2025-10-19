import express from 'express'
// vendor controller
import { searchVendors, getVendorById, createAVendor, deleteAVendor, updateAVendor } from '../controllers/vendorsController.js'

// invoice routes
import invoicesRoutes from './invoicesRoutes.js'

const router = express.Router()


// CRUD OPERATION ROUTES FOR VENDORS
// ** get all vendors
router.get('/', searchVendors) // This will be the main route for vendors - GET ALL VENDORS - SEARCH VENDORS
// ** search vendors by name or email - THIS ALSO HANDLES GET ALL VENDORS
// router.get('/', getAllVendors)
// ** fetch a specific singular vendor
router.get('/:vendorId', getVendorById)
// ** create a vendor
router.post('/', createAVendor)
// ** update a vendor
router.put('/:vendorId', updateAVendor)
// ** delete a vendor
router.delete('/:vendorId', deleteAVendor)



// **** NESTED INVOICE ROUTES
router.use('/:vendorId/invoices', invoicesRoutes)

export default router