// fxn to get all vendors
export function getAllVendors (req,res) {
    res.status(200).send('Got all vendors successfully')
}

// fxn to create a vendor
export function createAVendor (req,res) {
    res.status(201).json({message: 'created a vendor successfully'})
}


// fxn to update a vendor
export function updateAVendor (req,res)  {
    res.status(200).json({message: 'updated a vendor successfully'})
}

// fxn to delete a vendor
export function deleteAVendor (req, res) {
    res.status(200).json({message: 'deleted a vendor successfully'})
}