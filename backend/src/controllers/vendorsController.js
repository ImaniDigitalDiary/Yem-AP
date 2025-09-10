// import vendorModel from '../models/Vendor.js'
import Vendor from '../models/vendorModel.js'

// fxn to get all vendors
export async function getAllVendors (_,res) { //using an _ instead of req when declared but value is never read
    try {
        // fetch all vendors - using .find() will give ALL vendors
        const vendors = await Vendor.find().sort({createdAt: -1}) //createdAt -1 will sort the vendors from newest to oldest
        res.status(200).json(vendors)
    } catch (error) {
        console.error('Error in getAllVendors controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}

export async function getVendorById(req, res) {
    try {
        //check to see if vendor exists
        const vendor = await Vendor.findById(req.params.vendorId)
        if(!vendor) {
            return res.status(404).json({message: 'Vendor not found!'})
        } else {
            res.json(vendor)
        }
    } catch (error) {
        console.error('Error in getVendorById controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}

// fxn to create a vendor
export async function createAVendor (req,res) {
    try {
        const {vendorName, vendorEmail} = req.body
        const vendor = new Vendor({vendorName, vendorEmail})

        const savedVendor = await vendor.save()
        res.status(201).json(savedVendor)
    } catch (error) {
        console.error('Error in ceateVendor controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}


// fxn to update a vendor
export async function updateAVendor (req,res)  {
    try {
        const {vendorName, vendorEmail} = req.body //will give us some data 
        const updatedVendor = await Vendor.findByIdAndUpdate(
            req.params.vendorId, 
            {vendorName, vendorEmail},
            {
                new: true,
            }
        )
        if (!updatedVendor) return res.status(404).json({message: 'Vendor not found'})
        res.status(200).json(updatedVendor)
    } catch (error) {
        console.error('Error in updatedAVendor controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}

// fxn to delete a vendor
export async function deleteAVendor (req, res) {
    try {
        const {vendorName, vendorEmail} = req.body 
        const deletedVendor = await Vendor.findByIdAndDelete(
            req.params.vendorId,
            {vendorName, vendorEmail},
            {
                new: true,
            }
        )
        if (!deletedVendor) return res.status(404).json({message: 'Vendor not found'})
        res.status(200).json({message: 'Vendor deleted successfully'})
    } catch (error) {
        console.error('Error in deleteAVendor controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}