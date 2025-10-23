import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router'

// AXIOS FETCH LIB
import axiosAPI from '../../lib/axios'

// TOAST
import toast from 'react-hot-toast'


const InvoiceSearch = ({setInvoices}) => {
    const {vendorId} = useParams()  // grab vendorId from the route parameters
    
    // Implement search functionality here. // When the user types in the search input, update the state of the component
    const [invoiceSearchQuery, setInvoiceSearchQuery] = useState('')
    // You can use an event listener or a controlled input component to achieve this. // When the user clicks the search button, make an API call to fetch invoices based on the search query using event handler
    const handleSearchInvoices = async () =>  { 
        try {
            // if the search box (query) is empty, reload all invoices for the vendor
            if (!invoiceSearchQuery.trim()) {
                // fetch all invoices for the vendor
                const response = await axiosAPI.get(`/vendors/${vendorId}/invoices`)
                setInvoices(response.data)
                return // **EARLY RETURN - if search query is empty, return to the vendor's invoices list - w/o this return statement, the fxn would keep running and hit the next API call below
            }

            // Otherwise, make API call to fetch invoices based on the invoiceSearchQuery
            const reponse = await axiosAPI.get(`/vendors/${vendorId}/invoices/search`, {
                params: {query: invoiceSearchQuery}  // pass the search query as a parameter to the API call
            })

            // Update the state of invoices with the fetched invoices
            setInvoices(reponse.data)

        } catch (error) {
            console.log('Error fetching invoices', error)
            // Clear all invoices if there is a 404 error, meaning no invoices were found for the given search query
            if (error.response && error.response.status === 404) {
                setInvoices([]) // if error, clear results to an empty array so that it goes back to the vendor's invoices list
        } else {
            toast.error('Failed to fetch invoices')
        }
    }
}

useEffect(() =>  {
    const delayDebounce = setTimeout(() => {
        handleSearchInvoices(invoiceSearchQuery) // fetch invoices after 300ms of inactivity
    }, 300) 

    return () => clearTimeout(delayDebounce) // clear the timeout when the component unmounts
}, [invoiceSearchQuery]) // useEffect will run only when invoiceSearchQuery changes

  return (
    <div className='p-4'>
        <div className='flex items-center gap-2'>
            <input 
                value={invoiceSearchQuery}
                onChange={(e) => setInvoiceSearchQuery(e.target.value)}  // Update the state of invoiceSearchQuery when the input changes
                type='text' 
                placeholder='Search Invoices...'
                className='p-2 rounded-md w-96 border' 
            />
            <button
                className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
                onClick={() => handleSearchInvoices(invoiceSearchQuery)}  // When the user clicks the search button, call the handleSearchClick function
            >
                Click to search invoices
            </button>
        </div>
        
    </div>

  )
}

export default InvoiceSearch
