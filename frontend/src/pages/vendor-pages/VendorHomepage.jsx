// ***********************************
import React, { useEffect } from 'react'
import { useState } from 'react'

// COMPONENTS
import VendorNavbar from '../../components/vendor-components/VendorNavbar'
import VendorsTable from '../../components/vendor-components/VendorsTable'
import VendorsNotFound from '../../components/vendor-components/VendorsNotFound'


// AXIOS
import axiosAPI from '../../lib/axios'

const VendorHomepage = () => {
  const [vendors, setVendors] = useState([]) 


  // fetch vendors from backend
  useEffect(() => {
    const fetchVendors = async () => {
    try {
      // create response variable, grab axios api routes and get vendors from param
      const vendorFetchResponse = await axiosAPI.get('/vendors')
      // store fetched vendors in component state so the UI can rendor them
      setVendors(vendorFetchResponse.data)
    } catch (error) {
      console.log('Error fetching vendors')
      console.log(error)
    }
  }
  fetchVendors()
}, [])

  return (
    <div>
      <VendorNavbar />
      <div>
        {/* if vendors array length is equal to 0, then render VendorsNotFound component */}
        {vendors.length === 0 && <VendorsNotFound/> }

        {/* if vendors array length is greater than 0, then map through the vendor array then return the vendor table with vendors  */}
        {vendors.length > 0 && (
              <VendorsTable vendors={vendors} setVendors={setVendors} />
            )}
      </div>
    </div>
  )
}

export default VendorHomepage

