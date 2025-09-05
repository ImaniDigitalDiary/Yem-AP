import express from 'express'
import { createAVendor, deleteAVendor, getAllVendors, updateAVendor } from '../controllers/vendorsController.js'

const router = express.Router()

// get all vendors
router.get('/', getAllVendors)

// create a vendor
router.post('/', createAVendor)

// update a vendor
router.put('/:id', updateAVendor)

// delete a vendor
router.delete('/:id', deleteAVendor)

export default router