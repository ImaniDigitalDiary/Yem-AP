import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


// AXIOS IMPORT
import axiosAPI from '../../lib/axios'
const VendorSearch = ({vendors, setVendors}) => { //default vendors prop is empty array and setVendors prop is a function so that we can update vendors array in parent component without  showing error to the user as undefined
  const [vendorQuery, setVendorQuery] = useState('')
  
  // fxn to fetch vendors based on search query from the backend 
  const handleSearchVendors = async (query) => {
    console.log('Searching for vendors with query: ', query)
    try {
      const response = await axiosAPI.get(`/vendors?search=${query}`)
      setVendors(response.data)
      // toast.success('Vendors fetched successfully')
    } catch (error) {
      console.log('Error fetching vendors', error)
      // if error, clear results to an empty array
      if (error.response && error.response.status === 404) {
      setVendors([]) //no vendors found from search input
    } else {
      toast.error('Failed to fetch vendors')
    }
  }
}


// live search effect (debounce effect)
useEffect(() => {
  const delayDebounce = setTimeout (() => {
    handleSearchVendors(vendorQuery)
  }, 500)
  
  return () => clearTimeout(delayDebounce)
}, [vendorQuery, setVendors])  // useEffect will run only when vendorQuery changes



  return (
    <div className='p-4'>
      {/* Search Input */}
      <div className='flex items-center gap-2'>
        <input 
          type="text"
          placeholder='Search Vendors...'
          className='p-2 rounded-md w-96 border'
          value={vendorQuery}
          onChange={(e) => setVendorQuery(e.target.value)}
          
        />
        
        <button
          className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
          onClick={() => handleSearchVendors(vendorQuery)  }
        >
          Search Vendors
        </button>
    </div>
  </div>
  )
}

export default VendorSearch
