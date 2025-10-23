import React, {useState} from 'react'

// TOAST
import toast from 'react-hot-toast'

const InvoiceSearch = ({setInvoices}) => {
    // Implement search functionality here.
    // When the user types in the search input, update the state of the component
    const [invoiceSearchQuery, setInvoiceSearchQuery] = useState('')
    // You can use an event listener or a controlled input component to achieve this.
    // When the user clicks the search button, make an API call to fetch invoices based on the search query using event handler
    const handleSearchClick = async (query) =>  { 
        try {
            // Make API call to fetch invoices based on the invoiceSearchQuery
            const reponse = await axiosAPI.get(`/vendors/${vendorId}/invoices?search=${query}`)
            // Update the state of invoices with the fetched invoices
            setInvoices(reponse.data)
        } catch (error) {
            console.log('Error fetching invoices', error)
            // if error, clear results to an empty array so that it goes back to the vendor's invoices list
            if (error.response && error.response.status === 404) {
                setInvoices([])
        } else {
            toast.error('Failed to fetch invoices')
        }
    }
}

  return (
    <div>
      <input type='text' placeholder='Search Invoices' />
      <button onClick={handleSearchClick}>Click to search invoices</button>
    </div>

  )
}

export default InvoiceSearch
