import express from 'express'
import { getAllVendors, getVendorById, createAVendor, deleteAVendor, updateAVendor } from '../controllers/vendorsController.js'

const router = express.Router()

// get all vendors
router.get('/', getAllVendors)

// fetch a specific singular vendor
router.get('/:vendorId', getVendorById)

// create a vendor
router.post('/', createAVendor)

// update a vendor
router.put('/:vendorId', updateAVendor)

// delete a vendor
router.delete('/:vendorId', deleteAVendor)

export default router