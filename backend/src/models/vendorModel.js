import mongoose from 'mongoose';
import { type } from 'os';

// 1 - create a schema
// 2 - then create a model based off that schema

// 1 - create a schema
const vendorSchema = new mongoose.Schema({
    // BASIC VENDOR INFO
    vendorName: {
        type: String, 
        // required: true
    },
    dbaName: {
        type: String
    },
    vendorAddress: { //indiv, corp, llc, sole prop, nonprofit, etc)
        type: String 
    },
    taxId: {
        type: String
    },
    // CONTACT INFO
    primaryContact: {
        type: String
    },
    contactRole: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    vendorEmail: {
        type: String,
        // required: true
    },
    
}, {timestamps: true}) //mongo by default will give you createdAt, updatedAt



// 2 - then create a model based off that schema
const vendorModel = mongoose.model('Vendor', vendorSchema)

export default vendorModel




// ADDRESS INFO - add later
    // remit-to-address
    // mailing address (if diff. from remit addy)

// PAYMENT INFO - add later
    // preferred payment method (ACH, Wire, CC, etc.)
    // Bank Name
    // Bank Acct. # (masked in UI)
    // Routing # - SWIFT Code (for international)
    // Currency

// TAX & COMPLIANCE
    // W-9 Form on File (each vendors w9 save & AP can view on vendor details)
    // 1099 Eligible (Y/N)