// import vendorModel from '../models/Vendor.js'
import Vendor from '../models/vendorModel.js'
import Invoice from '../models/invoiceModel.js'

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


// fxn to get a specific vendor by ID
export async function getVendorById(req, res) {
    try { 
        const vendorId = req.params.vendorId  // access parameter from the URL
        //check to see if vendor exists
        const vendor = await Vendor.findById(req.params.vendorId)
        if(!vendor) {
            return res.status(404).json({message: 'Vendor not found!'})
        } 
        res.status(200).json(vendor)  // return the vendor object if it exists
    } catch (error) {
        console.error('Error in getVendorById controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}

// fxn to create a vendor
export async function createAVendor (req,res) {
    try {
        const {vendorName, dbaName, vendorType, taxId, primaryContact, contactRole, phoneNumber, vendorEmail} = req.body
        const vendor = new Vendor({vendorName, dbaName, vendorType, taxId, primaryContact, contactRole, phoneNumber, vendorEmail, })

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
                new: true //ensure that the modified document is returned in the callback or promise. without new: true, would typically return the original unmodofied docuemtn by default
            },
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




// SEARCH FEATURE - fxn to search through vendors
export async function searchVendors(req, res) {
    try { 
        const {searchVendorsQuery} = req.query
        const findVendor = await Vendor.find({vendorName: {$regex: searchVendorsQuery, $options: 'i'}})
        // if no vendors are found, return a 404 status code and a message 
        if (!findVendor) return res.status(404).json({message: 'No vendors found matching the search query'})
            // if else, return a 200 status code and the found vendor(s)
            res.status(200).json(findVendor)
    } catch (error) {
        console.error('Error in searchVendors controller', error)
        res.status(500).json({message: 'Internal server error'})
    }
}