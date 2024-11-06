'use client'

import { useEffect, useState } from 'react'
import { getListings } from '../../actions/listings'

export default function TablePage() {
  const [listings, setListings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings()
        setListings(data || [])
      } catch (error) {
        console.error('Error fetching listings:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [])

  if (loading) {
    return <div className="p-4">Loading...</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Listings Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Property Type</th>
              <th className="px-4 py-2 border">Bedrooms</th>
              <th className="px-4 py-2 border">Bathrooms</th>
              <th className="px-4 py-2 border">Size</th>
              <th className="px-4 py-2 border">For Rent</th>
              <th className="px-4 py-2 border">Created At</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{listing.id}</td>
                <td className="px-4 py-2 border">{listing.title}</td>
                <td className="px-4 py-2 border">{listing.description}</td>
                <td className="px-4 py-2 border">${listing.price}</td>
                <td className="px-4 py-2 border">{listing.location}</td>
                <td className="px-4 py-2 border">{listing.status}</td>
                <td className="px-4 py-2 border">{listing.property_type}</td>
                <td className="px-4 py-2 border">{listing.bedrooms}</td>
                <td className="px-4 py-2 border">{listing.bathrooms}</td>
                <td className="px-4 py-2 border">{listing.size}</td>
                <td className="px-4 py-2 border">{listing.for_rent ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2 border">
                  {new Date(listing.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
