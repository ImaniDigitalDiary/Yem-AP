import React from 'react'

const VendorInfoCard = ({vendor}) => {
  if (!vendor) return <InvoicesNotFound />

  // an array of objects representing each vendor info group. Each group contains an array of objects with label and value properties.
  // all the vendor info that are displayed in the card are fetched from this array.
  const vendorInfoGroups = [
    [
      {label: 'Vendor DBA Name', value: vendor.dbaName },
      { label: 'Tax ID', value: vendor.taxId },
    ],
    [ {label: 'Vendor Address', value: vendor.vendorAddress } ],
    [
      { label: 'Primary Contact', value: vendor.primaryContact },
      { label: 'Contact Role', value: vendor.contactRole },
    ],
    [
      { label: 'ACH Email', value: vendor.vendorEmail },
      { label: 'Phone Number', value: vendor.phoneNumber },
    ],
  ]
  return (
    <div>
      VendorCard
    </div>
  )
}

export default VendorInfoCard
