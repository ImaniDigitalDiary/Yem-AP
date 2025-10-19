import React from 'react'

const InvoiceSearch = ({invoices, setInvoices}) => {
    const [invoiceQuery, setInvoiceQuery] = useState('')

    // fxn to fetch invoices based on search query from the backend 
    const handleSearchInvoices = async (query) => {
        try {
            const response = await axios.get(`/invoices?search=${query}`)
            setInvoices(response.data)
        } catch (error) {
            console.log('Error fetching invoices', error)
            // if error, clear results to an empty array
            if (error.response && error.response.status === 404) {
                setInvoices([])
            } else {
                toast.error('Failed to fetch invoices')
            }
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default InvoiceSearch
